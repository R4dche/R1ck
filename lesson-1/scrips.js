let user = {
    name: 'Josep',
    age: 25,
    hobbies: ['bassketball' ,'massage' ,'work'],
    sayHello () {
        console.log(`Hello, My name is ${this.name}. I am ${this.age} years old. I have ${this.hobbies.length} hobbies: ${this.hobbies}`)
    }   
}

user.sayHello();