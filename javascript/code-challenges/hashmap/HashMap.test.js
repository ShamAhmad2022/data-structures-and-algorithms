'use strict';

const HashMap= require('./HashMap');


describe('hashtables test', () => {

  it('if the size is correct', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');
    hashTable.set('Niko', 'mechanic');

    expect(hashTable.size).toEqual(4);
  });

  it('Setting a key/value to your hashtable results in the value being in the data structure', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');
    hashTable.set('Niko', 'mechanic');

    expect(hashTable.map[0].head.value.Dante).toEqual('devil dunter');
  });

  it('Retrieving based on a key returns the value stored', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');
    hashTable.set('Niko', 'mechanic');

    expect(hashTable.get('Niko')).toEqual('mechanic');
  });

  it('Retrieving based on a key returns the value stored', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');
    hashTable.set('Niko', 'mechanic');

    expect(hashTable.get('lady')).toEqual('key does not exist!!');
  });

  it('Retrieving based on a key returns the value stored', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');
    hashTable.set('Niko', 'mechanic');

    expect(hashTable.keys()[0][0]).toEqual('Dante');
  });

  it('Successfully handle a collision within the hashtable', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');
    hashTable.set('lady', 'mechanic');
    hashTable.set('lady', 'mechanic');

    expect(hashTable.size).toEqual(4);
    expect(hashTable.map[2].head.value).toEqual({'lady': 'mechanic'});
    expect(hashTable.map[2].head.next.value).toEqual({'lady': 'mechanic'});
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');
    hashTable.set('lady', 'mechanic');
    hashTable.set('lady', 'mechanic');

    expect(hashTable.size).toEqual(4);
    expect(hashTable.get('lady')).toEqual('mechanic');
  });

  it('Successfully hash a key to an in-range value', ()=>{
    const hashTable = new HashMap(4);
    hashTable.set('Dante', 'devil dunter');
    hashTable.set('Vergil', 'vilian');
    hashTable.set('Nero', 'devil hunter');

    expect(hashTable.hash('Vergil')).toEqual(3);
  });


});
