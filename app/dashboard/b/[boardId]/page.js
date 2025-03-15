import Link from "next/link";
import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { auth } from "@/auth";
import CardBoardLink from "@/components/CardBoardLink";
import ButtonDeleteBoard from "@/components/ButtonDeleteBoard";


const getBoard = async (boardId) => {
    const session = await auth();
    
    await connectMongo();
    console.log("boardId:", boardId);
    
    const board = await Board.findOne({
        _id: boardId,
        // filter by userId
        userId: session?.user?.id
    });
    if (!board) {
        console.log("Board not found");
        redirect("/dashboard");
    }
    
    return board;
};

export default async function FeedbackBoard({ params }) {
    const { boardId } = params;
    const board = await getBoard(boardId); 
    return <main className="bg-base-200 min-h-screen">
        {/* HEADER */}
        <section  className="bg-base-100 ">
            <div className="max-w-5xl mx-auto px-5 py-3 flex">
                <Link href="/dashboard" className="btn "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
</svg>
  Back
                    </Link>
            </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 py-12 space-y-12">
        <h1 className="font-extrabold text-xl mb-4">{board.name}</h1> 

        <CardBoardLink boardId={board._id.toString()} />

        <ButtonDeleteBoard boardId={board._id.toString()} />
        </section>
                
        
                
        </main>;
}