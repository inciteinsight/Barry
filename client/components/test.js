import React, {Component} from 'react'

class Test extends Component {
  constructor() {
    super()
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
      piece: {
        name: 'Mid-Year Processional 2019',
        sequence: [
          'stanza1',
          'stanza2',
          'refrain',
          'stanza3',
          'stanza4',
          'refrain',
          'stanza5',
          'stanza6',
          'refrain',
          'coda'
        ],
        parts: [
          {
            name: 'stanza1',
            lines: [
              'Great indeed is Your unfailing love',
              'For us, O Lord God',
              'You have guided us and we remain',
              'Your true chosen ones',
              'And this is a special day',
              'In your blessed and dear Church of Christ'
            ]
          },
          {
            name: 'stanza2',
            lines: [
              'Oh we celebrate and bring to You',
              'Thanksgiving and praise',
              'For the blessings and great victories',
              'From your boundless grace',
              'And with You, we overcome',
              'Every hindrance and trial we face'
            ]
          },
          {
            name: 'refrain',
            lines: [
              'Oh, our precious and great election',
              'This, we will never waste, Lord God',
              'A gift received by those redeemed',
              'Saved through the sacrifice of Christ',
              'We will not separate from the right',
              'To worship You, which You bestowed on us'
            ]
          },
          {
            name: 'stanza3',
            lines: [
              'Through fierce persecution, You are there',
              'Defending Your fold',
              'In the darkest hours of our distress',
              'You rescue Your own',
              'O Lord God, You are so good',
              'To your Church, where Your grace is bestowed'
            ]
          },
          {
            name: 'stanza4',
            lines: [
              'Your last mission of salvation grows',
              'Now spanning the globe',
              'Many join to praise and worship you',
              'In reverence Lord',
              'The true chosen who will reap',
              'The reward that You have laid instore'
            ]
          },
          {
            name: 'stanza5',
            lines: [
              "All our efforts, we'll intensify",
              'To help spread the truth',
              'In the work of propagation, Lord',
              'To always bear fruit',
              'So that you are greatly pleased',
              'We will spend all our days serving You'
            ]
          },
          {
            name: 'stanza6',
            lines: [
              'Lord, to Your whole nation, You give heed',
              'And answer our cries',
              'That the church administration, Lord',
              "You'll care for and guide",
              'So that we will all be led',
              'To achieve perfect faith in Your sight'
            ]
          },
          {
            name: 'coda',
            lines: [
              'We will not separate from the right',
              'To worship You, which You bestowed on us',
              'Amen'
            ]
          }
        ]
      }
    }
  }

  componentDidMount() {}

  renderPiece() {
    // let {piece} = this.props
    // let {parts} = this.props.piece
    let {piece} = this.state
    return (
      <div>
        <h4>{piece.name}</h4>
        {piece.parts.map(part => (
          <div>
            <p>
              <strong>{part.name}</strong>
            </p>
            {part.lines.map(line => <p>{line}</p>)}
            {/* {part.lines.map(line => <p>{option(line)}</p>)} */}
          </div>
        ))}
      </div>
    )
  }

  render() {
    return this.renderPiece()
    // return (<div>Works</div>)
  }
}

export default Test
