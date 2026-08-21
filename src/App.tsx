import { MainLayout } from "./layout/MainLayout";
import { Index } from "./pages/index/Index";
import { Routes, Route } from "react-router";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
    return (
        <SkeletonTheme baseColor="#6c727f" highlightColor="#444">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Index />} />
                </Route>
            </Routes>
        </SkeletonTheme>
    );
}

export default App;
