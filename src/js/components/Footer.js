import React from "react"

export default class Footer extends React.Component {
  render() {
    return (
      <button type="button" class="btn btn-primary"
      onClick={this.props.toggleProfile}>Show/Hide Profile</button>
    )
  }
}
