// key = property
function hasKey (key, object) {
    if (object.hasOwnProperty(key)) {
        return true

    } else {
        return false
    }
}
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
}
console.log(hasKey('first', person));