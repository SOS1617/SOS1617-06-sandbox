var contacts = [{
    name: "Peter",
    phone: "615826583"
}, {
    name: "Anna",
    phone: "582947257"
}];

function print(contact, index, contacts) {
    console.log((parseInt(index) + 1) + "/" + contacts.length + " " + contact.name + " => " + contact.phone);
}

function getPhones(contacts) {
    var array = [];
    for (var i in contacts)
        array.push(contacts[i].phone);
    return array;
}

function getPhonesMap(contacts) {
    return contacts.map((contact) => {
        return contact.phone
    });
}

var phones = getPhones(contacts);
console.log(phones);

function getContactsByInitial(contacts, letter) {
    return contacts.map((contact) => {
            return contact.name;
        }).filter((name) => {
            return (name.charAt(0) == letter);
        });
}

var names = getContactsByInitial(contacts, "P");
console.log(names);

// Testing various methods of iteration
for (var x = 0; x < contacts.length; x++) {
    print(contacts[x], x, contacts);
}

contacts.forEach(print);

for (var i in contacts) {
    print(contacts[i], i, contacts);
}
