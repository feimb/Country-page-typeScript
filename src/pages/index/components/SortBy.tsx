import { Selector } from "./subComponents/Selector";

export const SortBy = () => {
  return (
    <div className="w-full flex flex-col">
        <label className="text-xs font-bold mb-4"  htmlFor="selector">
            Sort by
        </label>
        <Selector />
        
    </div>
  )
}
