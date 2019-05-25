import React, {Component} from "react";
import axios from "axios";

class Hikes extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { hikes: [], test: [1,2,3] };
        console.log(`state = %o`, this.state);
        // this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        // let mode;
        // if (this.props.age > 70) {
        //     mode = 'old';
        // } else if (this.props.age < 18) {
        //     mode = 'young';
        // } else {
        //     mode = 'middle';
        // }
        // onSubmit = async e => {
        //     e.preventDefault();
        //     const userData = {
        //         email: this.state.email,
        //         password: this.state.password
        //     };

            try {
                let response = await axios.get('/api/hikes/all');
                this.setState({ hikes: response.data.hikes });
                console.log(`API RESULT state.hikes = %o`, response.data.hikes);



                // const hikes =  response.hikes;
                // response.hikes.map(hike => {
                //     return (
                //         <div>
                //             <h2>Hike</h2>
                //         </div>
                //     )
                // })


                console.log('API :point_right: Returned data:', response.data.hikes);
            } catch (e) {
                console.log(`😱 Axios request failed: ${e}`);
            }


        // };
        //

    }


    render() {
        return (
            <div style={{height: "75vh"}} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">{
                            this.state.hikes.map( (hike, i) => {
                                return  (

                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src="hikeImages/hike1.jpeg" alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Card Title<i
                                            className="material-icons right">more_vert</i></span>
                                        <p><a href="google.com">This is a link</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Card Title<i
                                            className="material-icons right">close</i></span>
                                        <p>Here is some more information about this product that is only revealed once clicked
                                            on.</p>
                                    </div>
                                </div>

                            );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Hikes;