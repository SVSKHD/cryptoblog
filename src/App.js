
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"

//pages
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
