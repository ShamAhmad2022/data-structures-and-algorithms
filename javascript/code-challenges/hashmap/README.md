# HashTables
Implement a Hashtable Class with the following methods: set, get, has, keys and hash.

## Solution
firat we should initiate hash table:
```js
const hashTable = new HashMap(5);
```

then uses the methods to create nodes and get them etc..
```js
hashTable.set('Dante', 'devil dunter');
hashTable.set('Vergil', 'vilian');
hashTable.set('Nero', 'devil hunter');
hashTable.set('Niko', 'mechanic');

console.log(hashTable.has('Niko'));
console.log(hashTable.get('Niko'));
console.log(hashTable.keys());

```

The methods are:
```js
set(key, value)
get(key)
has(key)
keys()
hash(key)
```