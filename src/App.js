import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "./data/auth";
import Loader from "./components/Loader";

function App() {
  const token = Cookies.get("token");
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAuth(); // eslint-disable-next-line
  }, []);

  async function fetchAuth() {
    setLoading(true);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const user = await res.json();
      dispatch(login(user));
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
