var Login = React.createClass({
  render: function(){
    return (
      <Form action="/register" method="POST" />
    )
  }
});

var Form = React.createClass({
  render: function(){
    return (
      <form className="form-horizontal" method={this.props.method} action={this.props.action}>
        <input type="text" className="form-control" id="username" placeholder="Username" required />
        <input type="password" className="form-control" id="pass" placeholder="Password" required />
        <input type="submit" className='btn btn-primary' />
      </form>
    )
  }
});

module.exports = Login;
