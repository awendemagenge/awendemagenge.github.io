/** Upload Books into Library
 * @param {Object} library - Library to Add Books
 * @returns {undefined}
 */
function uploadBooks(library) {// eslint-disable-line no-unused-vars

    let books = [];

    books.push("The longer the thread<>Emma Lathen<>0.05<>10");
    books.push("The sky's the limit<>Wayne W. Dyer<>0.05<>35");
    books.push("The Prince & the Lily<>James Brough<>0.15<>5");
    books.push("The sun : the universe<>Ian Ridpath<>0.05<>42");
    books.push("The tower, the zoo, and the tortoise<>Julia Stuart<>0.25<>15");
    books.push("The snake, the crocodile, and the dog<>Elizabeth Peters<>0.50<>25");
    books.push("Go, go America<>Dan Yaccarino<>0.15<>6");
    books.push("The kid : the immortal life of Ted Williams<>Ben Bradlee<>0.10<>30");
    books.push("The kid who hit only homers<>Matt Christopher<>0.10<>50");
    books.push("Kid sheriff and the terrible Toads<>Bob Shea<>0.10<>20");

    // Upload to Library
    let id = 1;
    for (let b of books) {
        let [title, author, chargePerDay, bookCost] = b.split("<>");
        library.books.push(new Book(id, title, author, +bookCost, +chargePerDay));
        id += 1;
    }

}

/** Upload Members into Library
 * @param {Object} library - Library to Add Books
 * @returns {undefined}
 */
function uploadMember(library) {// eslint-disable-line no-unused-vars

    let members = [];

    members.push("Leslie Patricelli<>301-562-9861");
    members.push("Kid Rock<>919-657-6598");
    members.push("Maya Ajmera<>741-654-7524");
    members.push("Debbie Macomber<>741-675-1254");
    members.push("Daniel Miyares<>564-675-6345");
    members.push("Sherri Duskey<>345-856-6573");
    members.push("Elmore Leonard<>301-685-0235");
    members.push("Don Wulffson<>616-675-3024");
    members.push("Kenneth Cooper<>741-653-6428");
    members.push("Chris Ware<>717-976-8574");

    // Upload to Library
    for (let m of members) {
        let [name, phone] = m.split("<>");
        library.members.push(new member(name, 0, phone));
    }

}

class library {
    constructor() {
        this.members = []
        this.books = []
    }
    getBook(id) {
        for (var i = this.books.length - 1; i >= 0; i -= 1) {
            if (this.books[i].id === id) return this.books[i];
        }
    }
    getMember(id) {
        for (var i = this.members.length - 1; i >= 0; i -= 1) {
            if (this.members[i].id === id) return this.members[i];
        }
    }
    checkOut(books, members, checkOut=new Date()) {
        let loan = new Loan(books, checkOut)//{datecheckedout:676,book:"jhhj"}
        members.checkOut.push(loan)
    }

}

class Book {
    constructor(id, title, author, bookCost, chargePerDay = 0.05) {
        this._id = id;
        this.title = title;
        this.author = author;
        this.bookCost = bookCost;
        this.chargePerDay = chargePerDay;
    }


}


class member {
    constructor(memberName, balance = 0, phone) {
        this.memberName = memberName;
        this._balance = balance;
        this.checkOut = [];
        this.Phone = phone;
    }

    computeCharge(ReturnDate = new Date()) {
        let charge = 0
        for (let Loan of this.checkOut) {
            charge += Loan.computeCharge(ReturnDate)
        } return charge
    }


}

class Loan {
    constructor(book, dateCheckedOut = new Date()) {
        this.dateCheckedOut = dateCheckedOut
        this.book = book
    }
    getDueDate() {


        let y = (1000 * 60 * 60 * 24 * 21)


        let dueDate = new Date(this.dateCheckedOut.getTime() + y)
        return dueDate

    }


    computeCharge(date = new Date()) {
        let xx = this.getDueDate()
        if (date > xx) {
            let charge = (Math.round((date - xx)) / (1000 * 60 * 60 * 24)) * this.book.chargePerDay
            if (charge >= this.book.bookCost) {
                return this.book.bookCost
            }
            return (Math.round(charge * 100) / 100)
        }
        return 0
    }
}



//{datecheckout:1222,book:book}
let book = new Book(5, "title", "author", 7, 0.05)
let loan = new Loan(book)
//console.log(loan.getDueDate())
//console.log(loan.computeCharge(new Date(2020, 10, 12)))
//console.log(loan.checkout())







//Setup Library with Books and Members
let lib = new library();
uploadBooks(lib);
uploadMember(lib);
lib.checkOut(lib.books[1],lib.members[1])
console.log(lib);





