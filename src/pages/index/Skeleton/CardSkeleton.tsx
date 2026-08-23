import Skeleton from "react-loading-skeleton";

export const CardSkeleton = () => {
    return (
        <p className="text-sm font-bold">
            <Skeleton count={1} width={140} />
        </p>
    );
};
