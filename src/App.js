import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Rooms } from "./pages/Rooms";
import { Home } from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:room" component={RoomDetails} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
