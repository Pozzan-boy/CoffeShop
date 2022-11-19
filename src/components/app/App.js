import { Route, BrowserRouter, Routes } from "react-router-dom";
import CoffeeItemPage from "../../pages/CofeeItemPage";
import CoffeePage from "../../pages/CoffeePage";
import MainPage from "../../pages/MainPage";
import PleasurePage from "../../pages/PleasurePage";
import Footer from "../footer/Footer";

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<MainPage />} />
                <Route path="/coffees" element={<CoffeePage />} />
                <Route path="/for-your-pleasure" element={<PleasurePage />} />
                <Route path="/coffees/:coffeeId" element={<CoffeeItemPage />} />
            </Routes>
        </BrowserRouter>
        <Footer />
        </>
    )
}

export default App;