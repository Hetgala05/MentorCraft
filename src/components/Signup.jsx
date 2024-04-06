import React from "react";
import { useState } from "react";
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

const Signup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="header flex flex-col items-center">
                <div className="text text-white text-4xl font-bold">
                    {action}
                </div>
                <div className="underline w-16 h-2 bg-purple-700 rounded-md mt-2"></div>
            </div>
            <div className="inputs mt-14 flex flex-col gap-8">
                {action === "Login" ? null : (
                    <div className="input flex items-center justify-between w-full max-w-md px-12 py-2 bg-gray-300 rounded-lg">
                        <img className="ml-[-2.25rem]" src={user_icon} alt=""/>
                        <input type="text" placeholder="Name" className="w-full bg-transparent focus:outline-none text-gray-800 text-lg"/>
                    </div>
                )}
                <div className="input flex items-center justify-between w-full max-w-md px-12 py-2 bg-gray-300 rounded-lg">
                    <img className="ml-[-2.25rem]" src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Id" className="w-full bg-transparent focus:outline-none text-gray-800 text-lg"/>
                </div>
                <div className="input flex items-center justify-between w-full max-w-md px-12 py-2 bg-gray-300 rounded-lg">
                    <img className="ml-[-2.25rem]" src={password_icon} alt=""/>
                    <input type="password" placeholder="Password" className="w-full bg-transparent focus:outline-none text-gray-800 text-lg"/>
                </div>
            </div>
            {action === "Sign Up" ? null : (
                <div className="forgot-password text-white mt-8 text-lg">
                    Forgot password ? <span className="text-red-500 cursor-pointer">Click here!</span>
                </div>
            )}
            <div className="submit-container flex gap-8 mt-16">
                <div className={`submit px-9 py-4 bg-purple-700 text-lg text-white font-bold rounded-lg cursor-pointer ${action === "Login" ? "opacity-50" : ""}`} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={`submit px-9 py-4 bg-purple-700 text-lg text-white font-bold rounded-lg cursor-pointer ${action === "Sign Up" ? "opacity-50" : ""}`} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default Signup;
