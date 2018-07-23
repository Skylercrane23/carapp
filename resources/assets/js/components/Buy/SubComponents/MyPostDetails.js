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
                body: '',
                id: ''
            },
            showConfirmUpdate: false,
            hasError: false,
        };
        this.setPostDetailState = this.setPostDetailState.bind(this);
        this.updatePostDetails = this.updatePostDetails.bind(this);
        this.confirmUpdate = this.confirmUpdate.bind(this);
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
                        body: details.body,
                        id: details.id
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
        axios.put(`/api/myposts/` + this.props.match.params.id, {
            body: this.state.postDetails.body,
            title: this.state.postDetails.title
        })
            .then((res) => {
                this.setState({ showConfirmUpdate: false });
                this.props.history.push('/home/buy');
            })
            .catch((error) => {
                this.setState({
                    hasError: true,
                    error: error,
                    errorInfo: 'You are not authorized to update this content.'
                })
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
                                            onClick={this.confirmUpdate}
                                        />

                                    </div>

                                    <SweetAlert
                                        show={this.state.showConfirmUpdate}
                                        title="Confirm Update"
                                        type='info'
                                        text="Do you want to confirm this update?"
                                        reverseButtons={true}
                                        showCancelButton={true}
                                        cancelButtonText='Cancel'
                                        confirmButtonText='Update'
                                        onConfirm={ () => {
                                            this.updatePostDetails();
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

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
