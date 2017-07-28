import React from "react"

export default class Button extends React.Component {
  render() {
    return (
      <div class="container text-center">
        <button type="button" class="btn btn-primary"
        onClick={this.props.toggleProfile}>Show/Hide Profile</button>
      </div>
    )
  }
}
