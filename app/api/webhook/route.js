/** @format */

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
	try {
		console.log(req.body);
		// verify the event is coming from Stripe
		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

		const body = await req.text();
		const signature = headers().get("stripe-signature");
		const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

		const event = stripe.webhooks.constructEvent(
			body,
			signature,
			webhookSecret
		);

		const { data, type } = event;

		if (type === "checkout.session.completed") {
			await connectMongo();
			const user = await User.findById(data.object.client_reference_id);
			user.hasAccess = true;
			user.customerId = data.object.customer;
			await user.save();
		}
	} catch (e) {
		console.error("Stripe error: " + e?.message);
		return NextResponse.json(
			{ error: e.message || "Stripe webhook error" },
			{ status: 500 }
		);
	}
	return NextResponse.json({});
}
