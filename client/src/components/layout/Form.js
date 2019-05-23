import React from "react";
import axios from "axios";

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            comment:"comment"
        };
    }

    onSubmit = async e => {
        console.log("sanity test");
        e.preventDefault();
        const commentData = {
            comment: this.state.comment
        };

        try {
            const response = await axios.post('/api/comment', commentData);
            console.log(':point_right: Returned data:', response);
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }


    };


    render() {
        return (
            <div>
                Test Form
                <form onSubmit={this.onSubmit}>
                    Comment:
                    <br></br>
                    <input type="text" name="comment" />
                </form>
                <input type="submit" value="Submit" />
            </div>
        );
    }
};

export default Form;