import React, {Component} from 'react';

export default class DetailsForm extends Component {

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
                    <a onClick={this.props.update} className="button blue w-290 square">Update</a>
                    <a onClick={this.props.delete} className="button white w-290 square">Delete</a>
                </form>

            </div>
        );
    }
}

