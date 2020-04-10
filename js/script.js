/**************************************
 * Treehouse FSJS Techdegree Project 1
 * Random Quote Generator
 **************************************/

/**
 * An array holding 5 quote objects each some with different number of properties
 **/
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

/** 
 * Functions generates a random number based on length of `quotes` array
 */
function getRandomQuote( array ) {
    let randNum = Math.floor( Math.random() * array.length );
    let randQuote = array[randNum];
    return randQuote;
}

getRandomQuote(quotes);

/***
 * `printQuote` function
***/
/**
 * Function calls `getRandomQuote`, creates HTML string and returns it
 */
function printQuote () {
    let randQuote = getRandomQuote(quotes);
    let quoteHTML = ''; 
    quoteHTML += `<p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}`;
    
    // Conditionals check if additional object properties are present. If so, they are added to the variable.
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
    
    // This line calls the `changeBkgdColor` function and changes the background color each time a new quote is displayed
    document.head.innerHTML += changeBkgdColor();

    // Line returns a new quote
    return document.getElementById('quote-box').innerHTML = quoteHTML;
}

/**
 * Function generates a random number between 0 and 256
 */

function getRandomColor() {
    let color = Math.floor( Math.random() * 256 );
    return color;
}
/**
 * Function generates and returns a <style> tag with CSS `background-color` element
 */
function changeBkgdColor() {
    let colorHTML = '<style>';
    let red = getRandomColor();
    let blue = getRandomColor();
    let green = getRandomColor();
    colorHTML += `body{background-color: rgb(${red},${green},${blue});</style>`;
    return colorHTML;
}

/**
 * Function refreshes page every 15 seconds with a new quote
 */
function refreshPage() {
    window.setInterval(printQuote, 15000);
}

refreshPage();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);