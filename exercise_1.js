function printObjectKeysAndValues(object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (object.hasOwnProperty(key)) {
            console.log(key + ': ' + object[key]);
        }
    }
}

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
}

printObjectKeysAndValues(person)
