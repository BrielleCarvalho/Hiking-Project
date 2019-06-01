import React from "react";
import axios from "axios";

class HikeCommentForm extends React.Component {



    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            comment: "",
            // hikeId: this.props.hikeId
        };
        console.log(`Hike Form constructor this.state = %o`,this.state);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleCommentChange(event) {
        console.log(`in handleCommentChange with event = %o`,event)
        this.setState({comment: event.target.value})
    }


    onSubmit = async e => {
        console.log("sanity test");
        e.preventDefault();
        const commentData = {
            hikeId: this.props.hikeId,
            comment: this.state.comment
        };
        // {
        //     "hikeId": "5ce9a06bafd48c70f67a7464",
        //     "comment": "My quads are burning after this hike!"
        // }

        try {
            const response = await axios.post('/api/hikes/comment', commentData);
            console.log(':point_right: Returned data:', response);

            // You should probably use a callback to the parent function to update the comments, or maybe this functionality should be lifted up the HikeDetail level ( the api s

        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    };


    render() {
        return (
            <div>
                {/*<form onSubmit={this.onSubmit}>*/}
                {/*    Comment:*/}
                {/*    <br></br>*/}
                {/*    <input type="text" name="comment" />*/}
                {/*    <input type="submit" value="Submit" />*/}
                {/*</form>*/}
                {/*<div className="row">*/}
                {/*    <form className="col s12" onSubmit={this.onSubmit}>*/}
                    <form className="" onSubmit={this.onSubmit}>
                        <div className="">
                        {/*<div className="row">*/}
                            <p>Submit Comment for Hike ID: {this.props.hikeId}</p>
                            <div style={{"backgroundColor": "white"}} className="input-field col s12">

                                <input placeholder="Comment..." id="comment" type="text" className="validate" onChange={this.handleCommentChange}/>
                                <label htmlFor="first_name">Comment</label>
                            </div>
                            {/*<div className="input-field col s3">*/}
                            {/*    <input id="last_name" type="text" className="validate" />*/}
                            {/*        <label htmlFor="last_name">Last Name</label>*/}
                            {/*</div>*/}

                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                {/*</div>*/}

            </div>
        );
    }
};

export default HikeCommentForm;