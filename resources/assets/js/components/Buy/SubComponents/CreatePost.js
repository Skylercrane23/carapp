import React, {Component} from 'react';
import axios from "axios/index";
import SweetAlert from 'sweetalert2-react';

import BasicInfo from "./CreatePostSteps/BasicInfo";
import VehicleInfo from "./CreatePostSteps/VehicleInfo";
import Features from "./CreatePostSteps/Features";
import Image from "./CreatePostSteps/Image";
import PaymentInfo from "./CreatePostSteps/PaymentInfo";

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
                    onConfirm={ () => {
                        this.props.history.push('/home/buy');
                    }}
                />

            </div>
        );
    }
}

