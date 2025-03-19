/** @format */

import Link from "next/link";

export default async function SuccessPage() {
	return (
		<main className="min-h-screen bg-base-200 flex-col flex items-center justify-center gap-8">
			<h1 className="text-xl font-bold">Thanks for your purchase ❤️ </h1>
			<Link href="/dashboard" className="btn btn-primary">
				Dashboard
			</Link>
		</main>
	);
}
