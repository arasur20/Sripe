import { useState } from "react";

const ToggleButton = () => {
    const [isToggled, setIsToggled] =useState(false);
    return (
        <div className="flex items-center space-x-4">
            <button
            className={`w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${isToggled ? 'mbluebg' : 'bg-gray-400 '}`}
            onClick={() => setIsToggled(!isToggled)}
            >
                <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-4' : 'translate-x-0'}`}
                />
            </button>
        </div>
    );
    }
export default ToggleButton;