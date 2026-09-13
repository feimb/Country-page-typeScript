import { Index } from "./pages/index/Index";
import { Routes, Route } from "react-router";
import { SkeletonTheme } from "react-loading-skeleton";
import { CountriesLayout } from "./layout/CountriesLayout";
import { CountryPage } from "./pages/Country/CountryPage";

function App() {
    return (
        <SkeletonTheme baseColor="#6c727f" highlightColor="#444">
            <Routes>
                <Route element={<CountriesLayout className="px-3 py-4 md:px-8"/>}>
                    <Route path="/" element={<Index />} />
                </Route>
                <Route element={<CountriesLayout className="w-full rounded-none mt-16  sm:w-[75%] sm:rounded-lg  md:-mt-4" />}>
                    <Route path="/:code" element={<CountryPage/>} />
                </Route>
            </Routes>
        </SkeletonTheme>
    );
}

export default App;
