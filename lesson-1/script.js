let user = {
    name: 'Josep',
    age: 25,
    hobbies: ['bassketball' ,'massage' ,'work'],
    sayHello () {
        console.log(`Hello, My name is ${this.name}. I am ${this.age} years old. I have ${this.hobbies.length} hobbies: ${this.hobbies}`)
    }   
}

user.sayHello();

// В JS є 6 типів даних: Undefiend,Boolean,Number,String,Null,Object. 
// Примітивні це данні, які не мають властивостей і методів.
// Посилальний тип данних, це об'єкт, який посилаеться на ту чи іншу ланку пам'яті.
