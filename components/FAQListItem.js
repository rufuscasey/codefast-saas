"use client";
import { useState } from "react";   
const FAQListItem = ({qa}) => {
    
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <li key={qa.question}>
            {/* 1. Question (clickable) */}
            <button 
            onClick={() => setShowAnswer (!showAnswer)} 
            className="py-6 font-semibold w-full text-left flex items-center justify-between"
            >
                
                <p>{qa.question}</p>
                {showAnswer ? (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        className="size-5"
                    >
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="size-5"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                  )}
            
            </button>
            

            {/* 2. Answer (hidden) */}
            
            <div className={`${showAnswer ? "block" : "hidden"} mt-0 mb-6 opacity-90 border-b pb-6`} >{qa.answer}</div> 
            
        </li>

    );
}

export default FAQListItem;