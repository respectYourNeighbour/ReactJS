var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>Hello, {this.props.name} !</div>
      )
  }
});

var FriendsContainer = React.createClass({
  render: function() {
    var name = this.props.name;
    var friends = ['Mike','Tyson'];

    return (
        <div>
          <h3>Name: {name}</h3>
          <ShowList names={friends} />
        </div>
      )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend, i){
      return <li key={i}>{friend} {i}</li>
    });
    return (
      <div>
        <h3>Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )

  }
});

ReactDOM.render(
  <HelloWorld name="Filip"/>,app
);


ReactDOM.render(
  <FriendsContainer name="John Doe"/>, document.getElementById('friends')
);