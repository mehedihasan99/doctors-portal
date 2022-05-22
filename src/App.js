import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Shared/Nav";
import MyLogin from "./Pages/Login/MyLogin";
import MySignUp from "./Pages/Login/MySignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyReviews from "./Pages/DashBoard/MyReviews";
import MyAppointment from "./Pages/DashBoard/MyAppointment";
import MyHistory from "./Pages/DashBoard/MyHistory";
import Users from "./Pages/DashBoard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/DashBoard/AddDoctor";
import ManageDoctors from "./Pages/DashBoard/ManageDoctors";
function App() {
  return (
    <div className="max-w-7xl p-12 mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="reviews" element={<MyReviews />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                {" "}
                <Users />{" "}
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="AddDoctor"
            element={
              <RequireAdmin>
                {" "}
                <AddDoctor />{" "}
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                {" "}
                <ManageDoctors />{" "}
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<MyLogin></MyLogin>}></Route>
        <Route path="/signup" element={<MySignUp></MySignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
