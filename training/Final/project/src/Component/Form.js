import React from "react";


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      
      let input = {};
      input["name"] = "";
      input["phone"] = "";

      this.setState({ input: input });
      console.log(this.state);

      alert("Form is submited");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    //validation of name
    if (!input["name"] || input.name.length < 10) {
      isValid = false;
      errors["name"] = "Please enter your name.";
      
    }

    //validate number
    if (!input["phone"]) {
      isValid = false;

      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);                
      

      if (!pattern.test(input["phone"])) {
        isValid = false;

        errors["phone"] = "Please enter only number.";
        
      } else if (input["phone"].length !== 10) {
        isValid = false;

        errors["phone"] = "Please enter valid phone number.";
      }
    }

    return isValid;
  }

  render() {
    return (
      <div>
        <h1>React Validation For Name and Phone Number</h1>

        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="name">Name:</label>

            <input
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter name"
              id="name"
            />

            <div className="text-danger">{this.state.errors.name}</div>
          </div>

          

          <div class="form-group">
            <label for="Phone">Phone:</label>

            <input
              type="text"
              name="phone"
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter phone"
              id="email"
            />

            <div className="text-danger">{this.state.errors.phone}</div>
          </div>

          

           

          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default Form;