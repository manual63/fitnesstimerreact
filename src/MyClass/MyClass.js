class MyClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

export default MyClass;