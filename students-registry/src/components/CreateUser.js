import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };
    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div>
        Create User
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </Form.Group>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </Form>
      </div>
    );
  }
}
