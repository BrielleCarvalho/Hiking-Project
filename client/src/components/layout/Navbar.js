import React from "react";
// import Register from "../auth/Register";
import NavLinks from "./NavLinks";

class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar-fixed">
            <nav>
              <div class="nav-wrapper darkslategray">
                <a href="localhost:3000" class="brand-logo right linen-text">Trail Guide</a>
                <div> <NavLinks /></div>
              </div>
            </nav>
          </div>
        );
    }
}

export default Navbar;