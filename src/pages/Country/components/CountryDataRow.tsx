export const CountryDataRow = ({
    title,
    content,
}: {
    title: string;
    content: string | string[];
}) => {
    return (
        <div className="w-full p-4 flex justify-between border border-border-primary ">
            <p>{title}</p>
            <p>{Array.isArray(content) ? content.join(",") : content}</p>
        </div>
    );
};
