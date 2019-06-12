/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quotes = [
  {
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    source: "Alan Turing",
    tags: ["technology"]
  },
  {
    quote: "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
    tags: ["science"]
  },
  {
    quote: "Mistakes are always forgivable, if one has the courage to admit them.",
    source: "Bruce Lee",
    tags: ["philosophy"]
  },
  {
    quote: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
    source: "Steve Jobs",
    tags: ["philosophy"]
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    tags: ["philosophy"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison",
    tags: ["science", "technology"]
  },
  {
    quote: "It is never too late to be what you might have been.",
    source: "George Eliot",
    tags: ["motivational"]
  },
  {
    quote: "When you're not concerned with succeeding, you can work with complete freedom.",
    source: "Larry David",
    citation: "Curb Your Enthusiasm",
    tags: ["humor", "tv show"]
  },
  {
    quote: "Mama always said life is like a box of chocolates. You never know what you're going to get.",
    source: "Tom Hanks",
    citation: "Forrest Gump",
    year: 1994,
    tags: ["movie", "humor"]
  },
]

/***
  This method can be used to select a random quote from the quotes array.
   
  @return   Object  A random quote.
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
}

/***
  This method gets a random quote and displays it on screen.
  
  The method gets a random quote by calling getRandomQuote() then creates
  the appropriate HTML to display the quote on screen.  HTML containing the 
  quote itself and the source is always created.  If the retrieved quote contains
  a citation and/or year, then they will be included in the HTML.  The resulting
  HTML is then added to the DOM. 
***/
function printQuote() {
  const randomQuote = getRandomQuote()
  console.log(randomQuote)
  let quoteHTML = `
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

  quoteHTML += "</p>" // end of main quote

  if (randomQuote.tags) {

    quoteHTML += "<p>" // start of tags
    
    // add span element for each tag
    randomQuote.tags.forEach( tag => {
      switch (tag) {
        case "humor":
          quoteHTML += "<span class='tag'><i class='fas fa-laugh-squint'></i> humor</span>"
          break
        case "science":
          quoteHTML += "<span class='tag'><i class='fas fa-flask'></i> science</span>"
          break
        case "technology":
          quoteHTML += "<span class='tag'><i class='fas fa-robot'></i> technology</span>"
          break
        case "motivational":
          quoteHTML += "<span class='tag'><i class='fas fa-fist-raised'></i> motivational</span>"
          break
        case "philosophy":
          quoteHTML += "<span class='tag'><i class='fas fa-brain'></i> philosophy</span>"
          break
        case "tv show":
          quoteHTML += "<span class='tag'><i class='fas fa-tv'></i> tv show</span>"
          break
        case "movie":
          quoteHTML += "<span class='tag'><i class='fas fa-film'></i> movie</span>"
        default: break
      }
    })
    quoteHTML += "</p>" // end of tags  
  }
  
  document.getElementById('quote-box').innerHTML = quoteHTML
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);