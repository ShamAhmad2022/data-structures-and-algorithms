# HashTables
Write a function called left join that left joins two hashmaps into a single data structure and takes two hash maps as an arguments, The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values, and the second parameter is a hashmap that has word strings as keys, and antonyms of the key as values, then return an output that achieves the LEFT JOIN logic.

## Whiteboard Process
![whiteborad](./images/hashmap%20jointable.png)

## Approach & Efficiency
the time complexity : O(N), where N is the number of key-value pairs in hashmap1.

the space complexity : O(N), where N is the number of key-value pairs in hashmap1.


## Solution
firat create two hashmaps:
```js
const hashTable = new HashMap(5);
hashTable.set('Dante', 'devil dunter');
hashTable.set('Vergil', 'vilian');
hashTable.set('Nero', 'devil hunter');
hashTable.set('Niko', 'mechanic');
hashTable.set('Niko', 'mechanic');

const hashTable2 = new HashMap(5);
hashTable2.set('Dante', 'Sparda\'s son');
hashTable2.set('Vergil', 'Sparda\'s son');
hashTable2.set('Nero', 'Vergil\'s son');
hashTable2.set('Niko', 'the gunsmith grandaughter');
hashTable2.set('Niko', 'the gunsmith grandaughter');
```

then use the function:
```js
console.log(leftJoin(hashTable, hashTable2));
```

returned data:
```js
[
  [ [ 'Nero' ], 'devil hunter', "Vergil's son" ],
  [ [ 'Dante' ], 'devil dunter', "Sparda's son" ],
  [ [ 'Vergil' ], 'vilian', "Sparda's son" ],
  [ [ 'Niko' ], 'mechanic', 'the gunsmith grandaughter' ],
  [ [ 'Niko' ], 'mechanic', 'the gunsmith grandaughter' ]
]
```
