import { NavLink } from "react-router-dom";
import Home from "../screen/home/Home";
import Search from "../screen/search/Search";
import Contact from "../screen/contact/Contact";
import Review from "../screen/review/Review";
import Service from "../screen/service/Service";
import StaffDetail from "../screen/staffdetail/StaffDetail";
import StaffDetailCreate from "../screen/staffdetailcreate/StaffDetailCreate";
import Login from "../screen/login/Login";
import Navbar from "../components/Navbar.jsx";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="contact" element={<Contact />} />
        <Route path="review" element={<Review />} />
        <Route path="service" element={<Service />} />
        <Route path="staffdetail" element={<StaffDetail />} />
        <Route path="staffdetailcreate" element={<StaffDetailCreate />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
