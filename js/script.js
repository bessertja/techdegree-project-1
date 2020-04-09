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
//**Testing above coding** console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote( array ) {
    let randNum = Math.floor( Math.random() * array.length );
    let randQuote = array[randNum];
    //**For testing** console.log(randNum);
    //**For testing** console.log(randQuote);
    return randQuote;
}

getRandomQuote(quotes);

/***
 * `printQuote` function
***/

function printQuote () {
    let randQuote = getRandomQuote(quotes);
    let quoteHTML = ''; 
    quoteHTML += `<p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}`;
    //**For testing** console.log(quoteHTML);
    //**For testing** console.log(sourceHTML);
    if ( randQuote.citation ) {
        quoteHTML += `<span class="citation">${randQuote.citation}</span>`;
    } 
    if ( randQuote.year ) {
        quoteHTML += `<span class="year">${randQuote.year}</span>`;
    }
    if ( randQuote.tag ) {
        quoteHTML += `<span class="tag"> ${randQuote.tag}</span>`;
    }
    quoteHTML += `</p>`;
    return document.getElementById('quote-box').innerHTML = quoteHTML;
}

/***
 * `changeBkgdColor` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);