import { CheckBox } from "./subComponents/CheckBox";

export const SortMember = ({checks}:{checks:{label:string, isActive:boolean}[]}) => {

    return (
        <div>
            <h3 className="mt-4 text-xs font-bold">Status</h3>
            <div>
                {/* <div className="flex gap-1">
                    <input type="checkbox" name="Status" id="Member" className="bg-primary appearance-none "/>
                    <label htmlFor="Member" className={labelClass}>Member of the United Nations</label>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" name="Status" id="independent"/>
                    <label htmlFor="independent" className={labelClass}>Independent</label>
                </div> */}
                {checks.map(({label, isActive})=>(
                    <CheckBox label={label} isActive={isActive}  key={label}/>
                ))}
            </div>
        </div>
    );
};
