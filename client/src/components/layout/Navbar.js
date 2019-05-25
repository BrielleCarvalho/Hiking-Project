import React from "react";
// import Register from "../auth/Register";
import NavLinks from "./NavLinks";

class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar-fixed">
            <nav>
              <div class="nav-wrapper darkslategray" style={{backgroundColor: "#244441"}}>
                <a href="localhost:3000" class="brand-logo right linen-text"><i class="material-icons">filter_hdr</i>Trail Guide</a>
                <div style={{padding: "6px"}}> <NavLinks /></div>
              </div>
            </nav>
          </div>
        );
    }
}

export default Navbar;