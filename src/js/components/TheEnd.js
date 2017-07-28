import React from "react"

export default class TheEnd extends React.Component {
  render() {
    return (
      <div class="container-fluid text-center">
        <button type="button" class="btn btn-primary"
        onClick={this.props.unMount}>Try Again</button>
        <br/><br/>
      </div>
    )
  }
}
