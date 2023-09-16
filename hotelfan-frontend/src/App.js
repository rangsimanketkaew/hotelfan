import "styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "pages/Navigation";
import Chatbot from "components/Chatbot";
import Explore from "components/Explore";
// import Hotel from "components/Hotel";
import { RecoilRoot } from "recoil";
import Hotels from "pages/Hotels";
import Match from "components/Match";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Navigation />
          <div className="components">
            <Routes>
              {["/hotels", "/hotels/:detailId"].map((pathString) => (
                <Route
                  key={pathString}
                  path={pathString}
                  element={<Hotels />}
                />
              ))}

              <Route path="/match" element={<Match />} />
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
