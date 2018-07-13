import React, {Component} from 'react';

export default class MyPosts extends Component {

    renderMyPosts() {
        var data = this.props.myPosts;
        var userPosts = Object.values(data);
        var firstThree = userPosts.slice(0,2);
        //console.log(userPosts.length);
        if (firstThree.length > 0) {
            return firstThree.map(post => {
                return (
                    <div className="card" key={post.id}>
                        <p>{post.id} </p>
                        <p>{post.title} </p>
                        <p>{post.body} </p>
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
            <div id="MyPosts">
               <div className="post-heading">
                   <h4>My Posts</h4>
                   <a href="/home/buy" className="blue">View All My Posts <i className="fas fa-chevron-right"></i></a>
               </div>
                <div className="">
                    {this.renderMyPosts()}
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
