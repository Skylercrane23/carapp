import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from "axios/index";

export default class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    // GET MY POSTS
    componentDidMount() {
        axios.get('/api/posts/' + this.props.match.params.id)
            .then(res => {
                const posts = res.data;
                this.setState({
                    posts: posts
                })
            });
    }


    render() {

        return (
            <div className="container" id="PostDetails">
                <div className="row top-section">
                    <div className="col-md-7">
                        <div className="image-container box-shadow-lg"
                             style={{backgroundImage: `url(${this.state.posts.image_url !== null ? this.state.posts.image_url : '/img/default-image.jpg'})`}}>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <h4>{this.state.posts.title !== null ? this.state.posts.title :
                                <span className="grey">No Title Provided</span>}</h4>
                            <hr/>
                            <p>{this.state.posts.description !== null ? this.state.posts.description :
                                <span className="grey">No Description</span>}</p>
                            <div className="basic-info">
                                <h6 className="blue">Basic Info:</h6>
                                <p><span
                                    className="w-bold">Budget </span>{this.state.posts.budget !== null ? '$' + this.state.posts.budget :
                                    <span className="grey">No Budget</span>}
                                </p>
                                <p><span
                                    className="w-bold">Mileage: </span>{this.state.posts.mileage !== null ? this.state.posts.mileage + ' Miles' :
                                    <span className="grey">No Mileage</span>}</p>
                                <p><span
                                    className="w-bold">My Location: </span>{this.state.posts.location !== null ? this.state.posts.location :
                                    <span className="grey">No Location Specified</span>}</p>
                                <p><span
                                    className="w-bold">Preferred Timeframe: </span>{this.state.posts.timeframe !== null ? this.state.posts.timeframe :
                                    <span className="grey">No Timeframe</span>}</p>
                            </div>

                            <div className="payment-info">
                                <h6 className="blue">Payment Info:</h6>
                                <p><span
                                    className="w-bold">Payment Type </span>{this.state.posts.payment_type !== null ? this.state.posts.payment_type :
                                    <span className="grey">No Payment Type</span>}
                                </p>
                                <p><span
                                    className="w-bold">Seller Preference: </span>{this.state.posts.seller_preference !== null ? this.state.posts.seller_preference :
                                    <span className="grey">No Seller Preference</span>}</p>
                                <p><span
                                    className="w-bold">Payment Method: </span>{this.state.posts.loan_payment_method !== null ? this.state.posts.loan_payment_method :
                                    <span className="grey">No Payment Method</span>}</p>
                                <p><span
                                    className="w-bold">Dealer Out Door Price: </span>{this.state.posts.dealer_door_price !== null ? this.state.posts.dealer_door_price :
                                    <span className="grey">No Out Door Price</span>}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row bottom-section">
                    <div className="col-md-6">
                        <div className="vehicle-preferences card">
                            <h4>Vehicle Preferences</h4>
                            <p>{this.state.posts.vehicle_overview !== null ? this.state.posts.vehicle_overview :
                                <span className="grey">No Vehicle Overview</span>}</p>
                            <div className="vehicle-info">
                                <p><span
                                    className="w-bold">Vehicle Type: </span>{this.state.posts.vehicle_type !== null ? this.state.posts.vehicle_type :
                                    <span className="grey">No Vehicle Type</span>}</p>
                                <p><span
                                    className="w-bold">Vehicle Make: </span>{this.state.posts.vehicle_make !== null ? this.state.posts.vehicle_make :
                                    <span className="grey">No Vehicle Make</span>}</p>
                                <p><span
                                    className="w-bold">Vehicle Model: </span>{this.state.posts.vehicle_model !== null ? this.state.posts.vehicle_model :
                                    <span className="grey">No Vehicle Model</span>}</p>
                                <p><span
                                    className="w-bold">Vehicle Year: </span>{this.state.posts.vehicle_year !== null ? this.state.posts.vehicle_year :
                                    <span className="grey">No Vehicle Year</span>}</p>
                                <p><span
                                    className="w-bold">Vehicle Title Type: </span>{this.state.posts.vehicle_title_type !== null ? this.state.posts.vehicle_title_type :
                                    <span className="grey">No Vehicle Title Type</span>}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="features card">
                            <h4>Desired Features</h4>
                            <p>{this.state.posts.features !== null ? this.state.posts.features :
                                <span className="grey">No Features Overview</span>}</p>
                        </div>
                        <div className="other-notes card">
                            <h4>Other Notes</h4>
                            <p>{this.state.posts.other_notes !== null ? this.state.posts.other_notes :
                                <span className="grey">No Other Notes</span>}</p>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

