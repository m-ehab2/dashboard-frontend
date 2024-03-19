import { useAppSelector, useAppDispatch } from "./app/hooks";
import { login, logout } from "./features/auth/authSlice";

function App() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(auth.value ? logout() : login());
  }
  return (
    <>
      <button onClick={handleClick}>{auth.value ? "Logout" : "Login"}</button>
      <h1>{String(auth.value)}</h1>
    </>
  );
}

export default App;
