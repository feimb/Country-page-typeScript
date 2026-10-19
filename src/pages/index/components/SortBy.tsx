import type { Dispatch } from "react";
import { Selector } from "./subComponents/Selector";

export const SortBy = ({setSortBy}:{setSortBy:Dispatch<string>}) => {
  return (
    <div className="w-full flex flex-col">
        <label className="text-xs font-bold mb-4"  htmlFor="selector">
            Sort by
        </label>
        <Selector setSortBy={setSortBy}/>
        
    </div>
  )
}
