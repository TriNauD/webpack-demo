import _ from 'lodash';
import './style.css';
import Logo from './logo.png';

function component() {
    const element = document.createElement('div');
    //lodash now imported by this script
    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello');

    //add pic
    const myLogo = new Image();
    myLogo.src = Logo;

    element.appendChild(myLogo);

    return element;
}
document.body.appendChild(component());
