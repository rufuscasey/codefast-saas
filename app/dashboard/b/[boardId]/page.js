import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { auth } from "@/auth";


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
    return <main>{board.name}</main>;
}