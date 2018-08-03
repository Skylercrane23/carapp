import React, {Component} from 'react';

export default class VehicleInfo extends Component {


    render() {

        return (
            <div className="container">

                <h5 className="section-info">
                    * Please provide details of the types of features you are looking for in your next vehicle purchase.
                    You can be as specific you want as well as indicate any features that are a must have etc.
                </h5>

                <div className="form-row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="features">Features</label>
                            <textarea onChange={(e) => this.props.onChange('features', e)} rows="10" type="text"
                                      className="form-control"
                                      id="features"
                                      aria-describedby="emailHelp" placeholder="Enter a description of desired features"
                                      value={this.props.postDetails.features}/>
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

