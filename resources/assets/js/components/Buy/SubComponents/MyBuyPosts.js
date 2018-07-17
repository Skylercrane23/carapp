import React, {Component} from 'react';

export default class MyBuyPosts extends Component {

    renderMyPosts() {
        const data = this.props.myPosts;
        const userPosts = Object.values(data);

        if (userPosts.length > 0) {
            return userPosts.map(post => {
                return (
                    <div className="card mt-3" key={post.id}>
                        <a href={'/home/my-post-details/' + post.id }>
                            <p>{post.id} </p>
                            <p>{post.title} </p>
                            <p>{post.body} </p>
                        </a>
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
                <div className="my-posts-container">
                    {this.renderMyPosts()}
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
