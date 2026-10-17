import Skeleton from "react-loading-skeleton";

export const NeighbouringCountrySkeleton = () => {
    return (
        <div className="flex flex-col items-center">
            <Skeleton width={96} height={64} />
            <p className="text-xs mt-2 font-medium"></p>
        </div>
    );
};
