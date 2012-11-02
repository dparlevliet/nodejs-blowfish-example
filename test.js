
var Encryption = require('./encryption.js');
var e = new Encryption();
var key = "test_key";
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla, risus id varius porttitor, metus ligula consectetur mi, id vulputate sapien tortor sit amet nunc.";

var encrypted = e.encrypt(text, key);
console.log("Encrypted text: "+encrypted);

var decrypted = e.decrypt(encrypted, key);
console.log("Decrypted text: "+decrypted);