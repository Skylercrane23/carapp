import React, {Component} from 'react';

export default class MyBuyPosts extends Component {

    renderMyPosts() {
        const data = this.props.myPosts;
        const userPosts = Object.values(data);

        if (userPosts.length > 0) {
            return userPosts.map(post => {
                return (
                    <div className="col-md-6 col-sm-12 buypost animated fadeIn" key={post.id}>
                        <div>
                            <a className="card" href={'/home/my-post-details/' + post.id}>
                                <div className="img">
                                    <img className="img-fluid" src="/img/about-us.jpg" alt=""/>
                                </div>
                                <div className="right">
                                    <div className="header">
                                        <h6>{post.title} </h6>
                                        <p>{post.body} </p>
                                    </div>
                                    <div className="overview">
                                        <small className="w-bold">overview</small>
                                        <div className="left-overview">
                                            <div className="budget">
                                                <p>Budget: <span>$38,000</span></p>
                                            </div>
                                            <div className="location">
                                                <p>Location: <span>$38,000</span></p>
                                            </div>
                                        </div>
                                        <div className="right-overview">

                                        </div>
                                    </div>
                                    <div className="btn-container">
                                        <div className="button blue small" href={'/home/my-post-details/' + post.id}>View/Edit</div>
                                    </div>
                                </div>
                            </a>
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
