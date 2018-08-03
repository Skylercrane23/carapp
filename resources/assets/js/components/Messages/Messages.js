import React, {Component} from 'react';

import MessageHero from './MessageHero';
export default class Messages extends Component {


    render() {

        return (
            <div id="Buy">
                <MessageHero/>

                <div className="container">
                    <h3 className="text-center py-5">Feature Coming Soon</h3>
                </div>
            </div>
        );
    }
}
