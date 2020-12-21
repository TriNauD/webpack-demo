// import _ from 'lodash';
// import './style.css';
// import Logo from './logo.png';
//
// function component() {
//     const element = document.createElement('div');
//     //lodash now imported by this script
//     element.innerHTML = _.join(['Hello','webpack'],' ');
//     element.classList.add('hello');
//
//     //add pic
//     const myLogo = new Image();
//     myLogo.src = Logo;
//
//     element.appendChild(myLogo);
//
//     return element;
// }
// document.body.appendChild(component());
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function formatName(user) {
    return (
        user.props.firstName + ' ' + user.props.lastName
    );
}

function greetingUser(user) {
    if (user.props.firstName != null && user.props.lastName != null) {
        return <h1>Hello, {formatName(user)}!</h1>;
    } else {
        return <h1>Hello, stranger!</h1>;
    }
}

const user = {
    id: 'student1',
    props: {
        firstName: 'Imai',
        lastName: 'Lisa',
    }
}

const element = (
    greetingUser(user)
);

ReactDOM.render(
    element,
    document.getElementById("root")
);