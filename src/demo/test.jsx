import React from 'react'

class Dog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      style: {
        marginTop: '1rem',
        padding: '1rem',
        background: 'blue',
        color: 'white',
        cursor: 'pointer',
      },
      flag: true,
    }

    this.eat = this.eat.bind(this)
  }

  eat() {
    this.setState({
      style: {
        marginTop: '1rem',
        padding: '1rem',
        background: this.flag ? 'red' : 'blue',
        color: 'white',
        cursor: 'pointer',
      },
    })
    this.flag = !this.flag
  }

  swim() {
    console.log('I can swim')
  }

  render() {
    var state = this.state

    return (
      <div style={state.style} onClick={this.eat}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Dog
