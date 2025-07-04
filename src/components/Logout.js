import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // navigate("/login");
        window.location.href = "https://zerodha-clientside.onrender.com";
      }
      const { data } = await axios.post(
        "https://zerodha-dashboard-uu4u.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
            autoClose: 5000, // close after 5 seconds
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        : (removeCookie("token"),
        //  navigate("/login")
        window.location.href = "https://zerodha-clientside.onrender.com"
        );
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    window.location.href = "https://zerodha-clientside.onrender.com";
    // navigate('/signup')
  };
  return (
    <>
      <button onClick={Logout} style={{}}>
        LOGOUT
      </button>
      <ToastContainer />
    </>
  );
};

export default Logout;
