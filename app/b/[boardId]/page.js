/** @format */

import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import Post from "@/models/Post";
import FormNewPost from "@/components/FormNewPost";
import CardPost from "@/components/CardPost";

const getData = async (boardId) => {
	await connectMongo();

	const board = await Board.findById(boardId);
	const posts = await Post.find({ boardId }).sort({ createdAt: -1 });

	if (!board) {
		console.log("Board not found");
		redirect("/");
	}

	return {
		board,
		posts,
	};
};

export default async function PublicFeedbackBoard({ params }) {
	const { boardId } = params;

	const { board, posts } = await getData(boardId);

	return (
		<main className="min-h-screen bg-base-200">
			{board.name} (public)
			<FormNewPost boardId={boardId} />
			<ul>
				{posts.map((post) => (
					<CardPost key={post._id} post={post} />
				))}
			</ul>
		</main>
	);
}
