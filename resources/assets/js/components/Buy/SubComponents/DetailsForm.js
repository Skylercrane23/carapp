import React, {Component} from 'react';
import axios from "axios/index";

export default class DetailsForm extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost(id) {
        axios.delete(`/api/myposts/` + id)
            .then((res) => {
                window.location.replace('/home/buy');
            })
            .catch((error) => {
                console.log('Something Went Wrong!');
            });
    }

    render() {

        return (
            <div className="details-form">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.title}
                            name="title"
                            ref="title"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.body}
                            name="body"
                            ref="body"
                            type="text"
                            className="form-control"/>
                    </div>
                    <button onClick={this.props.onClick} className="btn blue">Update</button>
                </form>
                <a onClick={() => {
                    this.deletePost(this.props.postDetails.id)
                }} className="btn blue">Delete</a>
            </div>
        );
    }
}

