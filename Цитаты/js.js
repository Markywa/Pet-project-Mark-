 'use strict'
 const qouteContainer = document.getElementById('quote-container');
 const textContainer = document.getElementById('quote');
 const authorContainer = document.getElementById('author');
 const twittContainer = document.getElementById('twitter');
 const newQuoteBtn = document.getElementById('new-quote');
 const loader = document.getElementById('loader');

 let apiQuotes = [];

function loading()
{
    loader.hidden = false;
    qouteContainer.hidden = true;
}

function complete()
{
    loader.hidden = true;
    qouteContainer.hidden = false;
}


 function newQuote()
 {
    loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
  if (!quote.author)
  {
    authorContainer.textContent = 'Blank' 
  }
  else
  {
    authorContainer.textContent = quote.author;
  }
   if (quote.text.length > 120)
   {
    textContainer.classList.add('long-quote')
   }
   else
   {
    textContainer.classList.remove('long-quote') 
   }
   textContainer.textContent = quote.text;
   complete();
 }

 async function getQuotes()
{
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
   try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes)
        newQuote();
    } catch (error)
    {
         alert("Ошибка")
    }
 }

newQuoteBtn.addEventListener('click', newQuote)
getQuotes()


// function newQuote()
// {
// const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
// console.log(quote)
// }

// newQuote()