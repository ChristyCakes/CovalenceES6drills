function favMovie(movie){
    console.log(`my favorite movie is ${movie}`);
}

favMovie();
favMovie("the Sandlot")


//set a default
function favMovie2(movie="The Room"){
    console.log(`my favorite movie is ${movie}`);
}

favMovie2();
favMovie2("The Family Stone");


//2 parameters
function favMovie3(name="Christy", movie="The Room"){
    console.log(`my name is ${name} and my favorite movie is ${movie}`);
}

favMovie3();
favMovie3("Christine");
favMovie3("Christy Ann", "Gattaca")


//change to arrow functions --drop the word function, add arrow
let favMovie4 = (movie) => {
    console.log(`my favorite movie is ${movie}`);
}

favMovie4("The Social Network")

//arro function -- drop the parenthesis around param
let favMovie5 = movie => {
    console.log(`my favorite movie is ${movie}`);
}

favMovie5("The Emperor's New Groove")

//arrow function with 2 parameters requires parenthesis
let favMovie6 = (name="Christy", movie="The Room") => {
    console.log(`my name is ${name} and my favorite movie is ${movie}`);
}

favMovie6("Blue Eyes");


//arrow function concise body --remove brackets, write on one line
let favMovie7 = (name, movie) => console.log(`my name is ${name} and my favorite movie is ${movie}.`);

favMovie7("Crisp", "Sabrina");


//trying out string.split(); converts string into an array of strings
let getFirstName = name => {
    let names = name.split(" ");
    console.log(names);
    console.log(`Your first name is ${names[0]}`);
}

getFirstName("Christy Welsh");


//arrow function that returns object -- need only 1 set curly brackets wrapped in parenthesis
let createObject = (a, b) => ({
    squareA: a*a,
    squareB: b*b,
    sum: a+b
})

console.log(createObject(4,5));


//destructure the object properties and log with template literal
let createObject2 = (a, b) => ({
    squareA: a*a,
    squareB: b*b,
    sum: a+b,
})

console.log(createObject(4,5));


//use spread to pass an array into a function with equal number of parameters
let aboutYou = (name, location, favFood) => console.log(`${name} is from ${location} and loves to eat ${favFood}.`);
let arr = ["Paul", "Birmingham", "Kimchi"];
aboutYou(...arr);



//use spread to convert string to array
let me = "Christy";
let spreadOut = name => console.log([...name]);
spreadOut(me);

//practice with for loops with above function (loops through spread out string and prints each character separately)
let spreadOut2 = name => {
    let letters = [...name];
    for (let i=0; i<name.length;i++){
        console.log(letters[i]);
    }

}
spreadOut2(me);