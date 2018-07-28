import React, {Component} from 'react';

export default class BasicInfo extends Component {


    render() {

        var styles = {
            marginTop: '100px',
        };

        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={(e) => this.props.onChange('title', e)} type="text" className="form-control"
                           id="title"
                           aria-describedby="emailHelp" placeholder="Enter Title"
                           value={this.props.newPost.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onChange={(e) => this.props.onChange('description', e)} type="text" className="form-control"
                           id="description"
                           placeholder="Description"
                           value={this.props.newPost.description}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mileage">Mileage</label>
                    <input onChange={(e) => this.props.onChange('mileage', e)} type="text" className="form-control"
                           id="mileage"
                           placeholder="Mileage"
                           value={this.props.newPost.mileage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="budget">Budget</label>
                    <input onChange={(e) => this.props.onChange('budget', e)} type="text" className="form-control"
                           id="budget"
                           placeholder="Budget"
                           value={this.props.newPost.budget}/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input onChange={(e) => this.props.onChange('location', e)} type="text" className="form-control"
                           id="location"
                           placeholder="Location"
                           value={this.props.newPost.location}/>
                </div>
                <div className="form-group">
                    <label htmlFor="timeframe">Timeframe</label>
                    <input onChange={(e) => this.props.onChange('timeframe', e)} type="text" className="form-control"
                           id="timeframe"
                           placeholder="Timeframe"
                           value={this.props.newPost.timeframe}/>
                </div>

                <div className="next-step">
                    <a className="btn btn-blue" onClick={this.props.nextStep}>Next Step</a>
                </div>
            </div>
        );
    }
}

