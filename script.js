// class Address {
//     constructor(city, dis) {
//         this.city = city; // Assigning to class properties correctly
//         this.dis = dis;
//     }
// }

// class People {
//     constructor(name) {
//         this.name = name; 

//     }
// }

// class User { 
// constructor (name, { age, phone = '4573647' } = {}) {
// this.name = name
// this.age = age
// this.phone = phone

// }
// }
// let user = new User('Bob', {age: 10, phone : "43652`6582"})
// console.log(user)
// class Singleton {
//     constructor() {
//         if (Singleton.instance) {
//             return Singleton.instance; // Return the existing instance if it already exists
//         }

//         this.data = "I am the only instance"; // Initialize data or resources
//         Singleton.instance = this; // Store the instance
//         return this;
//     }

//     getData() {
//         return this.data;
//     }

//     setData(newData) {
//         this.data = newData;
//     }
// }

// // Client Code
// const instance1 = new Singleton();
// const instance2 = new Singleton();

// console.log(instance1 === instance2); // true (Both refer to the same instance)
// console.log(instance1.getData()); // "I am the only instance"

// // Modifying data through one instance affects the other
// instance2.setData("Singleton instance updated");
// console.log(instance1.getData()); // "Singleton instance updated"

// class PeopleBulider {
//     constructor(name) {
//         this.People = new People(name)
//     }

//     setage(age) {
//         this.People.age = new People(age)
//         return this
//     }
//     setphone(phone) {
//         this.People.phone = new People(phone)
//         return this
//     }
//     setaddress(address) {
//         this.People.address = new People(address)
//         return this
//     }
//     build() {
//         return this.People
//     }
// }

// let builder = new PeopleBulider('bob').setage("26").setphone("437942").setaddress("main street ")
// console.log(builder);


// class Calculator {
//     constructor() {
//       this.value = 0
//     }

//     add(valueToAdd) {
//       this.value = this.value + valueToAdd
//     }

//     subtract(valueToSubtract) {
//       this.value = this.value - valueToSubtract
//     }

//     multiply(valueToMultiply) {
//       this.value = this.value * valueToMultiply
//     }

//     divide(valueToDivide) {
//       this.value = this.value / valueToDivide
//     }
//   }

class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract
    }

    execute(currentValue) {
        return currentValue - this.valueToSubtract
    }

    undo(currentValue) {
        return currentValue + this.valueToSubtract
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}

class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide
    }
}

class AddThenMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
        this.addCommand = new AddCommand(valueToAdd)
        this.multiplyCommand = new MultiplyCommand(valueToMultiply)
    }

    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue)
        return this.multiplyCommand.execute(newValue)
    }

    undo(currentValue) {
        const newValue = this.multiplyCommand.undo(currentValue)
        return this.addCommand.undo(newValue)
    }
}