import React, {Component} from 'react';

export default class VehicleInfo extends Component {


    render() {

        return (
            <div className="container">

                <h5 className="section-info">
                    * Please provide vehicle information for the next car you are looking to purchase. You may be as
                    specific or general as you would like. In the Vehicle Overview section please enter a brief
                    description of the specifics of the vehicle you are looking to purchase.
                </h5>

                <div className="form-row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="vehicle_overview">Vehicle Overview</label>
                            <textarea onChange={(e) => this.props.onChange('vehicle_overview', e)} rows="5" type="text" className="form-control"
                                      id="vehicle_overview"
                                      aria-describedby="emailHelp" placeholder="Vehicle Overview"
                                      value={this.props.newPost.vehicle_overview}/>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="vehicle_type">Vehicle Type</label>
                            <select onChange={(e) => this.props.onChange('vehicle_type', e)} type="text" className="form-control"
                                    id="vehicle_type"
                                    placeholder="Vehicle Title Type"
                                    value={this.props.newPost.vehicle_type}>
                                <option value="" defaultValue disabled>Select Vehicle Type</option>
                                <option value="Car">Car</option>
                                <option value="Truck">Truck</option>
                                <option value="SUV">SUV</option>
                                <option value="Van">Van</option>
                                <option value="Minivan">Minivan</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Coup">Coup</option>
                                <option value="Convertible">Convertible</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="vehicle_make">Vehicle Make</label>
                            <input onChange={(e) => this.props.onChange('vehicle_make', e)} type="text" className="form-control"
                                   id="vehicle_make"
                                   placeholder="Ex. Mazda "
                                   value={this.props.newPost.vehicle_make}/>
                        </div>
                    </div>
                </div>


                <div className="form-row">
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="vehicle_model">Vehicle Model</label>
                            <input onChange={(e) => this.props.onChange('vehicle_model', e)} type="text" className="form-control"
                                   id="vehicle_model"
                                   placeholder="Ex. Mazda CX-5"
                                   value={this.props.newPost.vehicle_model}/>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="vehicle_year">Vehicle Year</label>
                            <select onChange={(e) => this.props.onChange('vehicle_year', e)} type="text" className="form-control"
                                    id="vehicle_year"
                                    placeholder="Vehicle Title Type"
                                    value={this.props.newPost.vehicle_year}>
                                <option value="" defaultValue disabled>Select Vehicle Year Range</option>
                                <option value="2018 or Newer">2018 or Newer</option>
                                <option value="2014 to 2017">2014 to 2017</option>
                                <option value="2010 to 2013">2010 to 2013</option>
                                <option value="2006 to 2009">2006 to 2009</option>
                                <option value="2002 to 2005">2002 to 2005</option>
                                <option value="1998 to 2001">1998 to 2001</option>
                                <option value="1997 or Older">1997 or Older</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="vehicle_title_type">Vehicle Title Type</label>
                            <select onChange={(e) => this.props.onChange('vehicle_title_type', e)} type="text" className="form-control"
                                    id="vehicle_title_type"
                                    placeholder="Vehicle Title Type"
                                    value={this.props.newPost.vehicle_title_type}>
                                <option value="" defaultValue disabled>Select Vehicle Title Type</option>
                                <option value="Clean Title" >Clean Title</option>
                                <option value="Branded Title">Branded Title</option>
                                <option value="Salvage Title">Salvage Title</option>
                            </select>
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

