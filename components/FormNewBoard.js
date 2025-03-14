"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const FormNewBoard = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isLoading) return;
        
        setIsLoading(true);

        try {
            // Create a new board via API
            const data = await axios.post("/api/board", { name });
            // console.log(data);
            // Clear the form
            setName("");
            router.refresh();
            toast.success("Board created!");
            
       
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
    }
    return (
    <form 
        className="bg-base-100 p-8 rounded-3xl space-y-8"
        onSubmit={handleSubmit}
        >
        <label className="form-control w-full ">
            <div className="label">
                <span className="label-text">Board Name</span>
            </div>
            <input 
                type="text" 
                placeholder="Future Unicorn Corp" 
                className="input input-bordered w-full "
                required 
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
        </label>

       <button className="btn btn-primary w-full" type="submit">
        {isLoading && <span className="loading loading-spinner loading-sm"></span>}
        Create Board</button>

    </form>
    )
};


export default FormNewBoard;