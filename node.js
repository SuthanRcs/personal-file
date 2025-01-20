function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
  }
  
  function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
  }
  
  getUsers().then(users => {
    users.forEach(user => {
      getUserPosts(user.id).then(posts => {
        console.log(user.name)
        console.log(posts.length)
      })
    })
  })


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


// class CalorieTracker {
//     constructor(maxCalories) {
//     this.maxCalories = maxCalories
//     this.currentCalories = 0
//     } }
//     trackCalories (calorieCount) {
//     this.currentCalories += calorieCount
//     if (this.currentCalories > this.maxCalories) {
//     logMessage('Max calories exceeded')
//     } }
//     const calorieTracker = new CalorieTracker (2000)
//     calorieTracker.trackCalories (500)
//     calorieTracker.trackCalories (1000)
//     calorieTracker.trackCalories (700) 