function Person(username, email) {
    this.username = username;
    this.email = email;
}
Person.prototype.login = function() {
    console.log(`${this.username}`);
    return this;
}

function Admin(username, email, title) {
    Person.call(this, username, email)
    this.title = title;
    console.log(`My name is ${this.username} and title is ${this.title}`)
}
Admin.prototype = Object.create(Person);

const user1 = new Person('mario', 'jackson');
const user2 = new Admin('weston', 'wario@gmail.ocm', 'Steal');