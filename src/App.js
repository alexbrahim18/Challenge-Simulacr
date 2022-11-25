import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TestContainer from "./Components/TestContainer/TestContainer";
import Provider from "./Components/Context/Context";

function App() {
  return (
   <Provider>
   <Router>
    <Home/>
    <Routes>
      <Route path="/cliente/:nombre" element={<TestContainer/>}>
      </Route >
    </Routes>
   </Router>
   </Provider>
  );
}

export default App;
