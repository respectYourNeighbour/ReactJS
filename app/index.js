var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>Hello World!</div>
      )
  }
})

ReactDOM.render(
    <HelloWorld/>,app
);