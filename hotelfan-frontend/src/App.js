import 'styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from 'pages/Navigation';
import Chatbot from 'components/Chatbot';
import Explore from 'components/Explore';

function App() {
  return (
    <>
        <Router>
          <>
            <Routes>
              {["/hotels", "/hotels/:detailId"].map((pathString) => (
                <Route
                  key={pathString}
                  path={pathString}
                  element={<Chatbot />}
                />
              ))}

              <Route path="/explore" exact element={<Explore />} />
              <Route path="*" element={<Chatbot />} />
            </Routes>
            <Navigation />
          </>
        </Router>
    </>
  );
}

export default App;