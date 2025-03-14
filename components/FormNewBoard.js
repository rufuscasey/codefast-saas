"use client";

import { useState } from "react";

const FormNewBoard = () => {
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isLoading) return;
        
        setIsLoading(true);

        try {
            // Create a new board via API
            await fetch("api/board",{
                method: "POST",
                body: JSON.stringify({ 
                    name, 
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            
        } catch (error) {
            console.error(error);
            
        } finally {
            setIsLoading(false);
            console.log("hit 'finally'");
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