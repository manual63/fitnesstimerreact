import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(["Hello", "Fitness Timer!"], ' ');

    return element;
}

document.body.appendChild(component());