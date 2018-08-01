import React, {Component} from 'react';

export default class PaymentInfo extends Component {


    render() {

        return (
            <div className="container">

                <h5 className="section-info">
                    * Payment info will not require any credit card or banking information. This section is to find out
                    how you plan to purchase the car. Are you paying cash or getting a loan? Prefer buying privately or
                    through a dealership? Please provide as accurate information as you can.
                </h5>

                <div className="form-row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="payment_type">Payment Type</label>
                            <select onChange={(e) => this.props.onChange('payment_type', e)} type="text" className="form-control"
                                   id="payment_type"
                                   aria-describedby="emailHelp" placeholder="Payment Type"
                                   value={this.props.newPost.payment_type}>
                                <option value="" disabled defaultValue>Please select desired payment type</option>
                                <option value="Cash">Cash</option>
                                <option value="Auto Loan">Auto Loan</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="seller_preference">Seller Preference</label>
                            <select onChange={(e) => this.props.onChange('seller_preference', e)} type="text"
                                   className="form-control"
                                   id="seller_preference"
                                   aria-describedby="emailHelp" placeholder="Seller Preference"
                                   value={this.props.newPost.seller_preference}>
                                <option value="" disabled defaultValue>Please Select Desired Seller Preference</option>
                                <option value="Dealership">Dealership</option>
                                <option value="Privately">Privately</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="loan_payment_method">If Loan, Desired Monthly Payment?</label>
                            <input onChange={(e) => this.props.onChange('loan_payment_method', e)} type="number"
                                   className="form-control"
                                   id="loan_payment_method"
                                   aria-describedby="emailHelp" placeholder="Ex. 200"
                                   value={this.props.newPost.loan_payment_method}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="dealer_door_price">Dealer Door Out the Door Price</label>
                            <input onChange={(e) => this.props.onChange('dealer_door_price', e)} type="number"
                                   className="form-control"
                                   id="dealer_door_price"
                                   aria-describedby="emailHelp" placeholder="Ex. 16000"
                                   value={this.props.newPost.dealer_door_price}/>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="other_notes">Other Notes</label>
                            <textarea onChange={(e) => this.props.onChange('other_notes', e)} rows="5" type="text"
                                      className="form-control"
                                      id="other_notes"
                                      aria-describedby="emailHelp" placeholder="Other Notes"
                                      value={this.props.newPost.other_notes}/>
                        </div>
                    </div>
                </div>

                <div className="next-step">
                    <a className="btn btn-blue" onClick={this.props.previousStep}>Previous Step</a>
                    <a className="btn btn-blue" onClick={this.props.nextStep}>Next Step</a>
                </div>
            </div>
        );
    }
}

