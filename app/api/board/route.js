/** @format */

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

export async function POST(req) {
	try {
		const body = await req.json();

		if (!body.name) {
			return NextResponse.json(
				{ error: "Board name is required" },
				{ status: 400 }
			);
		}

		const session = await auth();

		if (!session) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		await connectMongo();

		const user = await User.findById(session.user.id);

		if (!user.hasAccess) {
			return NextResponse.json(
				{ error: "Please subscribe first" },
				{ status: 403 }
			);
		}

		const board = await Board.create({
			userId: user._id,
			name: body.name,
		});

		user.boards.push(board._id);
		await user.save();

		return NextResponse.json(board);
	} catch (e) {
		// send back error
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}

export async function DELETE(req) {
	try {
		const { searchParams } = req.nextUrl;
		const boardId = searchParams.get("boardId");

		if (!boardId) {
			return NextResponse.json(
				{ error: "BoardId is required" },
				{ status: 400 }
			);
		}

		// make sure the user owns the board
		const session = await auth();

		if (!session) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		const user = await User.findById(session?.user?.id);

		if (!user) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}
		// Check if the user has access
		if (!user.hasAccess) {
			return NextResponse.json(
				{ error: "Please subscribe first" },
				{ status: 403 }
			);
		}

		await Board.deleteOne({
			_id: boardId,
			userId: session?.user?.id,
		});

		user.boards = user.boards.filter((id) => id.toString() !== boardId);
		await user.save();
		return NextResponse.json({});
	} catch (e) {
		// send back error
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}
