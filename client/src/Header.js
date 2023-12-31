import { NavLink } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  function handleLogoutClick(event) {
    // Prevent NavLink from navigating
    event.preventDefault();
    logout();
  }

  const username = userInfo?.username;

  return (
    <header>
      <NavLink to="/" className="logo">
        <img src="assets/brand-4.png" alt="" />
      </NavLink>
      <nav>
        {username ? (
          <>
            <NavLink to="/create">Create New Post</NavLink>
            <NavLink to="#" onClick={handleLogoutClick}>
              Logout ({username})
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
