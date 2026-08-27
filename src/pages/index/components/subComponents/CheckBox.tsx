import { useState } from "react";
import checkSvg from "../../../../assets/Done_round.svg";
export const CheckBox = ({
    label,
    isActive,
}: {
    label: string;
    isActive: boolean;
}) => {
    const [checkActive, setCheckActive] = useState<boolean>(isActive);

    return (
        <div className="mt-2 gap-2 flex items-center  h-5 w-auto relative">
            <input
                type="checkbox"
                name="Status"
                className={`h-5 w-5 border-2 border-text-primary bg-primary appearance-none rounded checked:bg-check-color checked:border-check-color transition-all`}
                checked={checkActive}
                onChange={(e) => setCheckActive(e.target.checked)}
                style={{
                    backgroundImage: checkActive
                        ? `url(${checkSvg})`
                        : undefined,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <label htmlFor="Member" className="text-xs font-medium">
                {label}
            </label>

            {checkActive && (
                <img
                    src={checkSvg}
                    alt=""
                    className="pointer-events-none absolute inset-0 h-5 w-5 "
                />
            )}
        </div>
    );
};
