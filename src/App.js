import React from 'react';
import './Assets/CSS/Main/main.css';
import Topbar from './Components/Topbar/topbar';
import Homepage from './Components/Pages/homePage';
import RiskChecker from './Components/Pages/riskChecker';
import { BrowserRouter as Router, useRoutes} from "react-router-dom";

function App() {
  let routes = useRoutes([
    { path: "/home", element: <Homepage/>},
    { path: "/riskAssessor", element: <RiskChecker/>},
    { path: "/", element: <Homepage/>},
  ]);
  return routes;
}
const AppWrapper = () => {
  return (
    <div className="App">
      <Topbar/>
      <Router>
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;
