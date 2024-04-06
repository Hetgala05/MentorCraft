import { useState } from "react";
import { FcInfo } from "react-icons/fc";

const PricingCard = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { 
            name: 'Start', 
            monthlyPrice: 19, 
            yearlyPrice: 199, 
            description: "Basic plan includes Basic functionalities", 
            points: [
                "Videos Related to the Doubts",
                "Homework check",
            ],
            green: "/src/assets/green-dot.png" 
        },
        { 
            name: 'Advanced', 
            monthlyPrice: 39, 
            yearlyPrice: 399, 
            description: "Advanced includes some more functionalities than Basic", 
            points: [
                "Advanced Videos Related to the Doubts",
                "Advanced Homework check",
                "Advanced Additional practical task",
            ],
            green: "/src/assets/green-dot.png" 
        },
        { 
            name: 'Premium', 
            monthlyPrice: 59, 
            yearlyPrice: 599, 
            description: "Premium is the best as there are no restrictions", 
            points: [
                "Premium Videos Related to the Doubts",
                "Premium Homework check",
                "Premium Additional practical task",
                "Premium Monthly conferences",
                "Premium Personal advice from teachers"
            ],
            green: "/src/assets/green-dot.png" 
        },
    ];

    return (
        <div className="py-8 md:px-14 p-4 max-w-screen-2xl mx-auto" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-2xl font-extrabold mb-4">Here are all our plans</h2>
                <h3 className="text-tertiary md:w-1/3 mx-auto">Choose the one which suits you the best, All of this will provide you with the best output possible.</h3>
                <div className="my-6">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 transition duration-200 bg-gray-300 ease-in-out rounded-full">
                            <div className={`w-6 h-6 transition duration-200 ease-in-out rounded-full ${isYearly ? 'bg-primary ml-8' : 'bg-gray-500'}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input
                        type="checkbox"
                        id="toggle"
                        className="hidden"
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                    />
                </div>
            </div>
            <div className="flex justify-around flex-wrap md:flex-row md:flex-wrap lg:flex-wrap">
                {packages.map((pkg, index) => (
                    <div key={index} className="border border-gray-300 h-full rounded-lg p-8 w-full md:w-80 lg:w-80 mb-8 md:mb-8 shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-gray-200">{pkg.name}</h3>
                        <h3 className="text-tertiary text-center my-6">{pkg.description}</h3>
                        <p className="text-center text-secondary text-4xl font-bold">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}<span className="text-base text-tertiary font-medium">/{isYearly ? 'year' : 'month'}</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4">
                            {pkg.points.map((point, index) => (
                                <li key={index} className="flex items-center">
                                    <FcInfo className="mr-2 text-xl"/>
                                    <p>{point}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full mx-auto flex items-center justify-center mt-2">
                            <button className="mt-6 px-10 text-secondary py-3 border border-secondary hover:bg-secondary font-semibold rounded-lg hover:bg-[#ffffffb1] hover:text-black transition duration-300 ">
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;
