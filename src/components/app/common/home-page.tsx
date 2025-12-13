import { useEffect } from "react";
import getMemoItem from "../../../libs/memorization/get-item";
import { Outlet, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const selectedGame = getMemoItem("game-choice");
    navigate(`/game/${selectedGame || ""}`);
  }, [navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};
