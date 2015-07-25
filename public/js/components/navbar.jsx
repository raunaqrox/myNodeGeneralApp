// Todo
// make the array of objects, {name, href, class?, id?}
var globals = {
  "H" : {'name':'Home', 'href':'/'},
}
if(document.getElementById('navContainerLoggedOut')){
  globals.login = {'name':'Login', 'href':'/login'};
  globals.reg = {'name':'Register', 'href':'/register'}
}
var Navbar = React.createClass({
    render: function() {
      return (
        <nav className="navbar navbar-default">
          <Heading val={this.props.txt} />
          <NavOpContainer />
        </nav>
      );
    }
});

var Heading = React.createClass({
    render: function () {
      return (
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">{this.props.val}</a>
          </div>
        </div>
      );
    }
});

var NavOp = React.createClass({
  render: function(){
    return (
      <li className="nav navbar-nav">
        <a href={this.props.href}>
          {this.props.txt}
        </a>
      </li>
    );
  }
});


var DropOp = React.createClass({
  render: function(){
    return (
      <li>
        <a href={this.props.href}>
          {this.props.txt}
        </a>
      </li>
    );
  }
});

var DropDown = React.createClass({
    render: function(){
      return (
        <li>
          <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">
            {this.props.txt}
            <span className="caret"></span>
          </a>
          <DropMenuItems items={globals[this.props.txt]} />
        </li>
      );
    }
});

var DropMenuItems = React.createClass({
    render: function(){
      return (
        <ul className="dropdown-menu" role="menu">
          {this.props.items.map(op => {
              return <DropOp txt={op} />
            })}
        </ul>
      )
    }
});

var NavOpContainer = React.createClass({
  getInitialState: function(){
      return {optionList : Object.keys(globals)};
  },
  render: function(){
    return (
      <ul className="nav navbar-nav">
        {this.state.optionList.map(op => {
            let items = globals[op];
            if(items instanceof Array)
              return <DropDown txt={op} />
            else
              return <NavOp txt={items.name} href={items.href} />
          })}
      </ul>
    );
  }
})

module.exports = Navbar;
