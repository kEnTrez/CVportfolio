import React from "react";
import Logo from "../logo_transparent_background.png";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">

  <a className="navbar-brand" href="#"><img src={Logo} className="logo" alt="logo..."/></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>

  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Expirience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>

    </ul>

  </div>
      </div>
</nav>
  )
}

export default navbar