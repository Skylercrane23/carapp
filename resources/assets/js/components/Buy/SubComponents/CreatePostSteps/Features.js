import React, {Component} from 'react';

export default class VehicleInfo extends Component {


    render() {

        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="vehicle_type">Vehicle Type</label>
                    <input onChange={(e) => this.props.onChange('vehicle_type', e)} type="text" className="form-control"
                           id="vehicle_type"
                           aria-describedby="emailHelp" placeholder="Vehicle Type"
                           value={this.props.newPost.vehicle_type}/>
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle_make">Vehicle Make</label>
                    <input onChange={(e) => this.props.onChange('vehicle_make', e)} type="text" className="form-control"
                           id="vehicle_make"
                           placeholder="Vehicle Make"
                           value={this.props.newPost.vehicle_make}/>
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle_model">Vehicle Model</label>
                    <input onChange={(e) => this.props.onChange('vehicle_model', e)} type="text" className="form-control"
                           id="vehicle_model"
                           placeholder="Vehicle Model"
                           value={this.props.newPost.vehicle_model}/>
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle_year">Vehicle Year</label>
                    <input onChange={(e) => this.props.onChange('vehicle_year', e)} type="text" className="form-control"
                           id="vehicle_year"
                           placeholder="Vehicle Year"
                           value={this.props.newPost.vehicle_year}/>
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle_title_type">Vehicle Title Type</label>
                    <input onChange={(e) => this.props.onChange('vehicle_title_type', e)} type="text" className="form-control"
                           id="vehicle_title_type"
                           placeholder="Vehicle Title Type"
                           value={this.props.newPost.vehicle_title_type}/>
                </div>

                <div className="next-step">
                    <a className="btn btn-blue" onClick={this.props.nextStep}>Next Step</a>
                    <a className="btn btn-blue" onClick={this.props.previousStep}>Previous Step</a>
                </div>
            </div>
        );
    }
}
