import {ChevronDown} from "lucide-react"
import "./selector.css"



export const Selector = () => {
    return (
        <div className=" relative flex">
            <select
                value={"population"}
                id="selector"
                className="w-full appearance-none border border-border-primary p-2 text-sm rounded-lg outline-0"
            >
                <option value="population">Population</option>
                <option value="area">Area(km²)</option>
            </select>
            <ChevronDown size={18}  className="absolute right-2 top-2.5"/>
        </div>
    );
};
