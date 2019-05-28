import React, {Component} from "react";
import HikeComments from "./HikeComments";


class HikeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(`HikeDetail state = %o`, this.state);
        console.log(`HikeDetail this.props = %o`, this.props);
    }

    // function NumberList(props) {
    //     const numbers = props.numbers;
    //     const listItems = numbers.map((number) =>
    //         <li>{number}</li>
    //     );
    //     return (
    //         <ul>{listItems}</ul>
    //     );
    // }

    // renderComments = function(props) {
    //
    //      const commentsList = props.hike.comments.map( comment => { <li>{comment}</li> });
    //
    //     return (
    //         <div>
    //         <h4>Comments:</h4>
    //         <ul>{commentsList}</ul>
    //         </div>
    //     );
    // }







    renderWeather() {
        // let renderIt;
        if(this.props.hike.conditionStatus) {
            // renderIt = <img src="./public/images/rainy.png"></img>
            return (
                <div>
                    <h4>Conditions:</h4>
                    <p>{this.props.hike.conditionStatus + " " + this.props.hike.conditionDetails}</p>
                    <i className="far fa-sun"></i>


                </div>
            )
            // return <p>props has a condition status</p>;
        }
        // renderIt += <div>difficulty: {this.props.difficulty}</div>

        return (
            <p>props has no condition status</p>
        )
    }

    render() {
        return (
            <div>
                <p>Hike Detail</p>
                <HikeComments comments={this.props.hike.comments} />
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