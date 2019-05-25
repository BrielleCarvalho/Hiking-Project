import React, { Component } from "react";
import axios from "axios";
// import hikes from "../../../../routes/api/hikes";


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
                        style={{ position: "absolute", 
                        top: "120px", 
                        left: "28%", 
                        right: "28%", 
                        color: "white" 
                    }}>Trail Guide <br /></h2>
                    <h4 className="center-align title-two" 
                    style={{ position: "absolute", 
                        top: "200px", 
                        left: "28%", 
                        right: "28%", 
                        color: "white" 
                    }}>Guiding you to the best trails in Austin</h4>

                </div>
                <div style={{ backgroundColor: "#86897e", height: "10px", width:"100%" }}></div>
                <div className="row" style={{ backgroundColor: "#bc9336", padding: "5px" }}>


                    <div className="col sm12 m8">
                        <div className="row">


                            {this.state.hikes.map((hike, i) => {
                                // console.log(hike)
                                return (

                                    <div key={hike.id} className="col s12 m5 l4">
                                        <div className="card small">

                                            <div className="card-image waves-effect waves-block waves-light">
                                                <img className="activator" src={hike.imgMedium} alt=""/>
                                            </div>

                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-darken-4">{hike.name} <br></br>
                                                   <i className="material-icons">more_vert</i></span>

                                            </div>

                                            <div className="card-reveal">
                                                <span className="card-title grey-text text-darken-4">{hike.name}
                                                <i className="material-icons right">close</i></span>
                                                <div>
                                                    <ul>
                                                        <li>Location: {hike.location}</li>
                                                        <li >Difficulty: {hike.difficulty}</li>
                                                        <li >Length: {hike.length}</li>
                                                        <li >Ascent: {hike.ascent}</li>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat nulla nisi, vitae interdum lacus lacinia et. Nulla facilisis quam lacinia risus accumsan congue. Integer pellentesque tincidunt eleifend. Praesent eget purus faucibus, auctor erat et, tincidunt eros. Phasellus eu tincidunt justo. Mauris ac euismod eros, ac molestie leo. Aenean orci libero, pulvinar eu tellus eu, dignissim malesuada dui. Sed at dui nec dolor convallis volutpat vel id leo. Nunc efficitur, nisl quis ultrices facilisis, nisl ligula dictum purus, eget ornare nunc eros ac nibh. Ut bibendum, tortor vitae tincidunt vulputate, ex tortor mattis eros, eget dictum ligula ligula nec orci. Vivamus rutrum, eros et cursus blandit, augue ligula imperdiet justo, nec sagittis mauris eros sit amet diam. In suscipit sagittis nisl, viverra ullamcorper metus sagittis vitae. Nam tincidunt orci sed risus aliquam molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            Aliquam erat volutpat. Sed sem nulla, rhoncus at tempor non, aliquet at est. Etiam ornare quis quam tempor interdum. Integer feugiat finibus mi, sed finibus justo commodo sit amet. Donec ut nibh semper, facilisis lorem sit amet, faucibus tortor. Proin consectetur augue sed tortor elementum, nec hendrerit lacus tincidunt. Sed ac dignissim lectus, at feugiat ex. Curabitur dictum egestas dictum. Donec vehicula fermentum dui. Nulla finibus ut tortor sit amet mattis. Proin placerat nulla euismod, tempus metus eget, ullamcorper lorem.

                            Phasellus lacinia commodo erat, sit amet hendrerit lacus lobortis ac. Maecenas dapibus egestas mattis. Sed fermentum, arcu ut semper ullamcorper, ex mi semper justo, eu pretium augue ligula a sapien. Nullam vulputate pulvinar facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam egestas imperdiet feugiat. Aenean sit amet consectetur ipsum. Duis ullamcorper purus quis lorem congue aliquam.

                            Curabitur porttitor nunc vel nisi suscipit, eget consequat eros malesuada. Vestibulum sagittis enim tellus, vitae semper metus ullamcorper eget. Maecenas accumsan dui a lacus condimentum, mollis congue lorem varius. Nulla nec consequat nibh. Etiam consequat, libero nec scelerisque pharetra, turpis nunc efficitur ipsum, rutrum imperdiet lacus lorem sodales est. Sed nec nisi ultricies, sagittis mauris sed, porta dui. Fusce eu pellentesque est. Vivamus quis maximus massa. Aenean eget dapibus mauris. Praesent convallis porttitor tempor. Aliquam vitae turpis mattis, dapibus orci at, hendrerit diam.

                            Morbi sagittis massa et orci porta luctus. Vestibulum ac efficitur lorem. Duis vulputate dignissim maximus. Maecenas dignissim eros felis, non semper metus pharetra a. Vivamus fermentum velit sapien, at volutpat libero commodo quis. Maecenas egestas mi ac neque suscipit elementum. Pellentesque magna nunc, porttitor et ultrices id, tempor ut velit. Proin congue nisi ac blandit fringilla.</p>
                        </div>
                    </div>

                </div>
            </div>
            // </div>


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