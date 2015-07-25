var Navbar = require('./navbar.jsx');
var Content;
switch(window.location.pathname){
  case "/login":
    Content = require('./login.jsx');
    break;
  case "/register":
    Content = require('./register.jsx');
    break;
  default:
    Content = React.createClass({
      render: function(){
        return (
          <h1>Home</h1>
        )
      }
    });
}
var Website = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Navbar txt="Heading / Logo" />
        <Content />
      </div>
    )
  }
})
React.render(
  <Website />,
  document.body
);
