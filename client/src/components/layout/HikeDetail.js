import React, {Component} from "react";
import HikeComments from "./HikeComments.js";
import HikeCommentForm from "./HikeCommentForm.js";


class HikeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { hike: this.props.hike };
    }

    componentDidMount() {
        console.log(`HikeDetail component did mount state = %o`, this.state);
        console.log(`HikeDetail component did mount this.props = %o`, this.props);
    }

    onNewComment = function(hike) {
        console.log(`in HikeDetail onNewComment hike = %o`, hike);
        this.setState({hike: hike});
    }.bind(this);


    render() {
        console.log(`rendering HikeDetail`);
        return (
            <div>
                <h3>{this.props.hike.name}</h3>
                {/*<p><b>Summary:</b> {this.props.hike.summary}</p>*/}
                {/*<p><b>Length:</b> {this.props.hike.length}</p>*/}

                <p><b>Location:</b> {this.props.hike.location}</p>
                <p><b>Difficulty:</b> {this.props.hike.difficulty}</p>
                <p><b>Length:</b> {this.props.hike.length} miles</p>
                <p><b>Ascent:</b> {this.props.hike.ascent} feet</p>
                <p><b>Stars:</b> {this.props.hike.stars}</p>
                <HikeComments comments={this.props.hike.comments} />
                <HikeCommentForm hikeId={this.props.hike._id}/>
            </div>

        );
    }
}

export default HikeDetail;

/* EXAMPLE OF TRAIL DATA OBJECT FOR REFERENCE */
// ascent: 1281
// conditionDate: "2019-05-12 00:55:02"
// conditionDetails: "Some Mud"
// conditionStatus: "All Clear"
// descent: -1280
// difficulty: "blueBlack"
// high: 6780
// id: 7000000
// imgMedium: "https://cdn-files.apstatic.com/hike/7039883_medium_1555092747.jpg"
// imgSmall: "https://cdn-files.apstatic.com/hike/7039883_small_1555092747.jpg"
// imgSmallMed: "https://cdn-files.apstatic.com/hike/7039883_smallMed_1555092747.jpg"
// imgSqSmall: "https://cdn-files.apstatic.com/hike/7039883_sqsmall_1555092747.jpg"
// latitude: 40.0202
// length: 3.2
// location: "Boulder, Colorado"
// longitude: -105.2977
// low: 5521
// name: "Mount Sanitas Loop"
// starVotes: 91
// stars: 4.1
// summary: "Very popular and scenic loop right from the edge of town."
// type: "Featured Hike"
// url: "https://www.hikingproject.com/trail/7000000/mount-sanitas-loop"
// __proto__: Object