import React from "react"

export default class Form extends React.Component {
  render() {
    return (
      <div class="container text-center">
        <h3>Enter your desired username below:</h3>
        <div class="form-inline">
          <input type="text" class="form-control" placeholder="UserName"
            onChange={this.props.setUser}
          />
          <button type="button" class="btn btn-primary"
            onClick={this.props.unMount}>OK
          </button>
        </div>
      </div>
    )
  }
}
