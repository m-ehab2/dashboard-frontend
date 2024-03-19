import { Button } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleLogin() {
    dispatch(logout());
    navigate("/");
  }
  return (
    <Button variant="contained" onClick={handleLogin}>
      Logout
    </Button>
  );
}
