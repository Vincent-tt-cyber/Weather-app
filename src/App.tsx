import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import Header from "./Components/Header/Header";
import Popup from "./Components/Popup/Popup";

const App = () => {
  return (
    <>
      <div className="container">
        {/* <Popup /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
