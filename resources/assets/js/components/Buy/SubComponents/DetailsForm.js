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
                            value={this.props.postDetails.title ? this.props.postDetails.title : ''}
                            name="title"
                            ref="title"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Body:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.description ? this.props.postDetails.description : ''}
                            name="description"
                            ref="description"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mileage">Mileage:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.mileage ? this.props.postDetails.mileage : '' }
                            name="mileage"
                            ref="mileage"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget">Budget:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.budget ? this.props.postDetails.budget : '' }
                            name="budget"
                            ref="budget"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.location ? this.props.postDetails.location : '' }
                            name="location"
                            ref="location"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeframe">Timeframe:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.timeframe ? this.props.postDetails.timeframe : '' }
                            name="timeframe"
                            ref="timeframe"
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

