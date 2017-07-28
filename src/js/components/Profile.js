import React from "react"

export default class Profile extends React.Component {
  render() {
    return (
      <div class="container-fluid text-center">
        <h1>User: {this.props.userName}</h1>
        <h1>Score: {this.props.score}</h1>
      </div>
    )
  }
}
