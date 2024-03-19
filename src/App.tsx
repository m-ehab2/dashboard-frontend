import withAuth from "./components/requireAuth";

function App() {
  return <h1>Home</h1>;
}

export default withAuth(App);
