import React, {Component} from 'react';

export default class MyBuyPosts extends Component {

    renderMyPosts() {
        const data = this.props.myPosts;
        const userPosts = Object.values(data);

        if (userPosts.length > 0) {
            return userPosts.map(post => {
                return (
                    <div className="col-md-6 col-sm-12 buypost animated fadeIn" key={post.id}>
                        <div className="card">
                            <div className="img">
                                <img className="img-fluid" src={post.image_url !== null ? post.image_url : '/img/default-image.jpg'} alt=""/>
                            </div>
                            <div className="right">
                                <div className="header">
                                    <h5>{post.title} </h5>
                                    <p>{post.description}</p>
                                </div>
                                <div className="overview">
                                    <small className="w-bold">overview</small>
                                    <div className="overview-container">
                                        <div className="left-overview">
                                            <div className="budget">
                                                <p>Budget: <span>{post.budget !== null ? '$' + post.budget : ' '}</span></p>
                                            </div>
                                            <div className="location">
                                                <p>Location: <span>{post.location}</span></p>
                                            </div>
                                        </div>
                                        <div className="right-overview">
                                            <div className="budget">
                                                <p>Mileage: <span>{post.mileage}</span></p>
                                            </div>
                                            <div className="location">
                                                <p>Timetable: <span>{post.timeframe}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <a className="button circle blue small"
                                       href={'/home/post-details/' + post.id}>View
                                    </a>
                                    <a className="button circle white small"
                                       href={'/home/my-post-details/' + post.id}>Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        } else {
            return (
                <div>
                    <h6>Sorry, No Posts</h6>
                </div>
            );
        }
    }

    render() {

        return (
            <div id="MyBuyPosts">
                <h4>My Posts</h4>
                <div className="row buypost-container">
                    {this.renderMyPosts()}
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
