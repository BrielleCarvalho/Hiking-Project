import React from "react";


    function HikeComments(props) {

        // const testComments = ["TestComment1", "TestComment2"];



        const commentListItems = props.comments.map((comment, i) =>
        // const commentListItems = testComments.map((comment) =>
            <li key={i}>{comment.text}</li>
        );

        let header = null;
        if(props.comments.length > 0)
        {
            header = <h5>{props.comments.length} Comments:</h5>
        } else {
            header = <h5>Be the first to comment on this hike!</h5>
        }

        return (
            <div>
                {header}
                <ul>{commentListItems}</ul>
            </div>
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
