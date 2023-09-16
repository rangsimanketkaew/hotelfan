import "styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "pages/Navigation";
import Chatbot from "components/Chatbot";
import Explore from "components/Explore";
import Hotel from "components/Hotel";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Navigation />
          <div className="components">
            <Routes>
              {["/hotels", "/hotels/:detailId"].map((pathString) => (
                <Route key={pathString} path={pathString} element={<Hotel />} />
              ))}

              <Route path="*" element={<Explore />} />
            </Routes>
          </div>
        </Router>
        <Chatbot />
      </RecoilRoot>
    </>
  );
}

export default App;
