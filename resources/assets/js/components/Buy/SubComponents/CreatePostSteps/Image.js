import React, {Component} from 'react';

export default class Image extends Component {


    render() {

        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="image_url">Image Url</label>
                    <input onChange={(e) => this.props.onChange('image_url', e)} rows="5" type="text" className="form-control"
                              id="image_url"
                              aria-describedby="emailHelp" placeholder="Image Url"
                              value={this.props.newPost.image_url}/>
                </div>

                <div className="next-step">
                    <a className="btn btn-blue" onClick={this.props.previousStep}>Previous Step</a>
                    <a className="btn btn-blue" onClick={this.props.nextStep}>Next Step</a>
                </div>
            </div>
        );
    }
}

