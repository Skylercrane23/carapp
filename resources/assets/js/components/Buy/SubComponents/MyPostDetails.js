import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from "axios/index";
import DetailsForm from "./DetailsForm";

export default class MyPostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postDetails: {
                title: '',
                body: ''
            }
        };
        this.setPostDetailState = this.setPostDetailState.bind(this);
        this.updatePostDetails = this.updatePostDetails.bind(this);
    }

    // GET MY POSTS
    componentDidMount() {
        axios.get('/api/posts/' + this.props.match.params.id)
            .then(res => {
                const details = res.data;
                this.setState({
                    postDetails: {
                        title: details.title,
                        body: details.body,
                    }
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
        console.log('Updated');
    }


    render() {

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

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
