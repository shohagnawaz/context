import React, { Component } from 'react';
import { PutiConsumer } from './Mycontext';

class Puti extends Component {
    render () {
        return (
            <div>
                <h1>
                    <PutiConsumer>
                        {
                            message => {
                                return message;
                            }
                        }
                    </PutiConsumer>
                </h1>
            </div>
        );
    }
}

export default Puti;