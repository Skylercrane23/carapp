import React, {Component} from 'react';

export default class Complete extends Component {


    render() {

        return (
            <div className="container">
                <div className="py-3 text-center">
                    <h3>One Last Step...</h3>
                    <p className="complete-text">Please make sure all info on the previous steps are filled out how you
                        would like. If you need to
                        change anything you will have access through your dashboard and buy page to edit or delete your
                        post.</p>
                    <a className="btn btn-blue create-post-btn" onClick={this.props.createPost}>Create Post</a>
                </div>

                <h4 className="text-center card-preview-heading">Post Card Preview</h4>

                <div className="row buypost-container">
                    <div className="col-sm-12 buypost animated fadeIn">
                        <div className="card preview-post">
                            <div className="img">
                                <img className="img-fluid"
                                     src={this.props.newPost.image_url !== '' ? this.props.newPost.image_url : '/img/default-image.jpg'}
                                     alt=""/>
                            </div>
                            <div className="right">
                                <div className="header">
                                    <h5>{this.props.newPost.title !== '' ? this.props.newPost.title : 'No Title'} </h5>
                                    <p>{this.props.newPost.description !== '' ? this.props.newPost.description : 'No Description'}</p>
                                </div>
                                <div className="overview">
                                    <small className="w-bold">overview</small>
                                    <div className="overview-container">
                                        <div className="left-overview">
                                            <div className="budget">
                                                <p>Budget: <span>{this.props.newPost.budget !== '' ? '$' + this.props.newPost.budget : 'Not Specified'}</span>
                                                </p>
                                            </div>
                                            <div className="location">
                                                <p>Location: <span>{this.props.newPost.location !== '' ? this.props.newPost.description : 'No Location'}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="right-overview">
                                            <div className="budget">
                                                <p>Mileage: <span>{this.props.newPost.mileage !== '' ? this.props.newPost.mileage : 'No Mileage'}</span>
                                                </p>
                                            </div>
                                            <div className="location">
                                                <p>Timetable: <span>{this.props.newPost.timeframe !== '' ? this.props.newPost.timeframe : 'No Timeframe'}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <a className="button circle blue small" disabled>View
                                    </a>
                                    <a className="button circle white small" disabled>Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="next-step">
                    <a className="btn btn-blue" onClick={this.props.previousStep}>Previous Step</a>
                    <a className="btn btn-blue invisible" onClick={this.props.nextStep}>Next Step</a>
                </div>
            </div>
        );
    }
}

