/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// This array contains multiple quote objects
let quotes = [
  {
      quote: "Change is. Growth is optional.",
      source: "James A. Bessert",
      tag: "personal growth"
  },
  {
      quote: ". . .ask not what your country can do for you - ask what you can do for your country.",
      source: "President John F. Kennedy",
      citation: "Inaugural Address, Washington D.C.",
      year: 1961,
      tag: "government"
  },
  {
      quote: "I have a dream today.",
      source: "Martin Luther King, Jr.",
      citation: "I Have A Dream, Lincoln Memorial, Washington D.C.",
      year: 1963,
      tag: "civil rights"
  },
  {
      quote: "This above all: to thine own self be true",
      source: "William Shakespeare",
      citation: "Hamlet, act I, scene iii, line 78",
      year: 1600,
      tag: "personal growth"
  },
  {
      quote: "If you desire many things, many things will seem but a few.",
      source: "Benjamin Franklin",
      citation: "Poor Richard's Almanack",
      year: 1736,
      tag: "wealth"
  },
];

/***
 * `getRandomQuote` function
***/

// Function generates and returns a random number based on the length of the `quotes` array
function getRandomQuote( array ) {
    let randNum = Math.floor( Math.random() * array.length );
    let randQuote = array[randNum];
    return randQuote;
}

getRandomQuote(quotes);

/***
 * `printQuote` function
***/

// Function callss the random number generator function and prints a quote and source to the web page.
function printQuote () {
    let randQuote = getRandomQuote(quotes);
    let quoteHTML = ''; 
    quoteHTML += `<p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}`;
    // Conditionals check if additional properties are present. If so, they are printed to the web page.
    if ( randQuote.citation ) {
        quoteHTML += `<span class="citation">${randQuote.citation}</span>`;
    } 
    if ( randQuote.year ) {
        quoteHTML += `<span class="year">${randQuote.year}</span>`;
    }
    if ( randQuote.tag ) {
        quoteHTML += `<span class="tag"><br>${randQuote.tag}</span>`;
    }
    quoteHTML += `</p>`;
    return document.getElementById('quote-box').innerHTML = quoteHTML;
}

/***
 * `changeBkgdColor` functions
***/

// Function generates a random number between 0 and 256
function getRandomColor() {
    let color = Math.floor( Math.random() * 256 );
    return color;
}

// Function generates a color code <div> tag
function changeBkgdColor() {
    let colorHTML = '<style>';
    let red = getRandomColor();
    let blue = getRandomColor();
    let green = getRandomColor();
    colorHTML += `body{background-color: rgb(${red},${green},${blue});</style>`;
    return colorHTML;
}

// document.head.innerHTML += changeBkgdColor();


/***
 *  `refreshPage` function
 ***/
// This function refreshes the page ever 15 seconds with a new quote
function refreshPage() {
    window.setInterval(printQuote, 15000);
}

refreshPage();
document.head.innerHTML += changeBkgdColor();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);