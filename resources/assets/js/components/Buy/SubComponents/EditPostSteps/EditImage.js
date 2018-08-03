import React, {Component} from 'react';

export default class EditImage extends Component {


    render() {

        return (
            <div className="container">

                <h5 className="section-info">
                    * Post image is meant to be used as an idea board for the type of car you are looking to buy. Head
                    to google and find an image of the type of color you want. You can be really specific like getting a
                    picture of a Mazda 6 or just a general photo of a sedan. Please copy the image url and enter in the
                    box below. If you did it correctly you should see a preview of your image before continuing.
                </h5>

                <div className="form-row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="image_url">Image Url</label>
                            <input onChange={(e) => this.props.onChange('image_url', e)} rows="5" type="text"
                                   className="form-control"
                                   id="image_url"
                                   aria-describedby="emailHelp" placeholder="Image Url"
                                   value={this.props.newPost.image_url !== '' ? this.props.newPost.image_url : '/img/default-image.jpg'}/>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="d-block" htmlFor="">Image Preview</label>
                            <img className="img-fluid w-100"
                                 src={this.props.newPost.image_url !== '' ? this.props.newPost.image_url : '/img/default-image.jpg'}/>
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

