import React, { Component } from "react";
import axios from "axios";


class Home extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { hikes: [], test: [1,2,3] };
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

                <div className="row">

                    <div className="col sm12 m8">
                        <div className="row">

                            {this.state.hikes.map( (hike, i) => {
                                console.log(hike)
                                return  (

                                <div className="col s12 m5 l4">
                                <div className="card small">

                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src={hike.imgMedium} alt="Trail"/>
                                    </div>

                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{hike.name} <br></br>
                                        <i className="material-icons">more_vert</i></span>
                                        {/* <p><a target="_blank" href={hike.url}>Find out more!</a></p> */}
                                    </div>

                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{hike.name}<i
                                            className="material-icons right">close</i></span>
                                        <p>
                                            <ul>
                                                <li>Location: {hike.location}</li>
                                                <li >Difficulty: {hike.difficulty}</li>
                                                <li >Length: {hike.length}</li>
                                                <li >Ascent: {hike.ascent}</li>
                                                <li >Stars: {hike.stars}</li>
                                            </ul>
                                            <p><a target="_blank" rel="noopener noreferrer" href={hike.url}>Find out more!</a></p>
                                        </p>
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
        );
    }
}

export default Home;