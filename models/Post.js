/** @format */

// model for a Post, where a user can create a post and add it to a board.
// The Post model has a title, content, and a reference to the board it belongs to.
// The user can create a post by sending a POST request to /api/post with the title, content, and boardId in the request body, and if the user is logged in, we also save the user id.
// The user can delete a post by sending a DELETE request to /api/post with the postId in the query string but this is limited to only his/her posts.

import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
			maxlength: 100,
		},
		description: {
			type: String,
			trim: true,
			maxlength: 1000,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		boardId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Board",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
