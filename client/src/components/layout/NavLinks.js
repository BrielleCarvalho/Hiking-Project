import React, { Component } from "react";


class NavLinks extends Component {

    render() {

        console.log(window.M);

        return (


            <ul id="nav-mobile" className="left">
                <li>
                    <a

                        href="register"
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            backgroundColor: "tan"
                        }}
                        className="btn-flat btn-large white-text hoverable waves-effect modal-trigger signInUp"
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
                        className="btn-flat btn-large white-text hoverable waves-effect signInUp"
                    >
                        Log In
                        </a>
                </li>
                <li className="dropdown">
                        <a href="login"><i className="material-icons">menu</i></a>
                </li>

            </ul>


        );
    }
}

export default NavLinks;