const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },

  editA() {
    this.a = 'AAAAAAA';
  }
};

function isObject( subject ) {
  return typeof subject == 'object'
}
function isArray( subject ) {
  return Array.isArray( subject )
}

function deepCopy( subject ) {
  let copySubject;

  const sujectIsArray = isArray( subject );
  const sujectIsObject = isArray( subject );

  if( sujectIsArray ) {
    copySubject = [];
  } else if( sujectIsObject ) {
    copySubject = {};
  } else {
    return subject;
  }

  for( key in subject ) {
    const keyIsObject = isObject( subject[ key ] );

    if( keyIsObject ) {
      copySubject[ key ] = deepCopy( subject[ key ] );
    } else {
      if( sujectIsArray ) {
        copySubject.push( subject[ key ] );
      } else {
        copySubject[ key ] = subject[ key ];
      }
    }
  }

  return copySubject;
}