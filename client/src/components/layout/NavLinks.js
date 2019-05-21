import React, { Component } from "react";

class NavLinks extends Component {
    render() {
        return (
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li>
                    <a
                        href="register"
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            backgroundColor: "tan"
                        }}
                        className="btn-flat btn-large white-text hoverable waves-effect"
                    >
                        Sign Up
                        </a>
                </li>
                <li>
                    <a
                        href="login"
                        style={{
                            marginLeft: "2rem",
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            backgroundColor: "sienna"
                        }}
                        className="btn-flat btn-large white-text hoverable waves-effect"
                    >
                        Log In
                        </a>
                </li>

            </ul>


        );
    }
}

export default NavLinks;