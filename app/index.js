var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');

// Step 1 - First React Component
var HelloWorld = React.createClass({
    render: function(){
        return (
            <div>Hello, {this.props.name} !</div>
        )
    }
});

// Step 2 - Nested Components
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

// Step 3 - Function Composition and Pure Functions in React

var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={'https://photo.fb.com/' + this.props.username} />
        )
    }
})
var ProfileLink = React.createClass({
    render: function() {
        return (
            <a href={'https://www.fb.com/' + this.props.username}>
                {this.props.username}
            </a>
        )
    }
})
var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        )
    }
});

// Step 3 - Stateless Functional Components
var StatelessProfilePic = function (props) {
    return <img src={'https://photo.fb.com/' + props.username} />
}
var StatelessProfileLink = function (props) {
    return (
        <a href={'https://www.fb.com/' + props.username}>
            {props.username}
        </a>
    )
}
var StatelessAvatar = function (props) {
    return (
        <div>
            <ProfilePic username={props.username} />
            <ProfileLink username={props.username} />
        </div>
    )
}



ReactDOM.render(
    <HelloWorld name="Filip"/>,app
);

ReactDOM.render(
    <FriendsContainer name="John Doe"/>, document.getElementById('friends')
);

ReactDOM.render(
    <Avatar username="tylermcginnis" />, document.getElementById('avatar')
);

ReactDOM.render(
    <StatelessAvatar username="tylermcginnis" />, document.getElementById('statelessAvatar')
);

