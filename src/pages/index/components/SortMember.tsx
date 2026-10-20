import type { Dispatch, SetStateAction } from "react";
import { CheckBox } from "./subComponents/CheckBox";

export const SortMember = ({
    checks,
    setChecks,
}: {
    checks: { label: string; isActive: boolean }[];
    setChecks: Dispatch<
        SetStateAction<{ label: string; isActive: boolean }[]>
    >;
}) => {
    const handleCheck = (label: string) => {
        setChecks((prev) =>
            prev.map((check) =>
                check.label === label
                    ? { ...check, isActive: !check.isActive }
                    : check,
            ),
        );
    };
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
                {checks.map(({ label, isActive }) => (
                    <div key={label} onClick={() => handleCheck(label)}>
                        <CheckBox label={label} isActive={isActive} />
                    </div>
                ))}
            </div>
        </div>
    );
};
