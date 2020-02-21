import sum from './sum.js';
import callMyFunction from './call-my-function.js';

console.log(sum(1, 2));

callMyFunction(function() {
  console.log('Hello world');
});
