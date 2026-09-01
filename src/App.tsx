import { Index } from "./pages/index/Index";
import { Routes, Route } from "react-router";
import { SkeletonTheme } from "react-loading-skeleton";
import { CountriesLayout } from "./layout/CountriesLayout";
import { CountryPage } from "./pages/Country/CountryPage";

function App() {
    return (
        <SkeletonTheme baseColor="#6c727f" highlightColor="#444">
            <Routes>
                <Route element={<CountriesLayout />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/:code" element={<CountryPage/>} />
                </Route>
            </Routes>
        </SkeletonTheme>
    );
}

export default App;
