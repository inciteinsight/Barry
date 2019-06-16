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

            pieceDisplayed: {}

        }
    }

    componentDidMount() {
        // must mount piece being tested
        // This may be passed from a currently tested component
    }

    renderPiece(option) {
        let { parts, name } = this.props.piece, name;
        return (
            <div>
                <h4>{name}</h4>
                {parts.map(part => (
                    <div>
                        <p><strong>{part.name}</strong></p>
                        {part.lines.map(line => (
                            <p>{option(line.sentence)}</p>
                        ))}
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderPiece()}
            </div>
        )
    }
}