import { NavLink } from "react-router-dom"

export default function Header() {
    return (
      <header>
        <NavLink to="/" className="logo">My Blog</NavLink>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>   
    )
}