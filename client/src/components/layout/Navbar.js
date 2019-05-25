import React from "react";
// import Register from "../auth/Register";
import NavLinks from "./NavLinks";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper darkslategray" style={{backgroundColor: "#244441"}}>
                <a href="localhost:3000" class="brand-logo right linen-text"><i className="material-icons">filter_hdr</i>Trail Guide</a>
                <div style={{padding: "6px"}}> <NavLinks /></div>
              </div>
            </nav>
          </div>
        );
    }
}

export default Navbar;