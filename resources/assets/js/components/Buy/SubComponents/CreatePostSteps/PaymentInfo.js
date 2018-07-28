import React, {Component} from 'react';

export default class PaymentInfo extends Component {


    render() {

        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="payment_type">Payment Type</label>
                    <input onChange={(e) => this.props.onChange('payment_type', e)}  type="text" className="form-control"
                           id="payment_type"
                           aria-describedby="emailHelp" placeholder="Payment Type"
                           value={this.props.newPost.payment_type}/>
                </div>

                <div className="form-group">
                    <label htmlFor="seller_preference">Seller Preference</label>
                    <input onChange={(e) => this.props.onChange('seller_preference', e)} type="text" className="form-control"
                           id="seller_preference"
                           aria-describedby="emailHelp" placeholder="Seller Preference"
                           value={this.props.newPost.seller_preference}/>
                </div>

                <div className="form-group">
                    <label htmlFor="loan_payment_method">Loan Payment Method</label>
                    <input onChange={(e) => this.props.onChange('loan_payment_method', e)} type="text" className="form-control"
                           id="loan_payment_method"
                           aria-describedby="emailHelp" placeholder="Loan Payment Method"
                           value={this.props.newPost.loan_payment_method}/>
                </div>

                <div className="form-group">
                    <label htmlFor="dealer_door_price">Dealer Door Out the Door Price</label>
                    <input onChange={(e) => this.props.onChange('dealer_door_price', e)} type="number" className="form-control"
                           id="dealer_door_price"
                           aria-describedby="emailHelp" placeholder="Dealer Door Out the Door Price"
                           value={this.props.newPost.dealer_door_price}/>
                </div>

                <div className="form-group">
                    <label htmlFor="other_notes">Other Notes</label>
                    <textarea onChange={(e) => this.props.onChange('other_notes', e)} rows="5" type="text" className="form-control"
                           id="other_notes"
                           aria-describedby="emailHelp" placeholder="Other Notes"
                           value={this.props.newPost.other_notes}/>
                </div>

                <div className="next-step">
                    <a className="btn btn-blue" onClick={this.props.nextStep}>Next Step</a>
                    <a className="btn btn-blue" onClick={this.props.previousStep}>Previous Step</a>
                </div>
            </div>
        );
    }
}

