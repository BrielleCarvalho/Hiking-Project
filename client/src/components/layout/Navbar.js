import React from "react";
// import Register from "../auth/Register";
import NavLinks from "./NavLinks";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper darkslategray">
                <a href="localhost:3000" class="brand-logo right linen-text">Trail Guide</a>
                <div> <NavLinks /></div>
              </div>
            </nav>
          </div>
        );
    }
}

export default Navbar;