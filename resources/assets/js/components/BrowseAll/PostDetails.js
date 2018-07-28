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
        axios.get('/api/posts/'  + this.props.match.params.id)
            .then(res => {
                const posts = res.data;
                this.setState({
                    posts: posts
                })
            });
    }


    render() {


        var styles = {
            marginTop: '100px',
        };

        return (
            <div className="container" style={styles}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="card-body">
                               <span className="blue">ID: </span> {this.state.posts.id}<br/>
                                <span className="blue">Title: </span>{this.state.posts.title}<br/>
                                <span className="blue">Description: </span>{this.state.posts.description}<br/>
                                <span className="blue">Budget: </span>${this.state.posts.budget}<br/>
                                <span className="blue">Mileage: </span>{this.state.posts.mileage}<br/>
                                <span className="blue">Location: </span>{this.state.posts.location}<br/>
                                <span className="blue">Timeframe:</span>{this.state.posts.timeframe}<br/><br/>

                                <span className="blue">Vehicle Overview: </span>{this.state.posts.vehicle_overview}<br/>
                                <span className="blue">Vehicle Type: </span>{this.state.posts.vehicle_type}<br/>
                                <span className="blue">Vehicle Make: </span>{this.state.posts.vehicle_make}<br/>
                                <span className="blue">Vehicle Model: </span>{this.state.posts.vehicle_model}<br/>
                                <span className="blue">Vehicle Year: </span>{this.state.posts.vehicle_year}<br/>
                                <span className="blue">Vehicle Title Type: </span>{this.state.posts.vehicle_title_type}<br/><br/>

                                <span className="blue">Features: </span>{this.state.posts.features}<br/><br/>

                                <span className="blue">Image Url: </span>{this.state.posts.image_url}<br/>
                                <img className="img-fluid" src={this.state.posts.image_url !== null ? this.state.posts.image_url : 'img/default-image.jpg'} alt=""/><br/>

                                <span className="blue">Payment Type: </span>{this.state.posts.payment_type}<br/>
                                <span className="blue">Seller Preference: </span>{this.state.posts.seller_preference}<br/>
                                <span className="blue">Payment Method: </span>{this.state.posts.loan_payment_method}<br/>
                                <span className="blue">Dealer Out the Door Price: </span>{this.state.posts.dealer_door_price}<br/>
                                <span className="blue">Other Notes: </span>{this.state.posts.other_notes}<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
