import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";



const getBoard = async (boardId) => {
    
    
    await connectMongo();
    console.log("boardId:", boardId);
    
    const board = await Board.findById(boardId);
    
    if (!board) {
        console.log("Board not found");
        redirect("/");
    }
    
    return board;
};

export default async function PublicFeedbackBoard({ params }) {
    const { boardId } = params;
    const board = await getBoard(boardId); 
    return <main>{board.name} (public)</main>;
}