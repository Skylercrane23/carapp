import React, {Component} from 'react';
import BrowseAllHero from './BrowseAllHero';
import axios from 'axios';

export default class BrowseAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get('/api/posts')
            .then(res => {
                const posts = res.data;
                this.setState({
                    posts: posts
                })
            });
    }

    renderPosts() {
        return this.state.posts.map(post => {
            return (
                <div className="col-md-6 col-sm-12 buypost animated fadeIn" key={post.id}>
                    <div className="card">
                        <div className="img">
                            <img className="img-fluid" src="/img/about-us.jpg" alt=""/>
                        </div>
                        <div className="right">
                            <div className="header">
                                <h5>{post.title} </h5>
                                <p>{post.description} </p>
                            </div>
                            <div className="overview">
                                <small className="w-bold">overview</small>
                                <div className="overview-container">
                                    <div className="left-overview">
                                        <div className="budget">
                                            <p>Budget: <span>${post.budget}</span></p>
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
                                            <p>Timeframe: <span>{post.timeframe}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-container">
                                <a className="button circle blue small"
                                   href={'/home/post-details/' + post.id}>View
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {

        return (
            <div id="BrowseAll">

                <BrowseAllHero/>

                <div className="container">
                    <div className="row buypost-container">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('BrowseAll')) {
    ReactDOM.render(<BrowseAll/>, document.getElementById('BrowseAll'));
}*/
