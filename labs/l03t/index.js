var contacts = [{
    name:'Peter',
    phone:'123456'
},
{
    name:'Anne',
    phone:'34567'
}];
function print(contacts){
    console.log(contacts.name+"=>"+contacts.phone);
}

for(var i=0;i<contacts.length;i++){
    print (contacts[i]);
}

contacts.forEach(print);

function getPhones(contacts){
    return contacts.map((contact)=>{
        return contact.phone;
    });
    /*var a = [];
    for(var i = 0; i< contacts.length; i++) {
        a.push(contacts[i].phone);
    }
    return a;*/
}
var phones = getPhones(contacts);
console.log(phones);


function getNamesByInitial(contacts,letter){
    return contacts.map((contact)=>{
        return contact.name;
    }).filter((name)=>{
        return (name.charAt(0)==letter); 
    });
}

var names = getNamesByInitial(contacts,"A");
console.log(names);
// var c1 = Object();
// var c2 = Object();
// c1.name = "Peter";
// c1.phone = "123456";

// c2.name = "Anne";
// c2.phone = "678902"

// c1.friend = c2;

// function print(){
//     console.log(this.name+"=>"+this.phone+"("+this.address+")");
// }
// function print(contact){
//     if(contact)
//         console.log(contact.name+"=>"+contact.phone);
//     else
//         console.log(this.name+"=>"+this.phone);
// }

// c1.print = print;

// c1.setAddress = function setAddress(address){
//     this.address= address;
// }
// c1.setAddress("c/xxxx");
// c1.print();
//console.log(c1);




//function calc() {
   // var x, y; // son variables locales

   // x = 1;
    //y = 2;
    //x = "string";
    //x = "string2 'cadena2'";
   // return x + y;
//}

//console.log(+calc());
