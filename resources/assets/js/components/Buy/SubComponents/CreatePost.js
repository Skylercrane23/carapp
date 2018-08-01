import React, {Component} from 'react';
import axios from "axios/index";
import SweetAlert from 'sweetalert2-react';
import { Line } from 'rc-progress';

import BasicInfo from "./CreatePostSteps/BasicInfo";
import VehicleInfo from "./CreatePostSteps/VehicleInfo";
import Features from "./CreatePostSteps/Features";
import Image from "./CreatePostSteps/Image";
import PaymentInfo from "./CreatePostSteps/PaymentInfo";
import Complete from "./CreatePostSteps/Complete";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            showCancel: false,
            newPost: {
                title: '',
                description: '',
                budget: '',
                mileage: '',
                location: '',
                timeframe: '',
                // VEHICLE INFO
                vehicle_overview: '',
                vehicle_type: '',
                vehicle_make: '',
                vehicle_model: '',
                vehicle_year: '',
                vehicle_title_type: '',
                // FEATURES
                features: '',
                //IMAGES
                image_url: '',
                // PAYMENT OPTIONS
                payment_type: '',
                seller_preference: '',
                loan_payment_method: '',
                dealer_door_price: '',
                other_notes: ''
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
        this.setState({
            showCancel: true,
        })
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
            case 4:
                return <Image
                            newPost={this.state.newPost}
                            onChange={this.handleInput}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                        />
            case 5:
                return <PaymentInfo
                            newPost={this.state.newPost}
                            onChange={this.handleInput}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                        />
            case 6:
                return <Complete
                            newPost={this.state.newPost}
                            previousStep={this.previousStep}
                            nextStep={this.nextStep}
                            createPost={this.createPost}
                        />
        }
    };

    render() {

        return (
            <div id="CreatePost">

                <div className="container card">
                    <a className="cancel-button" onClick={this.cancel}><i className="fas fa-times"></i></a>

                    <h4 className="text-center">Create Post</h4>
                    <div className="progress-header">
                        <div className="header">Basic Info</div>
                        <div className="header">Vehicle Info</div>
                        <div className="header">Features</div>
                        <div className="header">Images</div>
                        <div className="header">Payment</div>
                        <div className="header">Complete</div>
                    </div>
                    <Line percent={ this.state.step / 6 * 100 }
                          strokeWidth=".5"
                          trailWidth=".5"
                          strokeLinecap="square"
                          gapPosition="top"
                          trailColor="#EAEAEA"
                          strokeColor="#4DAF4D"
                          className="progress-bar"/>

                    <form className="create-post">

                        <div className="animated fadeIn">
                            {this.showStep()}
                        </div>
                        {/*<button onClick={this.createPost} type="submit" className="button blue square">Submit</button>*/}

                    </form>
                </div>

                <SweetAlert
                    show={this.state.showCancel}
                    title="Cancel Post"
                    type='info'
                    text="Are you sure you want to cancel creating this post? You will lose all data."
                    animation={false}
                    customClass='animated fadeIn'
                    reverseButtons={true}
                    showCancelButton={true}
                    cancelButtonText='Cancel'
                    confirmButtonText='Ok'
                    onCancel={ () => {
                        console.log('cancelled');
                        this.setState({
                            showCancel: false,
                        })
                    }}
                    onConfirm={ () => {
                        this.props.history.push('/home/buy');
                    }}
                />

            </div>
        );
    }
}

