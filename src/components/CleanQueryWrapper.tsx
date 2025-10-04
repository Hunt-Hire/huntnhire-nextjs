import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function CleanQueryWrapper({ children }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Remove query parameters if user is on homepage
    if (location.pathname === "/" && location.search) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  return <>{children}</>;
}
