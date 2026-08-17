import heroImg from "../../assets/hero-image.jpg"
import heroImgSm from "../../assets/hero-image-sm.jpg"
export const Index = () => {
    return (
        <main className="relative">
            <div className="h-[30vh] flex items-center justify-center bg-[#000002] absolute">
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
        </main>
    );
};
