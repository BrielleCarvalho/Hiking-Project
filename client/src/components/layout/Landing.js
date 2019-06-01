import React, { Component } from "react";
import axios from "axios";
import HikeCard from "./HikeCard.js";
import HikeDetail from "./HikeDetail.js"


class Landing extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        // this.state = { hikes: [], test: [1, 2, 3] };
        this.state = { hikes: [], showDetails: false, selectedHikeIndex: 0 };
        console.log(`state = %o`, this.state);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleShowDetails(hikeIndex) {
        // The current problem with this architecture is that when they click a hike, a new request needs to be made to get the latest info. Or every time a Comment is posted on a hike, the hikes in state need to be updated.
        this.getLatestHikes();
        console.log(`handleShowDetails running with index %o`, hikeIndex);
        this.setState({showDetails: true, selectedHikeIndex: hikeIndex});
    }

    renderDetails() {
        console.log(`In renderDetails this.state = %o`, this.state);

        if(this.state.showDetails) {

            return (
                <div>
                    <HikeDetail hike={this.state.hikes[this.state.selectedHikeIndex]} />
                </div>
            )
        } else {
            return <div></div>
        }
    }

    async getLatestHikes() {
        try {
            // let response = await axios.get('/api/hikes/all'); /* This only uses hardcoded test data */
            let response = await axios.get('/api/hikes'); /* This uses real data from MongoDB */
            this.setState({ hikes: response.data });
            console.log('getLatestHikes API :point_right: Returned data:', response.data);
        } catch (e) {
            console.log(`getLatestHikes 😱 Axios request failed: ${e}`);
        }
    }

    async componentDidMount() {

        this.getLatestHikes();

        //
        // try {
        //     let response = await axios.get('/api/hikes'); /* This uses real data from MongoDB */
        //     this.setState({ hikes: response.data });
        //     console.log(`API RESULT state.hikes = %o`, response.data);
        //
        //
        //     console.log('API :point_right: Returned data:', response.data);
        // } catch (e) {
        //     console.log(`😱 Axios request failed: ${e}`);
        // }


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
                   
                    <div style={{ backgroundColor: "#f7f9fa", height: "100px", width:"100%" }}></div>
                
                <div className="row" style={{ backgroundColor: "#bc9336", padding: "5px" }}>


                    <div className="col sm12 m8">
                        <div className="row">


                            {
                                this.state.hikes.map((eachHike, i) => {
                                    return (
                                        <HikeCard hike={eachHike} onShow={() => this.handleShowDetails(i) } key={i} />
                                    );
                                })
                            }

                        </div>


                    </div>



                    {/*<div className="col-3 sideBar left-align">*/}
                    <div className="col m4 s12 sideBar left-align">
                        <div>
                            {
                                this.renderDetails()
                            }
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