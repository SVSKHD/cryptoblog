
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"

//pages
import LandingPage from './pages/LandingPage';
import Exchanges from "./pages/Exchanges"
import Forex from "./pages/Forex"


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/exchanges" element={<Exchanges/>}/>
        <Route exact path="/forex" element={<Forex/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
