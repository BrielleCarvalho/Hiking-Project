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
                <h3>LEAVE A COMMENT:</h3>
                <form onSubmit={this.onSubmit}>
                    <br></br>
                    {/* <input 
                    style={{
                        borderColor: "black",
                        borderWidth: "5px",
                        width: "300px",
                        height: "500px",
                        backgroundColor: "white"
                    }}
                    type="text" 
                    name="comment" /> */}
                    <textarea 
                    style={{
                        borderColor: "black",
                        borderWidth: "5px",
                        width: "300px",
                        height: "200px",
                        backgroundColor: "white"
                    }}
                    id="textarea2" 
                    class="materialize-textarea" 
                    data-length="500"></textarea>

                    <br></br>
                    <input 
                    style={{
                        borderRadius: "5px",
                        backgroundColor: "#244441"
                    }}
                    type="submit" 
                    value="SUBMIT" />
                </form>

                <h2>Image</h2>

                <form action="/api/images/upload" method="POST" encType="multipart/form-data">
                    <div className="custom-file mb-3">
                        <input type="file" name="file" id="file" className="custom-file-input"/>
                        <label htmlFor="file" className="custom-file-label"></label>
                    </div>
                    <input 
                    style={{
                        borderRadius: "5px",
                        backgroundColor: "#244441",
                        Color: "white",
                        border: "none"
                    }}
                    type="submit" value="Submit" className="btn btn-primary btn-block"/>
                </form>
            </div>
        );
    }
};

export default Form;