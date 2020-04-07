import React, { Component } from 'react'
import GuessCount from './GuessCount'
import Card from './Card'

import './App.css'

const win = new Date().getSeconds() % 2 === 0


class App extends Component {
  handelCardClicked(card) {
    console.log(card, "clicked")
  }

  render() {
    return (
    <div className="memory">
      <GuessCount guesses={0} />
      <Card card="🧜🏼‍♀️" feedback="hidden"         onClick={this.handelCardClicked} />
      <Card card="🧚🏻‍♀️" feedback="justMatched"    onClick={this.handelCardClicked} />
      <Card card="🦸🏻‍♀️" feedback="justMismatched" onClick={this.handelCardClicked} />
      <Card card="🧞‍♀️" feedback="visible"        onClick={this.handelCardClicked} />
      <Card card="🧟‍♀️" feedback="hidden"         onClick={this.handelCardClicked} />
      <Card card="🧛‍♀️" feedback="justMatched"    onClick={this.handelCardClicked} />
      {win && <p>Tu as gagner bro</p>}
    </div>
    )
  }
}

export default App