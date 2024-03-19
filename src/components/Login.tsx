import { Button } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleLogin() {
    dispatch(login());
    navigate("/dashboard");
  }
  return (
    <Button variant="contained" onClick={handleLogin}>
      Login
    </Button>
  );
}
