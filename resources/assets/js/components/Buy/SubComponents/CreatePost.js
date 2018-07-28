import React, {Component} from 'react';
import axios from "axios/index";

import BasicInfo from "./CreatePostSteps/BasicInfo";
import VehicleInfo from "./CreatePostSteps/VehicleInfo";
import Features from "./CreatePostSteps/Features";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: {
                title: '',
                description: '',
                budget: '',
                mileage: '',
                location: '',
                timeframe: '',
            }
        };
        this.createPost = this.createPost.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleInput(key, e) {
        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newPost);
        state[key] = e.target.value;
        this.setState({newPost: state});
    }

    createPost(e) {
        e.preventDefault();
        axios.post('/api/posts', this.state.newPost)
            .then( (res) => {
            this.props.history.push('/home/buy');
        });
    }

    cancel(){
        this.props.history.push('/home/buy');
    }

    render() {

        return (
            <div id="CreatePost">
                <div className="container" style={{marginTop: 100}}>
                    Create Post
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={(e) => this.handleInput('title', e)} type="text" className="form-control"
                                   id="title"
                                   aria-describedby="emailHelp" placeholder="Enter Title"
                                   value={this.state.newPost.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input onChange={(e) => this.handleInput('description', e)} type="text" className="form-control"
                                   id="description"
                                   placeholder="Description"
                                   value={this.state.newPost.description}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mileage">Mileage</label>
                            <input onChange={(e) => this.handleInput('mileage', e)} type="text" className="form-control"
                                   id="mileage"
                                   placeholder="Mileage"
                                   value={this.state.newPost.mileage}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">Budget</label>
                            <input onChange={(e) => this.handleInput('budget', e)} type="text" className="form-control"
                                   id="budget"
                                   placeholder="Budget"
                                   value={this.state.newPost.budget}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input onChange={(e) => this.handleInput('location', e)} type="text" className="form-control"
                                   id="location"
                                   placeholder="Location"
                                   value={this.state.newPost.location}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="timeframe">Timeframe</label>
                            <input onChange={(e) => this.handleInput('timeframe', e)} type="text" className="form-control"
                                   id="timeframe"
                                   placeholder="Timeframe"
                                   value={this.state.newPost.timeframe}/>
                        </div>
                        <button onClick={this.createPost} type="submit" className="button blue square">Submit</button>
                        <a className="button transparent-blue" onClick={this.cancel}>Cancel</a>
                    </form>
                </div>
            </div>
        );
    }
}

