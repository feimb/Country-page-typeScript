import  type{ Dispatch,SetStateAction  } from "react";

export const SortRegion = ({regions ,setRegions}:{regions: Array<String | "" >; setRegions: Dispatch<SetStateAction<String[]>>}) => {
    const buttons = ["Americas", "Antartic", "Africa", "Asia", "Europe","Oceania"];
    const handleClick = (button: string) => {
        if(!regions.includes(button)){
            setRegions(prev => [...prev, button]);
        }else{
              
            setRegions(prev => prev.filter(value => value !==button))
        }
        
    };
    return (
        <div className="mt-4">
            <h3 className="text-xs font-bold mb-2">Region</h3>
            <div>
                {buttons.map((button) => (
                    <button
                        className={`px-2 py-1.5 m-1 text-sm  font-primary font-medium  bg-border-primary  rounded-xl cursor-pointer ${regions.includes(button) ? "bg-primary" : ""} transition-all duration-300`}
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
