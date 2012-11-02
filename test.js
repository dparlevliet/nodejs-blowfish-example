
var Encryption = require('./encryption.js');
var e = new Encryption();
var key = "test_key";
var encrypted = e.encrypt("password", key);
console.log("Encrypted text: "+encrypted);

var decrypted = e.decrypt(encrypted, key);
console.log("Decrypted text: "+decrypted);