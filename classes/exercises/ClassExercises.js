// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    checkout(uses=1){
        this.timesCheckedOut += uses;

    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
       }

       dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = 'Yes';
            return true;
        }
        return false;
       }
}

    
    


class Novel extends Book{
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
     }
  
     dispose(){
        if (this.timesCheckedOut > 100) {
           this.discarded = 'Yes';
        }
     }
}

// Declare the objects for exercises 2 and 3 here:
 let myNovel = new Novel (
    'Pride and Predudice',
    'Jane Austen',
    1813,
    1111111111111,
    432,
    32,
    "No"
 );

 let myManual = new Manual(
    'Top Secret Shuttle Building',
    'Redacted',
    2013,
    '000000000000',
    1147,
    1,
    'No'
 );


// Code exercises 4 & 5 here:
(myManual.dispose());
(myNovel.checkout(1))