import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }
  render() {
    const changeHandler = (event) => {
      const { name, value } = event.target;
      this.setState({ ...this.state, [name]: value })
    }
    return (
      <>
        <div className="row mt-5" >
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={changeHandler} value={this.state.email} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={changeHandler} />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
          <div className="col-md-3"> </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4>Email:{this.state.email}</h4>
            <h4>Password:{this.state.password}</h4>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    );
  }

}

export default App;
