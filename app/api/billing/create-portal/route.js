/** @format */

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Stripe from "stripe";

export async function POST(req) {
	try {
		const body = await req.json();

		if (!body.returnUrl) {
			return NextResponse.json(
				{ error: "Return URL is required" },
				{ status: 400 }
			);
		}

		const session = await auth();

		await connectMongo();
		const user = await User.findById(session.user.id);

		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

		const stripeCustomerPortal = await stripe.billingPortal.sessions.create(
			{
				customer: user.customerId,
				return_url: body.returnUrl,
			}
		);

		return NextResponse.json({ url: stripeCustomerPortal.url });
	} catch (e) {
		console.error(e);
		return NextResponse.json(
			{ error: e.message || "Failed to create checkout session" },
			{ status: 500 }
		);
	}
}
