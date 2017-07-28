import React from "react"

import Button from "./Button"
import Form from "./Form"
import Header from "./Header"
import Profile from "./Profile"
import Questions from "./Questions"
import TheEnd from "./TheEnd"

const usernameRegex = /^[-\w\.]{5,20}$/

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: "Welcome to the course!",
      userName: "",
      score: 0,
      formMounted: true,
      invalidUser: false,
      profileMounted: false,
      questionMounted: false,
      buttonMounted: false,
      endMounted: false
    }

    //binding functions to the class
    this.formToQuestions = this.formToQuestions.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleProfile = this.toggleProfile.bind(this)
    this.changeHeader = this.changeHeader.bind(this)
    this.changeScore = this.changeScore.bind(this)
    this.handleFinish = this.handleFinish.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
  }
  /************************************************************
  On click of "OK", set username to user input, unmount form
  and mount questions. Change header.
  ************************************************************/
  formToQuestions() {
    if (!this.state.userName.match(usernameRegex)) {
      this.setState({
        invalidUser: true
      })
    } else {
      this.setState({
        invalidUser: false,
        userName: this.state.userName,
        formMounted: false,
        questionMounted: true,
        buttonMounted: true,
        header: "Question 1"
      })
    }
  }

  //Grabs user input from input field
  handleChange(event) {
    this.setState({
      userName: event.target.value
    })
  }

  //(un)mounts profile
  toggleProfile() {
    this.setState({
      profileMounted: !this.state.profileMounted
    })
  }

  changeHeader(newHeader) {
    this.setState({
      header: newHeader
    })
  }

  changeScore(value) {
    this.setState({
      score: this.state.score + value
    })
  }

  //when questions are done, calculate average, unmount questions and change header
  handleFinish() {
    this.setState({
      questionMounted: false,
      endMounted: true
    }, () => {
      const avg = Math.floor(100 * (this.state.score / 30))
      this.changeHeader("You answered " + avg + "% of questions correctly for a score of " + this.state.score)
    })
  }

  tryAgain() {
    this.setState({
      score: 0,
      endMounted: false,
      questionMounted: true,
      header: "Question 1"
    })
  }

  render() {
    let form = ''
    if (this.state.formMounted) {
      form = (
        <Form
          setUser={this.handleChange}
          unMount={this.formToQuestions}
        />
      )
    }

    let invalidMsg = ''
    if (this.state.invalidUser) {
      invalidMsg = (
        <small style={{color: 'red'}}>
          Invalid username
        </small>
      )
    }

    let profile = ''
    if (this.state.profileMounted) {
      profile = (
        <Profile
          userName={this.state.userName}
          score={this.state.score}
        />
      )
    }


    let questions = ''
    if (this.state.questionMounted) {
      questions = (
        <Questions
          changeHeader={this.changeHeader}
          unMount={this.handleFinish}
          changeScore={this.changeScore}
        />
      )
    }

    let button = ''
    if (this.state.buttonMounted) {
      button = (
        <Button
          toggleProfile={this.toggleProfile}
        />
      )
    }

    let end = ''
    if (this.state.endMounted) {
      end = (
        <TheEnd
          unMount={this.tryAgain}
        />
      )
    }

    return (
      <div class="container-fluid text-center">
        {button}
        {profile}
        <Header
          header={this.state.header}
          showButton={this.state.questionMounted}
        />
        {form}
        {invalidMsg}
        {questions}
        {end}
      </div>
    );
  }
}
