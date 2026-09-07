import { Index } from "./pages/index/Index";
import { Routes, Route } from "react-router";
import { SkeletonTheme } from "react-loading-skeleton";
import { CountriesLayout } from "./layout/CountriesLayout";
import { CountryPage } from "./pages/Country/CountryPage";

function App() {
    return (
        <SkeletonTheme baseColor="#6c727f" highlightColor="#444">
            <Routes>
                <Route element={<CountriesLayout className=""/>}>
                    <Route path="/" element={<Index />} />
                </Route>
                <Route element={<CountriesLayout className="w-full rounded-none sm:w-[95%] sm:rounded-lg" />}>
                    <Route path="/:code" element={<CountryPage/>} />
                </Route>
            </Routes>
        </SkeletonTheme>
    );
}

export default App;
