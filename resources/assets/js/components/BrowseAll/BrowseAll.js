import React, {Component} from 'react';
import ReactDOM from "react-dom";
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
                <div className="card my-3 mx-3 p-2" key={post.id}>
                    <div >
                        <a href={'posts/' + post.id}>
                        Title: {post.title} <br/>
                        Body: {post.body}
                        </a>
                    </div>
                </div>
            );
        })
    }

    render() {

        var styles = {
            marginTop: '100px',
        };

        return (
            <div id="BrowseAll" style={styles}>
                <div className="container animated fadeIn">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            {this.renderPosts()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('BrowseAll')) {
    ReactDOM.render(<BrowseAll/>, document.getElementById('BrowseAll'));
}*/
