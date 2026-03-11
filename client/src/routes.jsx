// src/routes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Cameras from "./pages/Cameras";
import KnownPeople from "./pages/KnownPeople";
import Events from "./pages/Events";
// import Settings from "./pages/Settings";
// import Login from "./pages/Login";
// import AddPersonForm from "./components/people/AddPersonForm";
import CameraForm from "./components/cameras/CameraForm";
import AddCamera from "./components/cameras/AddCamera";
// import Dashboard1 from "./pages/Dashboard1";
// import EventFeed from "./components/dashboard/EventFeed";
// import LiveFeed from "./components/LiveFeed";
import LiveDashboard from "./components/LiveDashboard";
import HomePage from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/team" element={<Team/>} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard1" element={<Dashboard1 />} /> */}
      <Route path="/cameras" element={<Cameras />} />
      <Route path="/add-camera" element={<AddCamera />} />
      <Route path="/people" element={<KnownPeople />} />
      {/* <Route path="/add-person" element={<AddPersonForm />} /> */}
      <Route path="/events" element={<Events />} />
      {/* <Route path="/event-feed" element={<EventFeed />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/live" element={<LiveFeed />} /> */}
      <Route path="/dashboard" element={<LiveDashboard />} />
    </Routes>
  );
}