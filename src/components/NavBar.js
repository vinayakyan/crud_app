import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand text-light" to="/">userhub.com</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active text-warning" aria-current="page" to="/">HOME</NavLink>
                    </li>   
                    <li className="nav-item">
                        <NavLink className="nav-link active text-warning" aria-current="page" to="/add">ADD</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active text-warning" aria-current="page" to="/show">SHOW</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default NavBar