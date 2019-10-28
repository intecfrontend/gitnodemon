class Users {

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        get fullName() {
            return this.getFullname()
            console.log(fullName())
    }

  
    }

    getFullName() {

        return this.firstname + ' ' + this.lastname
    }
}

let user = new Users('John', 'Doe')

console.log(user.firstname)
console.log(user.getFullName())

console.log(user.fullname)