var Navbar = require('./navbar.jsx');
var Content;
switch(window.location.pathname){
  case "/":
    Content = require('./home.jsx');
    break;
  case "/login":
    Content = require('./login.jsx');
    break;
  case "/register":
    Content = require('./register.jsx');
    break;
  default:
    Content = require('./home.jsx');
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
