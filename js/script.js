/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quotes = [
  {
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    source: "Alan Turing"
  },
  {
    quote: "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein"
  },
  {
    quote: "Mistakes are always forgivable, if one has the courage to admit them.",
    source: "Bruce Lee",
  },
  {
    quote: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
    source: "Steve Jobs"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison"
  },
  {
    quote: "It is never too late to be what you might have been.",
    source: "George Eliot"
  },
  {
    quote: "When you're not concerned with succeeding, you can work with complete freedom.",
    source: "Larry David",
    citation: "Curb Your Enthusiasm"
  },
  {
    quote: "Mama always said life is like a box of chocolates. You never know what you're going to get.",
    source: "Tom Hanks",
    citation: "Forrest Gump",
    year: 1994
  },
]

console.log(quotes)

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
}
console.log(getRandomQuote())

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  const randomQuote = getRandomQuote()
  
  let quoteHTML = `
    <div id="quote-box">
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
  `

  if (randomQuote.citation) {
    quoteHTML += `
      <span class="citation">${randomQuote.citation}</span>
    `
  }

  if (randomQuote.year) {
    quoteHTML += `
    <span class="year">${randomQuote.year}</span>
    `
  }

  quoteHTML += "</p></div>"

  document.getElementById('quote-box').innerHTML = quoteHTML
}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.