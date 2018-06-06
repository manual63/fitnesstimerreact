import _ from 'lodash';
import './styles.less';
import LandingImage from './images/hero-landing.png';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(["Hello", "Fitness Timer!"], ' ');

    var landingImage = new Image();
    landingImage.src = LandingImage;

    element.appendChild(landingImage);

    return element;
}

document.body.appendChild(component());