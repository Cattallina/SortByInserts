(function (exports) {
  'use strict';
  function comparator(a, b) {
    return a - b;
  }

  function insertionBinarySort(array, cmp) {
    cmp = cmp || comparator;
    var current;
    var middle;
    var left;
    var right;

    for (var i = 1; i < array.length; i += 1) {
      current = array[i];
      left = 0;
      right = i;
      middle = Math.floor((left + right) / 2);
      while (left <= right) {
        if (cmp(array[middle], current) <= 0) {
          left = middle + 1;
        } else if (cmp(array[middle], current) > 0) {
          right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
      }
      for (var j = i; j > left; j -= 1) {
        array[j] = array[j - 1];
      }
      array[j] = current;
    }
    return array;
  }
  exports.insertionBinarySort = insertionBinarySort;
})(typeof window === 'undefined' ? module.exports : window);


let arr2 = insertionBinarySort(array);
console.log(`${arr2} - insertionBinarySort`);

// // //sorting 10 elements
console.time('10elements');
// // //5 99 1 30 2 0 762 5 9 4
console.timeEnd('10elements');


function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}

console.log(roughSizeOfObject(arr1));