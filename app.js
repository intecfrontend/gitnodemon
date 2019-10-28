class Users {

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }



    getFullName() {

        return this.firstname + ' ' + this.lastname
    }
    get fullName() {
        return this.getFullname()
    }
}

let user = new Users('John', 'Doe')

console.log(user.firstname)
console.log(user.getFullName())

console.log(user.fullname)