import React from "react";
import axios from "axios";

class Form extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { comment: "testComment" };
        // this.handleClick = this.handleClick.bind(this);
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
                    <input type="submit" value="Submit" />
                </form>

                <h2>Image</h2>

                <form action="/api/images/upload" method="POST" type="multipart/form-data">
                    <div className="custom-file mb-3">
                        <input type="file" name="file" id="file" className="custom-file-input"/>
                            <label htmlFor="file" className="custom-file-label">Choose File</label>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                </form>

            </div>
        );
    }
};

export default Form;