import { Outlet } from "react-router";
import { Card } from "./Card";
import { MainLayout } from "./MainLayout";

export const CountriesLayout = ({className}:{className?:string}) => {
    return (
        
        <MainLayout >
            <Card className={`min-h-[60vh]   -mt-4 ${className}`}>
                <Outlet />
            </Card>
        </MainLayout>
    );
};
