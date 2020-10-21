class ApplicationError extends Error { };
class student {
    constructor(name, mealCard) {
        this._name = name
        this._mealCard = mealCard
    }
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
    get mealCard() {
        return this._mealCard
    }
    set mealCard(mealCard) {
        this._mealCard = mealCard
    }
    purchasePoints(points) {
        this._mealCard.addPoints(points)
    }
    buyFoodItems(foodItems) {
        if (this.mealCard.balance >= this.foodItems.price_In_Points) {
            this.mealCard.deductPoints(foodItems.price_In_Points)
        } else {
            throw new ApplicationError("insufficent balance")
        }
    }
}

class mealCard {
    constructor(points = 100) {
        this._balance = points
    }
    get balance() {
        return this._balance
    }
    set balance(balance) {
        this._balance = balance
    }
    addPoints(points) {
        this._balance = this._balance + points
        return this._balance
    }
    deductPoints(points) {
        this._balance = this._balance - points
        return this._balance
    }

}

class foodItems {
    constructor(Foodname, price_In_Points) {
        this._Foodname = Foodname
        this.price_In_Points = price_In_Points
    }
}

class canteen {
    constructor(foodItems, student) {
        this._foodItems = foodItems
        this._student = student
    }

}z