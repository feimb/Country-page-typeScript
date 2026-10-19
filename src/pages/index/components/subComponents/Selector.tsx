import {ChevronDown} from "lucide-react"
import "./selector.css"
import type { Dispatch } from "react";

export const Selector = ({setSortBy}:{setSortBy:Dispatch<string>}) => {
    return (
        <div className=" relative flex ">
            <select
                defaultValue={"population"}
                id="selector"
                className="w-full appearance-none border border-border-primary p-2 text-sm rounded-lg outline-0 peer"
                onChange={(e)=>{
                    setSortBy(e.currentTarget.value);
                    console.log(e.currentTarget.value);
                }}
            >
                <option value="none">None</option>
                <option value="population">Population</option>
                <option value="area">Area(km²)</option>
            </select>
            <ChevronDown size={18}  className="absolute right-2 top-2.5 peer-open:rotate-180 transition-all"/>
        </div>
    );
};
