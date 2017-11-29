import printMe from './components/print.js';
import './css/style.css';
import data from './data/data.xml';
import data2 from './data/data2.json';
import { cube } from './utils/math.js';

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    //var btn = document.createElement('button');

    //btn.innerHTML = 'Click me and check the console!';
    //btn.onclick = printMe;

    //element.appendChild(btn);

    console.log(data, data2);

    return element;
}

let element = component();
document.body.appendChild(element);

if(module.hot) {
    module.hot.accept('./components/print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}