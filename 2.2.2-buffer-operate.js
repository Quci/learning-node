/** demo 2-3: a new impact effect a old buffer **/


let buf1 = new Buffer.from('this is the way we builder our buffer');
let length = buf1.length;

// create new buffer as slice of old
let buf2 = buf1.slice(19, length);
let buf3 = Buffer.alloc(30);

buf1.copy(buf3,0,5); // is the way we builder our buff
console.log(buf3.toString());

console.log(buf2.toString()); // builder our buffer
console.log(buf3.toString()); // this is the way we builder our buffer

// modify second buffer
buf2.fill('*', 0, 5);
console.log(buf2.toString()); // ***** our buffer

// show impact on first buffer
console.log(buf1.toString()); // this is the way we ***** our buffer
console.log(buf3.toString()); // is the way we builder our buff



/*------------------------------------------------*/

// let buf = Buffer.alloc(4);
//
// // write values to buffer
// buf.writeUInt8(0x63, 0);
// buf.writeUInt8(0x61, 1);
// buf.writeUInt8(0x74, 2);
// buf[3] = 0x73

// // now print out buffer as string
// console.log(buf.toString());
// console.log(buf.readUInt8(0));
//
// console.log(0x63617473);
// console.log(buf.readUIntLE(0, 4));
// buf.writeUInt16BE( 0x6461, 0);
// console.log(buf.toString());
// console.log(buf.readUIntBE(0, 4));


