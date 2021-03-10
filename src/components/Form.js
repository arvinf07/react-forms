import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "Arvin",
    lastName: "Fernandez",
    submittedData: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      console.log(this.state.submittedData)
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            name="firstName"
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.firstName}
          />
          <input
            name="lastName"
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.lastName}
          />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;