import { NavLink } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import { UserContext } from "./UserContext"

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
      fetch("http://localhost:4000/profile", {
        credentials: "include",
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
    }, [])

    function logout() {
      fetch("http://localhost:4000/logout", {
        credentials: "include",
        method: "POST",
      })
      setUserInfo(null)
    }

    const username = userInfo?.username

    return (
      <header>
        <NavLink to="/" className="logo">My Blog</NavLink>
        <nav>
          {username && (
            <>
            <NavLink to="/create">Create New Post</NavLink>
            <a onClick={logout}>Logout ({username})</a>
            </>
          )}
          {!username && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </header>   
    )
}