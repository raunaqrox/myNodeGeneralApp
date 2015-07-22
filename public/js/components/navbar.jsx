// Todo
// make the array of objects, {name, href}
var globals = {
  "H" : {'name':'Home', 'href':'/'},
  "Git" : ["add -A", "commit", "push"],
  "Edit" : ["copy", "paste", "undo", "redo", "find", "replace"],
  "Editor" : ["syntax", "themes", "setting"]
}

var Navbar = React.createClass({
    render: function() {
      return (
        <nav className="navbar navbar-default">
          <Heading val={this.props.txt} />
          <NavOpContainer />
          <div id="loading">
            <img className="pull-right" src="img/loading.gif" />
          </div>
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


React.render(
  <Navbar txt="Heading / LOGO" />,
  document.getElementById('navContainer')
);
