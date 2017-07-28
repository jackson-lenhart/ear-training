import React from "react"

const answers = ['B', 'A', 'C']
let userAnswers = []

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionNumber: 1,
      value: null
    }

    this.handleContinue = this.handleContinue.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  //when Continue button is clicked
  handleContinue() {
    //the user must select true or false to continue
    if (this.state.value === null) {
      return null
    }

    userAnswers.push(this.state.value)
    console.log(answers, userAnswers)
    if (userAnswers[this.state.questionNumber - 1] === answers[this.state.questionNumber - 1]) {
      this.props.changeScore(10)
    }

    if (this.state.questionNumber === answers.length) {
      this.props.unMount()
      userAnswers = []
    } else {
      this.setState({
        questionNumber: this.state.questionNumber + 1
        //callback function for synchronicity
      }, () => {
        this.props.changeHeader("Question " + this.state.questionNumber)

        //resetting value and clearing selections
        this.setState({value: null})
        this.refs.optionA.checked = false
        this.refs.optionB.checked = false
        this.refs.optionC.checked = false
        this.refs.optionD.checked = false
      })
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    //todo: create ID's for choices and map to jsx to have arbitrary amount of choices
    const questions = [
      {
        question: "Which of these options most accurately represents the chord progression in this excerpt?",
        choices: ["I-V-vi-IV", "vi-IV-I-V", "IV-IV-vi-V", "ii-IV-vi-V"]
      },
      {
        question: "blah blah blah?",
        choices: ["I-V-vi-IV", "vi-IV-I-V", "IV-IV-vi-V", "ii-IV-vi-V"]
      },
      {
        question: "how many dogs?",
        choices: ["I-V-vi-IV", "vi-IV-I-V", "IV-IV-vi-V", "ii-IV-vi-V"]
      }
    ]

    const currQuestion = this.state.questionNumber - 1

    return (
      <div class="container text-center">
        <h3>{questions[currQuestion].question}</h3>
        <div class="radio">
          <label class="radio-inline">
            <input type="radio" class="form-control" name="ABCD" ref="optionA" value="A"
            onChange={this.handleChange}/><br/>{questions[currQuestion].choices[0]}
          </label><br/><br/>
          <label class="radio-inline">
            <input type="radio" class="form-control" name="ABCD" ref="optionB" value="B"
            onChange={this.handleChange}/><br/>{questions[currQuestion].choices[1]}
          </label><br/><br/>
          <label class="radio-inline">
            <input type="radio" class="form-control" name="ABCD" ref="optionC" value="C"
            onChange={this.handleChange}/><br/>{questions[currQuestion].choices[2]}
          </label><br/><br/>
          <label class="radio-inline">
            <input type="radio" class="form-control" name="ABCD" ref="optionD" value="D"
            onChange={this.handleChange}/><br/>{questions[currQuestion].choices[3]}
          </label>
          <hr/>
          <button type="button" class="btn btn-primary"
          onClick={this.handleContinue}>Continue</button>
        </div>
      </div>
    )
  }
}
