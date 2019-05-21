import React, {Component} from "react";

class Hikes extends Component {
    render() {
        return (
            <div style={{height: "75vh"}} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        {/*<h4>*/}
                        {/*    <b>Build</b> a login/auth app with the{" "}*/}
                        {/*    <span style={{fontFamily: "monospace"}}>MERN</span> stack from*/}
                        {/*    scratch*/}
                        {/*</h4>*/}
                        {/*<p className="flow-text grey-text text-darken-1">*/}
                        {/*    Create a (minimal) full-stack app with user authentication via*/}
                        {/*    passport and JWTs*/}
                        {/*</p>*/}
                        {/*<br/>*/}

                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="hikeImages/hike1.jpeg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i
                                    className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i
                                    className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked
                                    on.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="hikeImages/hike1.jpeg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i
                                    className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i
                                    className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked
                                    on.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="hikeImages/hike1.jpeg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i
                                    className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i
                                    className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked
                                    on.</p>
                            </div>
                        </div>

                        {/*<a*/}
                        {/*    href="register"*/}
                        {/*    style={{*/}
                        {/*        width: "150px",*/}
                        {/*        borderRadius: "3px",*/}
                        {/*        letterSpacing: "1.5px"*/}
                        {/*    }}*/}
                        {/*    className="btn btn-large waves-effect waves-light hoverable blue accent-3"*/}
                        {/*>*/}
                        {/*    Register*/}
                        {/*</a>*/}
                        {/*<a*/}
                        {/*    href="login"*/}
                        {/*    style={{*/}
                        {/*        marginLeft: "2rem",*/}
                        {/*        width: "150px",*/}
                        {/*        borderRadius: "3px",*/}
                        {/*        letterSpacing: "1.5px"*/}
                        {/*    }}*/}
                        {/*    className="btn btn-large waves-effect white hoverable black-text"*/}
                        {/*>*/}
                        {/*    Log In*/}
                        {/*</a>*/}


                    </div>
                </div>
            </div>
        );
    }
}

export default Hikes;