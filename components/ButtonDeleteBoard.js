"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";


const ButtonDeleteBoard = ({boardId}) => {
    const router = useRouter();
    const handleDeleteBoard = async () => {
        try {
            const isUserSure = window.confirm("Are you sure you want to delete this board?");
            console.log("isUserSure:", isUserSure);

            if (isUserSure) {
                console.log("Deleting board..." + boardId);
                await axios.delete(`/api/board?boardId=${boardId}`);
                toast.success("Board deleted!");
                // First navigate
                router.push("/dashboard");
            
                // I added this but I think it's missing from instructions...)
                 router.refresh();
                
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.error ||
                error.message ||
                "Failed to delete board";
            console.error(error);
            toast.error(errorMessage);
        }
    };
    
    
    return  <button className="btn btn-ghost" onClick={handleDeleteBoard}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-5">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            Delete
        </button>;
};

export default ButtonDeleteBoard;