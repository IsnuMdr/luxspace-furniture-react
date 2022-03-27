import "assets/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import DetailsProduct from "pages/DetailsProduct";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";
import Provider from "helpers/hooks/useGlobalContext";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="categories/:idc/products/:idp"
            element={<DetailsProduct />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="congratulation" element={<Congratulation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
