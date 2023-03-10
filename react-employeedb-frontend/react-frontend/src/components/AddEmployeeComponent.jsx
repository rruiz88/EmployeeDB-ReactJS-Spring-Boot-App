import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class AddEmployeeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      email: ''
    }
      this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
      this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
      this.saveUpdateEmployee = this.saveUpdateEmployee.bind(this);
  }


  componentDidMount() {
    if(this.state.id === "_add") {
        return
    } else {
    EmployeeService.getEmployeeById(this.state.id).then( (res) => {
        let employee = res.data;
        this.setState({
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email})
    })
  }
  }

  saveUpdateEmployee = (e)=> {
    e.preventDefault();
    let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
    console.log(`employee => ` + JSON.stringify(employee));
    if(this.state.id === "_add") {
      EmployeeService.createEmployee(employee).then(res => {
        this.props.history.push('/employees');
      });
  } else {
    EmployeeService.updateEmployee(employee, this.state.id).then( (res) => {
      this.props.history.push('/employees');
  });
  }
}

  changeFirstNameHandler = (event) => {
    this.setState({firstName: event.target.value})
  }
  changeLastNameHandler = (event) => {
    this.setState({lastName: event.target.value})
  }
  changeEmailHandler = (event) => {
    this.setState({email: event.target.value})
  }
  cancel() {
      this.props.history.push('/employees');
  }

  getTitle() {
    if(this.state.id === "_add") {
      return <h3 className='text-center'>Add Employee</h3>
    } else {
      return <h3 className='text-center'>Update Employee</h3>
    }
  }


  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {this.getTitle()}
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name:</label>
                      <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                  </div>
                  <div className='form-group'>
                    <label>Last Name:</label>
                      <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                  </div>
                  <div className='form-group'>
                    <label>Email:</label>
                      <input placeholder='Email' name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler}></input>
                  </div>
                  <button className='btn btn-success' onClick={this.saveUpdateEmployee}>Save</button>
                  <button className='btn btn-danger' onClick={this.cancel} style={{marginLeft:'10px'}}>Cancel</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
