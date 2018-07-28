import React, {Component} from 'react';
import axios from "axios/index";

import BasicInfo from "./CreatePostSteps/BasicInfo";
import VehicleInfo from "./CreatePostSteps/VehicleInfo";
import Features from "./CreatePostSteps/Features";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            newPost: {
                title: '',
                description: '',
                budget: '',
                mileage: '',
                location: '',
                timeframe: '',
                // VEHICLE INFO
                vehicle_type: '',
                vehicle_make: '',
                vehicle_model: '',
                vehicle_year: '',
                vehicle_title_type: '',
            }
        };
        this.createPost = this.createPost.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.cancel = this.cancel.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    nextStep(){
        this.setState({
            step: this.state.step + 1,
        })
    }

    previousStep(){
        this.setState({
            step: this.state.step - 1,
        })
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

    showStep(){
        switch (this.state.step){
            case 1:
                return  <BasicInfo
                            newPost={this.state.newPost}
                            onChange={this.handleInput}
                            nextStep={this.nextStep}
                        />
            case 2:
                return <VehicleInfo
                            newPost={this.state.newPost}
                            onChange={this.handleInput}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                        />
            case 3:
                return <Features
                            newPost={this.state.newPost}
                            onChange={this.handleInput}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                        />
        }
    };

    render() {

        return (
            <div id="CreatePost">

                <div className="container" style={{marginTop: 100}}>
                    Create Post
                    <form>

                        {this.showStep()}

                        <button onClick={this.createPost} type="submit" className="button blue square">Submit</button>
                        <a className="button transparent-blue" onClick={this.cancel}>Cancel</a>
                    </form>
                </div>
            </div>
        );
    }
}

