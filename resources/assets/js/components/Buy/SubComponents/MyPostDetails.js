import React, {Component} from 'react';
import axios from "axios/index";
import DetailsForm from "./DetailsForm";

export default class MyPostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postDetails: {
                title: '',
                body: ''
            },
            hasError: false,
        };
        this.setPostDetailState = this.setPostDetailState.bind(this);
        this.updatePostDetails = this.updatePostDetails.bind(this);
    }

    // ERRORs
    componentDidCatch(error,errorInfo){
        this.setState({
            hasError:true
        })
    }

    // GET MY POSTS
    componentDidMount() {
        axios.get('/api/myposts/' + this.props.match.params.id)
            .then(response => {
                const details = response.data;
                this.setState({
                    postDetails: {
                        title: details.title,
                        body: details.body,
                    }
                })
            }).catch( (error) => {
            console.log(error.response);
            this.setState({
                hasError: true
            })
        });
    }


    // SET STATE FOR
    setPostDetailState(e){
        var field = e.target.name;
        var value = e.target.value;
        this.state.postDetails[field] = value;
        return this.setState({
            postDetails: this.state.postDetails
        })
    }


    // UPDATE POST DETAILS
    updatePostDetails(e){
        e.preventDefault();
        axios.put(`/api/myposts/` + this.props.match.params.id, {
            body: this.state.postDetails.body,
            title: this.state.postDetails.title
        }).then( (res) => {
            //console.log(res);
            //window.location.replace("http://carapp.test/home/buy");
        }).catch( (error) => {
            console.log(error.response);
        });
    }


    render() {

        if (this.state.hasError) {
            return (
                <div >
                    <div className="alert mt-5 pt-5">
                        Error
                    </div>
                </div>
            );
        } else {
            return (
                <div id="MyPostDetails">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">

                                        <DetailsForm
                                            postDetails={this.state.postDetails}
                                            onChange={this.setPostDetailState}
                                            onClick={this.updatePostDetails}
                                        />

                                    </div>
                                    {/*<a href="/home/buy">Back</a>*/}
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
