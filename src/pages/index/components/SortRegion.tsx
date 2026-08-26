import { useState } from "react";

export const SortRegion = () => {
    const buttons = ["Americas", "Antartic", "Africa", "Asia", "Europe","Oceania"];
    const [activeButton, setActiveButton] = useState<string>("");
    const handleClick = (button: string) => {
        if (!activeButton.includes(button)){
            setActiveButton( `${activeButton} ${button}`);
        }else(
            setActiveButton(activeButton.replace(button, " "))
        )
        
    };
    return (
        <div className="mt-4">
            <h3 className="text-xs font-bold mb-2">Region</h3>
            <div>
                {buttons.map((button) => (
                    <button
                        className={`px-2 py-1.5 m-1 text-sm  font-primary font-medium  bg-border-primary  rounded-xl cursor-pointer ${activeButton.includes(button) ? "bg-primary" : ""} transition-all duration-300`}
                        onClick={() => handleClick(button)}
                        key={button}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};
