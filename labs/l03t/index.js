var obj = new Object();

obj.name = "Ktos";
obj.phone = 172;

function print(contact) {
    if (contact)
        console.log(contact.name + " " + contact.phone);
    else
        console.log(this.name + " " + this.phone);
}

obj.setAddress = function (address) {
    this.address = address;
}

obj.getAddress = function () {
    return this.address;
}

obj.print = print;
obj.setAddress("Petrażyckiego");

function doSth() {
    var x, y;

    x = 5;
    y = 6;
    return x + y;
}


console.log("Hello World " + doSth());
obj.print();
console.log(obj.getAddress());
