var Register = React.createClass({
  render: function(){
    return (
      <Form action="/login" method="POST" />
    )
  }
});

var Form = React.createClass({
  render: function(){
    return (
      <form class="form-horizontal" method={this.props.method} action={this.props.action}>
        <input type="text" className="form-control" id="username" placeholder="Username" required />
        <input type="email" className="form-control" id="email" placeholder="Email" required />
        <input type="password" className="form-control" id="pass" placeholder="Password" required />
        <input type="submit" className='btn btn-primary' />
      </form>
    )
  }
});
module.exports = Register;
