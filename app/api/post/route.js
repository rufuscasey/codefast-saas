/** @format */

// API route for user to create a post.
// the route is not protected by the auth middleware, so anyone can create a post. The route expects a post request with a titel and description in teh request body.
// The boardid is in the query parameters and the the userID field is populated with the user's ID if they are logged in.

import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import { auth } from "@/auth";
import { Filter } from "bad-words";

export async function POST(req) {
	try {
		const body = await req.json();

		const { title, description } = body;

		const { searchParams } = req.nextUrl;
		const boardId = searchParams.get("boardId");

		const session = await auth();

		await connectMongo();

		const badWordsFilter = new Filter(); // create a new instance of the bad words filter
		const sanitizedTitle = badWordsFilter.clean(title); // clean the title
		const sanitizedDescription = badWordsFilter.clean(description); // clean the description

		if (!sanitizedTitle) {
			return NextResponse.json(
				{ error: "Title is required" },
				{ status: 400 }
			);
		}

		const post = await Post.create({
			title: sanitizedTitle,
			description: sanitizedDescription,
			userId: session?.user?.id,
			boardId,
		});

		return NextResponse.json(post);
	} catch (e) {
		console.error(e);
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}
