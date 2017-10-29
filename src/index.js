import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0.00');
debugger;
console.log(`I created application, which costs ${courseValue}`);