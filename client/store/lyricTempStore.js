export const MidYear2019 = [
  {
    id: 1,
    name: 'Mid-Year AWS English Processional 2019',
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
  },
  {
    id: 2,
    name: 'Mid-Year CWS Processional 2019',
    sequence: [
      'intro',
      'stanza1',
      'stanza2',
      'refrain',
      'stanza3',
      'stanza4',
      'refrain',
      'stanza5',
      'refrain',
      'coda'
    ],
    parts: [
      {
        name: 'intro',
        lines: [
          'Father dear, to You all praise and honor',
          'Oh, Your Name we worship and adore!',
          'Your divine love is beyond all measure',
          'For the nation You have chosen, Lord'
        ]
      },
      {
        name: 'stanza1',
        lines: [
          'We now offer our sincere thanksgiving',
          'For Your goodness which has filled our lives',
          'And the victories and countless blessings',
          'That You grant the one true Church of Christ'
        ]
      },
      {
        name: 'stanza2',
        lines: [
          'Through all trials and all persecutions',
          'Through the many hardships that have come',
          'You are always there to help Your children',
          'Oh You are, indeed, so good to us!'
        ]
      },
      {
        name: 'refrain',
        lines: [
          'With the highest regard, we will uphold',
          'This divine calling You bestowed, O Lord',
          'We will never waste our great election',
          'We will love this blessing all the more'
        ]
      },
      {
        name: 'stanza3',
        lines: [
          'Now Your Church is growing and progressing',
          'Reaching nations everywhere on Earth',
          'For Your praise, the members are increasing',
          'Joining in true worship in Your Church'
        ]
      },
      {
        name: 'stanza4',
        lines: [
          'While we still have life and strength, O Father',
          'We will help in missionary work',
          'And we promise, we will always serve You',
          'So that we will always please You, Lord'
        ]
      },
      {
        name: 'stanza5',
        lines: [
          'Thank You for remaining with and guiding',
          'The administration that You placed',
          'May you always care for and protect them',
          'So that we are led to perfect faith'
        ]
      },
      {
        name: 'coda',
        lines: [
          'Father, help us, oh, help us all our days',
          'To be faithful and never leave Your Side',
          'So that we will all receive salvation',
          'And the promised everlasting life',
          'Amen'
        ]
      }
    ]
  }
]

export const HintOptions = [
  {
    name: 'Complete',
    parse: line => line
  },
  {
    name: 'Blind',
    parse: line => ''
  },
  {
    name: 'First Letter',
    parse: line => line[0]
  },
  {
    name: 'First Ten Letters',
    parse: line => line.slice(0, 9)
  },
  {
    name: 'Last Ten Letters',
    parse: line => line.slice(Math.max(0, line.length - 10), line.length - 1)
  },
  {
    name: 'First Letter of each Word',
    parse: line =>
      line.replace(/\w[0-9A-Za-z_',!]*/g, sel => sel[0]).toUpperCase()
  }
]
