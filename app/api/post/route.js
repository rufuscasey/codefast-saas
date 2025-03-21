/** @format */

// API route for user to create a post.
// the route is not protected by the auth middleware, so anyone can create a post. The route expects a post request with a titel and description in teh request body.
// The boardid is in the query parameters and the the userID field is populated with the user's ID if they are logged in.

import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import User from "@/models/User";
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

export async function DELETE(req) {
	try {
		const { searchParams } = req.nextUrl;
		const postId = searchParams.get("postId");

		if (!postId) {
			return NextResponse.json(
				{ error: "postId is required" },
				{ status: 400 }
			);
		}

		const session = await auth();

		await connectMongo();

		const user = await User.findById(session.user.id);

		if (!user.hasAccess) {
			return NextResponse.json(
				{ error: "Please subscribe first" },
				{ status: 403 }
			);
		}
		// check the user deleting the post owns the board
		const post = await Post.findById(postId);
		if (!post) {
			return NextResponse.json(
				{ error: "Post not found" },
				{ status: 404 }
			);
		}

		if (!user.boards.includes(post.boardId.toString())) {
			return NextResponse.json(
				{ error: "Posts can only be deleted by the board owner" },
				{ status: 401 }
			);
		}

		await Post.deleteOne({ _id: postId });
		return NextResponse.json({ message: "Post deleted" });
	} catch (e) {
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}
