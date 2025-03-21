/** @format */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const FormNewPost = ({ boardId }) => {
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (isLoading) return;

		setIsLoading(true);

		try {
			// Create a new post via API
			await axios.post(`/api/post?boardId=${boardId}`, {
				title,
				description,
			});
			// console.log(data);
			// Clear the form
			setTitle("");
			setDescription("");
			router.refresh();
			toast.success("Post created!");
		} catch (error) {
			const errorMessage =
				error.response?.data?.error ||
				error.message ||
				"Something went wrong";
			console.error(error);
			toast.error(errorMessage);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<form
			className="bg-base-100 p-8 rounded-3xl space-y-8"
			onSubmit={handleSubmit}
		>
			<label className="form-control w-full ">
				<div className="label">
					<span className="label-text">Short, descriptive title</span>
				</div>
				<input
					type="text"
					placeholder="Super Sweet Feature so I can do X"
					className="input input-bordered w-full "
					required
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					maxLength={100}
				/>
			</label>

			<label className="form-control w-full ">
				<div className="label">
					<span className="label-text" maxLength="100">
						Your Feedback
					</span>
				</div>
				<textarea
					className="textarea h-24 textarea-bordered w-full"
					placeholder="I wish I could do X, so I can achieve Y. It's important to me in my role as [Customer Support Rep] because my main job is to Z and currently it takes way too long."
					maxLength={1000}
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				></textarea>
			</label>

			<button className="btn btn-primary w-full" type="submit">
				{isLoading && (
					<span className="loading loading-spinner loading-sm"></span>
				)}
				Create Post
			</button>
		</form>
	);
};

export default FormNewPost;
