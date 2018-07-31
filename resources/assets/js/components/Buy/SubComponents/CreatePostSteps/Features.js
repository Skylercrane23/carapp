import React, {Component} from 'react';

export default class VehicleInfo extends Component {


    render() {

        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="features">Features</label>
                    <textarea onChange={(e) => this.props.onChange('features', e)} rows="5" type="text" className="form-control"
                              id="features"
                              aria-describedby="emailHelp" placeholder="Features"
                              value={this.props.newPost.features}/>
                </div>

                <div className="next-step">
                    <a className="btn btn-blue" onClick={this.props.previousStep}>Previous Step</a>
                    <a className="btn btn-blue" onClick={this.props.nextStep}>Next Step</a>
                </div>
            </div>
        );
    }
}

