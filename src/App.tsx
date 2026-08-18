import { MainLayout } from "./layout/MainLayout";
import { Index } from "./pages/index/Index";
import { Routes, Route } from "react-router";

function App() {
    return (
        <Routes >
            <Route element={<MainLayout/>} >
                <Route path="/" element={<Index />} />

            </Route>
        </Routes>
    );
}

export default App;
