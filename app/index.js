var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');
var USER_DATA = {
    name: 'Filip',
    username: 'FilipUsr',
    image: 'https://cdn2.iconfinder.com/data/icons/iconslandsport/PNG/256x256/Skateboard.png'
}
var routes = require('./config/routes')

// Step 1 - First React Component
var HelloWorld = React.createClass({
    render: function(){
        console.log('this.props in HelloWorld Component: ' + this.props);
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

// Step 4 - Nesting Components
var ProfilePic = React.createClass({
    render: function() {
        return <img src={this.props.imageUrl} style={{height:100, width: 100}} />
    }
});

var Link = React.createClass({
    changeURL: function() {
        window.location.replace(this.props.href);
    },
    render: function() {
        return(
            <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
                {this.props.children}
            </span>
        )
    }
})

var ProfileLink = React.createClass({
    render: function() {
        return (
            <div>
                <Link href={'http://www.google.com'}>
                    {this.props.username}
                </Link>
            </div>
        )
    }
});

var MyAvatar = React.createClass({
    render: function() {
        console.log('this props in my avatar: ', this.props);
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
})

var ProfileName = React.createClass({
    render: function() {
        return <div>{this.props.name}</div>
    }
})



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

ReactDOM.render(
    <MyAvatar user={USER_DATA} />, document.getElementById('myAvatar')
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);