var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
},
getInitialState: function () {
    return {
      username: ''
  }
},
handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
  });
    console.log('username' + username);
    console.log('state.username' + this.state.username);

        // Context - Dynamicaly change route
        if(this.props.routeParams.playerOne) {
          console.log('context: ', this.context);
            // go to battle
            this.context.router.push({
              pathname: '/battle',
              query: {
                playerOne: this.props.routeParams.playerOne,
                playerTwo: this.state.username
            }
        });
        } else {
            console.log('context: ', this.context);
            // go to /playerTwo
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    },
    handleUpdateUser: function (e) {
      this.setState({
        username: e.target.value
    });
  },
  render: function() {
      return (
        <Prompt 
            onSubmitUser={this.handleSubmitUser}
            onUpdateUser={this.handleUpdateUser}
            header={this.props.route.header}
            username={this.state.username} />
        )
    }
});

module.exports = PromptContainer;