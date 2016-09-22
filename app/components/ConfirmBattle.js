var React = require('react');

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p>Loading</p>
        : <p> Confirm BATTLE</p>
}

module.exports = ConfirmBattle;