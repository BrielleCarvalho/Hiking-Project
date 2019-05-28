import React from "react";

    function HikeComments(props) {

        // const testComments = ["TestComment1", "TestComment2"];

        const commentListItems = props.comments.map((comment) =>
        // const commentListItems = testComments.map((comment) =>
            <li>{comment.text}</li>
        );
        return (
            <ul>{commentListItems}</ul>
        );
    }

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

export default HikeComments;
