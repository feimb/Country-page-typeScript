import heroImg from "../assets/hero-image.jpg";
import heroImgSm from "../assets/hero-image-sm.jpg";
import { Outlet } from "react-router";
import Logo from "../assets/Logo.svg";
export const MainLayout = () => {
    return (
        <main className="relative">
            <div className="h-[30vh]  w-full flex items-center justify-center bg-[#000002] absolute -z-10">
                <img
                    src={heroImg}
                    alt=""
                    className="h-full hidden md:block object-cover"
                />
                <img
                    src={heroImgSm}
                    alt=""
                    className="h-full md:hidden object-cover"
                />
            </div>
            <div className="w-full h-[25vh] md:h-[30vh] flex items-center justify-center">
                <img
                    src={Logo}
                    alt="world rank logo"
                    className=" "
                />
            </div>
            <Outlet />
        </main>
    );
};
