import _ from 'lodash';
import './styles.less';
import LandingImage from './images/hero-landing.png';
import MyClass from './MyClass/MyClass';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(["Hello", "Fitness Timer!"], ' ');

    const landingImage = new Image();
    landingImage.src = LandingImage;

    element.appendChild(landingImage);

    return element;
}

document.body.appendChild(component());

const myClass = new MyClass('Shad', 'Holland');
alert(myClass.getFullName());

//Code42 member api https://api.github.com/orgs/code42/public_members
