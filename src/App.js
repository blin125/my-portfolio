import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Homepage";

import './styles/NavbarStyle.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/my-portfolio" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
