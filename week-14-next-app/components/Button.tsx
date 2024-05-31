"use client"

import SignIn from "@/app/(auth)/signin/page"


export function Button(){
    return <div>
         <button onClick={SignIn} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
              Sign In
            </button>
    </div>
}