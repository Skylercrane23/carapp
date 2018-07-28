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
                        <label htmlFor="description">Description:</label>
                        <textarea
                            onChange={this.props.onChange}
                            value={this.props.postDetails.description ? this.props.postDetails.description : ''}
                            name="description"
                            ref="description"
                            rows="5"
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
                            type="number"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget">Budget:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.budget ? this.props.postDetails.budget : '' }
                            name="budget"
                            ref="budget"
                            type="number"
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
                        <select
                            onChange={this.props.onChange}
                            value={this.props.postDetails.timeframe ? this.props.postDetails.timeframe : '' }
                            name="timeframe"
                            ref="timeframe"
                            type="text"
                            className="form-control">
                            <option defaultValue disabled value={this.props.postDetails.timeframe ? this.props.postDetails.timeframe : '' }>{this.props.postDetails.timeframe ? this.props.postDetails.timeframe : '' }</option>
                            <option value="1 Week">1 Week</option>
                            <option value="2-3 Weeks">2-3 Weeks</option>
                            <option value="1 Month">1 Month</option>
                            <option value="2-3 Months">2-3 Months</option>
                            <option value="3 Months or More">3 Months or More</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="vehicle_overview">Vehicle Overview:</label>
                        <textarea
                            onChange={this.props.onChange}
                            value={this.props.postDetails.vehicle_overview ? this.props.postDetails.vehicle_overview : '' }
                            name="vehicle_overview"
                            ref="vehicle_overview"
                            type="text"
                            rows="5"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle_type">Vehicle Type:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.vehicle_type ? this.props.postDetails.vehicle_type : '' }
                            name="vehicle_type"
                            ref="vehicle_type"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle_make">Vehicle Make:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.vehicle_make ? this.props.postDetails.vehicle_make : '' }
                            name="vehicle_make"
                            ref="vehicle_make"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle_model">Vehicle Model:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.vehicle_model ? this.props.postDetails.vehicle_model : '' }
                            name="vehicle_model"
                            ref="vehicle_model"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle_year">Vehicle Year:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.vehicle_year ? this.props.postDetails.vehicle_year : '' }
                            name="vehicle_year"
                            ref="vehicle_year"
                            type="number"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle_title_type">Vehicle Title Type:</label>
                        <select
                            onChange={this.props.onChange}
                            value={this.props.postDetails.vehicle_title_type ? this.props.postDetails.vehicle_title_type : '' }
                            name="vehicle_title_type"
                            ref="vehicle_title_type"
                            type="text"
                            className="form-control">
                            <option defaultValue disabled value={this.props.postDetails.vehicle_title_type ? this.props.postDetails.vehicle_title_type : '' }>{this.props.postDetails.vehicle_title_type ? this.props.postDetails.vehicle_title_type : '' }</option>
                            <option value="Clean Title" defaultValue>Clean Title</option>
                            <option value="Branded Title">Branded Title</option>
                            <option value="Salvage Title">Salvage Title</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="features">Features:</label>
                        <textarea
                            onChange={this.props.onChange}
                            value={this.props.postDetails.features ? this.props.postDetails.features : '' }
                            name="features"
                            ref="features"
                            rows="5"
                            type="text"
                            className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="image_url">Image Url</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.image_url ? this.props.postDetails.image_url : '' }
                            name="image_url"
                            ref="image_url"
                            type="text"
                            className="form-control"/>
                        <img className="mb-2 img-fluid" src={this.props.postDetails.image_url ? this.props.postDetails.image_url : 'img/deafult-image.jpg' } alt=""/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="payment_type">Payment Type:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.payment_type ? this.props.postDetails.payment_type : '' }
                            name="payment_type"
                            ref="payment_type"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="seller_preference">Seller Preference:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.seller_preference ? this.props.postDetails.seller_preference : '' }
                            name="seller_preference"
                            ref="seller_preference"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="loan_payment_method">Loan Payment Method:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.loan_payment_method ? this.props.postDetails.loan_payment_method : '' }
                            name="loan_payment_method"
                            ref="loan_payment_method"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dealer_door_price">Dealer Door Price:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.dealer_door_price ? this.props.postDetails.dealer_door_price : '' }
                            name="dealer_door_price"
                            ref="dealer_door_price"
                            type="number"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="other_notes">Other Notes:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.other_notes ? this.props.postDetails.other_notes : '' }
                            name="other_notes"
                            ref="other_notes"
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

