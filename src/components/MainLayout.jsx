import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { App } from "@capacitor/app";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const backButtonListener = App.addListener("backButton", () => {
      if (location.pathname === "/" || location.pathname === "/mainStudentPage") {
        console.log("Preventing app exit on main pages.");
      } else {
        navigate(-1); 
      }
    });

    return () => {
      backButtonListener.remove();
    };
  }, [navigate, location]);

  return <div>{children}</div>;
};

export default MainLayout;
