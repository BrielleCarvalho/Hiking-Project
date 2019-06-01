import React, {Component} from "react";


class HikeCard extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {};
        console.log(`state = %o`, this.state);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleMoreInfoClick = function() {
        console.log(`handleMoreInfoClick running`);
        return <div>This happened</div>;
    }

    render() {
        return (

            <div key={this.props.id} className="col s12 m5 l4">
                <div className="card small">

                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.hike.imgMedium} alt=""/>
                    </div>

                    <div className="card-content">
                                                <span className="card-title activator grey-text text-darken-4"> {this.props.hike.name}<br></br>
                                                <i className="material-icons">more_vert</i></span>


                    </div>

                    <div className="card-reveal">
                                                <span className="card-title grey-text text-darken-4">{this.props.hike.name}
                                                    <i className="material-icons right">close</i></span>
                        <div>
                            <ul>
                                <li>Location: {this.props.hike.location}</li>
                                <li >Difficulty: {this.props.hike.difficulty}</li>
                                <li >Length: {this.props.hike.length} miles</li>
                                <li >Ascent: {this.props.hike.ascent} feet</li>
                                <li >Stars: {this.props.hike.stars}</li>
                            </ul>
                            <br></br>
                            <a target="_blank" rel="noopener noreferrer" href={this.props.hike.url}>Find out more!</a>
                            <button onClick={this.props.onShow}>Details</button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default HikeCard;
