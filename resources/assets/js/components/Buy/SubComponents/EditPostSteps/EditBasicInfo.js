import React, {Component} from 'react';

export default class EditBasicInfo extends Component {


    render() {

        var styles = {
            marginTop: '100px',
        };

        return (
            <div className="container">

                <h5 className="section-info">
                    * Please provide basic car details for your post. Title and Description are required. Please fill out
                    as much info as possible to help sellers get a better idea of what kind of car you are looking to
                    purchase.
                </h5>

                <div className="form-row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="title">* Title</label>
                            <input required onChange={(e) => this.props.onChange('title', e)} type="text"
                                   className="form-control"
                                   id="title"
                                   aria-describedby="emailHelp" placeholder="Ex. Looking for AWD vehicle..."
                                   value={this.props.postDetails.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">* Description</label>
                            <textarea required onChange={(e) => this.props.onChange('description', e)} rows="10" type="text"
                                      className="form-control"
                                      id="description"
                                      placeholder="Enter a description about the type of vehicle you are looking to purchase."
                                      value={this.props.postDetails.description}/>
                        </div>
                    </div>


                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="mileage">Mileage</label>
                            <select onChange={(e) => this.props.onChange('mileage', e)} type="text"
                                    className="form-control"
                                    id="mileage"
                                    placeholder="Mileage"
                                    value={this.props.postDetails.mileage}>
                                <option defaultValue disabled value="">Select Desired Mileage</option>
                                <option value="10K to 24K">10,000 to 24,000 Miles</option>
                                <option value="25K to 49K">25,000 to 49,999 Miles</option>
                                <option value="50K to 74K">50,000 to 74,999 Miles</option>
                                <option value="75K to 99K">75,000 to 99,000 Miles</option>
                                <option value="100K or More">100,000 Mile or More</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">Budget</label>
                            <input onChange={(e) => this.props.onChange('budget', e)} type="number"
                                   className="form-control"
                                   id="budget"
                                   placeholder="Ex. 15000"
                                   value={this.props.postDetails.budget}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input onChange={(e) => this.props.onChange('location', e)} type="text"
                                   className="form-control"
                                   id="location"
                                   placeholder="Ex. Orem Ut"
                                   value={this.props.postDetails.location}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="timeframe">Timeframe</label>
                            <select onChange={(e) => this.props.onChange('timeframe', e)} type="text"
                                    className="form-control"
                                    id="timeframe"
                                    placeholder="Timeframe"
                                    value={this.props.postDetails.timeframe}>
                                <option defaultValue disabled value="">Select Desired Purchase Timeframe</option>
                                <option value="1 Week">1 Week</option>
                                <option value="2-3 Weeks">2-3 Weeks</option>
                                <option value="1 Month">1 Month</option>
                                <option value="2-3 Months">2-3 Months</option>
                                <option value="3 Months or More">3 Months or More</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="next-step">
                    <a className="btn btn-blue invisible" onClick={this.props.nextStep}>Previous Step</a>
                    <a className="btn btn-blue " onClick={this.props.nextStep}>Next Step</a>
                </div>
            </div>
        );
    }
}

