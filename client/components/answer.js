import React, { Component } from 'react';

class Answer extends Component {
    constructor() {
        this.state = {

            revealMode: 'Complete',

            options: [
                'Complete',
                'Blind',
                'First Letter',
                'First Ten Letters',
                'Last Ten Letters',
                'First Letter of each Word'
            ],

            hintParameters: {
                entire: {
                    enable: true
                },
                firstLetter: {
                    enable: true
                },
                firstHalf: {
                    enable: true
                },
                secondHalf: {
                    enable: true
                }
            },

        }
    }

    componentDidMount() {
        // must mount piece being tested
        // This may be passed from a currently tested component
    }

    render() {
        return (
            <div></div>
        )
    }
}