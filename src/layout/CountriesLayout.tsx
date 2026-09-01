import { Outlet } from "react-router";
import { Card } from "./Card";
import { MainLayout } from "./MainLayout";

export const CountriesLayout = () => {
    return (
        <MainLayout>
            <Card className="min-h-[60vh] py-4 md:px-8 px-3 -mt-4">
                <Outlet />
            </Card>
        </MainLayout>
    );
};
