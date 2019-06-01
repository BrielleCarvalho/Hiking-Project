import React, { Component } from "react";
import axios from "axios";
import Form from './Form';


class Landing extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { hikes: [], test: [1, 2, 3] };
        console.log(`state = %o`, this.state);
        // this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {


        try {
            let response = await axios.get('/api/hikes/all');
            this.setState({ hikes: response.data.hikes });
            console.log(`API RESULT state.hikes = %o`, response.data.hikes);


            console.log('API :point_right: Returned data:', response.data.hikes);
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }


    }


    render() {
        return (

            <div>

                <div className="valign-wrapper pageTopper row center-align"
                    style={{
                        height: "400px",
                        backgroundImage: 'url("/images/Hamilton-Pool-front.jpg")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        position: "relative",
                        margin: "0px",
                        padding: "0px"
                    }}>

                    <h2 className="center-align title-one" 
                        style={{
                            position: "absolute", 
                            top: "120px", 
                            left: "28%", 
                            right: "28%", 
                            color: "#f7f9fa" 
                        }}>Trail Guide <br /></h2>
                    <h4 className="center-align title-two" 
                        style={{ 
                            position: "absolute", 
                            top: "200px", 
                            left: "28%", 
                            right: "28%", 
                            color: "#f7f9fa" 
                        }}>Guiding you to the best trails in Austin</h4>

                </div>
                   
                    {/* <div style={{ backgroundColor: "#f7f9fa", height: "100px", width:"100%" }}></div> */}
                
                <div className="row" style={{ backgroundColor: "#bc9336", padding: "5px" }}>


                    <div className="col sm12 m8">
                        <div className="row">
                    <div style={{height: "50px", width:"100%" }}></div>



                            {this.state.hikes.map((hike, i) => {
                                // console.log(hike)
                                return (

                                    <div key={hike.id} className="col s12 m5 l4">
                                        <div className="card small">

                                            <div className="card-image waves-effect waves-block waves-light">
                                                <img className="activator" src={hike.imgMedium} alt=""/>
                                            </div>

                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-darken-4"> {hike.name}<br></br>
                                                <i className="material-icons">more_vert</i></span>
                                                   

                                            </div>

                                            <div className="card-reveal">
                                                <span className="card-title grey-text text-darken-4">{hike.name}
                                                <i className="material-icons right">close</i></span>
                                                <div>
                                                    <ul>
                                                        <li>Location: {hike.location}</li>
                                                        <li >Difficulty: {hike.difficulty}</li>
                                                        <li >Length: {hike.length} miles</li>
                                                        <li >Ascent: {hike.ascent} feet</li>
                                                        <li >Stars: {hike.stars}</li>
                                                    </ul>
                                                    <br></br>
                                                    <a target="_blank" rel="noopener noreferrer" href={hike.url}>Find out more!</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                );
                            }
                            )}

                        </div>


                    </div>



                    <div className="col-3 sideBar left-align">
                        <div>
                    <div style={{height: "50px", width:"100%" }}></div>

                            <Form />
                        </div>
                    </div>

                </div>
            </div>



        );
    }
}

export default Landing;


// ascent: 2541
// conditionDate: "2019-04-25 09:12:13"
// conditionDetails: "Mostly Dry, Some Mud - Only a couple spots with snow, but easily avoidable."
// conditionStatus: "All Clear"
// descent: -2540
// difficulty: "blueBlack"
// high: 8342
// id: 7000130
// imgMedium: "https://cdn-files.apstatic.com/hike/7005382_medium_1554312030.jpg"
// imgSmall: "https://cdn-files.apstatic.com/hike/7005382_small_1554312030.jpg"
// imgSmallMed: "https://cdn-files.apstatic.com/hike/7005382_smallMed_1554312030.jpg"
// imgSqSmall: "https://cdn-files.apstatic.com/hike/7005382_sqsmall_1554312030.jpg"
// latitude: 39.9787
// length: 5.7
// location: "Boulder, Colorado"
// longitude: -105.2755
// low: 6103
// name: "Bear Peak Out and Back"
// starVotes: 86
// stars: 4.6
// summary: "A must-do hike for Boulder locals and visitors alike!"
// type: "Featured Hike"
// url: "https://www.hikingproject.com/trail/7000130/bear-peak-out-and-back"