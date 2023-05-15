let LUCKY_NUMBER = 7;
require('./script1');
require('./script2');

console.log('Wartość Lucky Number to ', LUCKY_NUMBER);

/**
 * Node.js w 2009 roku wprowadza syntax tzw. CommonJS
 *
 * jest to używanie globalnej funkcji:
 *  require('')
 *
 * jako IMPORTÓW — dla bibliotek JS oraz innych plików (tzw. modułów).
 *
 * oraz zapisów:
 *  module.exports = {};
 *
 *  exports.xyz = 'value';
 *
 * jako EKSPORTÓW — tego, co dany plik chce udostępnić innym plikom (modułom).
 * */
