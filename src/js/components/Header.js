import React from "react"

import Profile from "./Profile"

export default class Header extends React.Component {
  render() {
    return (
      <div class="jumbotron text-center">
        <h1>{this.props.header}</h1>
      </div>
    )
  }
}
