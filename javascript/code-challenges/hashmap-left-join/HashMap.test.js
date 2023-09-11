'use strict';

const {HashMap}= require('./HashMap');
const {leftJoin}= require('./HashMap');


describe('hashtables left hoin test', () => {

  it('the function works properly', ()=>{
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

    let result = [
      [ [ 'Nero' ], 'devil hunter', 'Vergil\'s son' ],
      [ [ 'Dante' ], 'devil dunter', 'Sparda\'s son' ],
      [ [ 'Vergil' ], 'vilian', 'Sparda\'s son' ],
      [ [ 'Niko' ], 'mechanic', 'the gunsmith grandaughter' ],
      [ [ 'Niko' ], 'mechanic', 'the gunsmith grandaughter' ]
    ];

    expect(leftJoin(hashTable, hashTable2)).toEqual(result);
  });

  it('replace null if the value was not exist', ()=>{
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

    let result = [
      [ [ 'Nero' ], 'devil hunter', 'Vergil\'s son' ],
      [ [ 'Dante' ], 'devil dunter', 'Sparda\'s son' ],
      [ [ 'Vergil' ], 'vilian', 'Sparda\'s son' ],
      [ [ 'Niko' ], 'mechanic', null ],
      [ [ 'Niko' ], 'mechanic', null ]
    ];

    expect(leftJoin(hashTable, hashTable2)).toEqual(result);
  });

  it('return an empty array when one of the hashmaps is empty', ()=>{
    const hashTable = new HashMap(5);

    const hashTable2 = new HashMap(5);

    expect(leftJoin(hashTable, hashTable2)).toEqual([]);
  });

});
