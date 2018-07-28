import React, {Component} from 'react';
import axios from "axios/index";
import DetailsForm from "./DetailsForm";
import ErrorPage from "../../common/ErrorPage";
import SweetAlert from 'sweetalert2-react';

export default class MyPostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postDetails: {
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
            },
            showConfirmUpdate: false,
            showDelete: false,
            hasError: false,
        };
        this.setPostDetailState = this.setPostDetailState.bind(this);
        this.updatePostDetails = this.updatePostDetails.bind(this);
        this.confirmUpdate = this.confirmUpdate.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    // ERRORS HANDLER FOR INVALID RESPONSES
    componentDidCatch(error, info) {
        console.log(error);
        this.setState({
            hasError: true,
            error: error,
            errorInfo: info
        })
    }

    // GET MY POSTS
    componentDidMount() {
        axios.get('/api/myposts/' + this.props.match.params.id)
            .then(response => {
                const details = response.data;
                //console.log(details);
                this.setState({
                    postDetails: {
                        title: details.title,
                        description: details.description,
                        budget: details.budget,
                        mileage: details.mileage,
                        location: details.location,
                        timeframe: details.timeframe,
                        // VEHICLE INFO
                        vehicle_overview: details.vehicle_overview,
                        vehicle_type: details.vehicle_type,
                        vehicle_make: details.vehicle_make,
                        vehicle_model: details.vehicle_model,
                        vehicle_year: details.vehicle_year,
                        vehicle_title_type: details.vehicle_title_type,
                        // FEATURES
                        features: details.features,
                        // IMAGE
                        image_url: details.image_url,
                        // PAYMENT OPTIONS
                        payment_type: details.payment_type,
                        seller_preference: details.seller_preference,
                        loan_payment_method: details.loan_payment_method,
                        dealer_door_price: details.dealer_door_price,
                        other_notes: details.other_notes,

                    }
                })
            })
            .catch((error) => {
                this.setState({
                    hasError: true,
                    error: error,
                    errorInfo: 'You are not authorized to view this content.'
                })
            });
    }


    // SET STATE FOR
    setPostDetailState(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.postDetails[field] = value;
        return this.setState({
            postDetails: this.state.postDetails
        })
    }

    confirmUpdate(e){
        e.preventDefault();
        this.setState({
            showConfirmUpdate: true,
        });
    }


    // UPDATE POST DETAILS
    updatePostDetails() {
        //e.preventDefault();
        axios.put(`/api/myposts/` + this.props.match.params.id, this.state.postDetails)
            .then((res) => {
                this.setState({ showConfirmUpdate: false });
                this.props.history.push('/home/buy');
            })
            .catch((error) => {
                this.setState({
                    hasError: true,
                    error: error,
                    errorInfo: 'Please Try Again'
                })
            });
    }


    confirmDelete(e){
        e.preventDefault();
        this.setState({
            showDelete: true,
        });
    }


    // Delete Post
    deletePost() {
        axios.delete(`/api/myposts/` + this.props.match.params.id)
            .then((res) => {
                window.location.replace('/home/buy');
            })
            .catch((error) => {
                console.log('Something Went Wrong!');
            });
    }

    render() {

        if (this.state.hasError) {
            return (
               <ErrorPage
                   error={this.state.error}
                   errorInfo={this.state.errorInfo}
               />
            );
        } else {
            return (
                <div id="MyPostDetails" className="animated fadeIn">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">

                                        <DetailsForm
                                            postDetails={this.state.postDetails}
                                            onChange={this.setPostDetailState}
                                            update={this.confirmUpdate}
                                            delete={this.confirmDelete}
                                        />

                                    </div>

                                    <SweetAlert
                                        show={this.state.showConfirmUpdate}
                                        title="Confirm Update"
                                        type='info'
                                        text="Do you want to confirm this update?"
                                        animation={false}
                                        customClass='animated fadeIn'
                                        reverseButtons={true}
                                        showCancelButton={true}
                                        cancelButtonText='Cancel'
                                        confirmButtonText='Update'
                                        onConfirm={ () => {
                                            this.updatePostDetails();
                                        }}
                                    />

                                    <SweetAlert
                                        show={this.state.showDelete}
                                        title="Delete Post?"
                                        type='info'
                                        animation={false}
                                        customClass='animated fadeIn'
                                        text="Do you want to delete this post?"
                                        reverseButtons={true}
                                        showCancelButton={true}
                                        cancelButtonText='Cancel'
                                        confirmButtonText='Delete'
                                        onConfirm={ () => {
                                            this.deletePost();
                                        }}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

