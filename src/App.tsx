import { Index } from "./pages/index";
import { Routes, Route } from "react-router";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    );
}

export default App;
