let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let button = document.querySelector("#next");

const quotes = [
    {quote: `"The only way to do great work is to love what you do."`, author: ` Steve Jobs`},
    {quote: `"Life is what happens when you're busy making other plans."`, author: ` John Lennon`},
    {quote: `"Get busy living or get busy dying."`, author: ` Stephen King`},
    {quote: `"You miss 100% of the shots you don’t take."`, author: ` Wayne Gretzky`},
    {quote: `"Whether you think you can or you think you can’t, you’re right."`, author: ` Henry Ford`},
    {quote: `"The best way to predict the future is to invent it."`, author: ` Alan Kay`},
    {quote: `I have not failed. I’ve just found 10,000 ways that won’t work."`, author: ` Thomas A. Edison`},
    {quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`, author: ` Winston Churchill`},
    {quote: `"It is better to be hated for what you are than to be loved for what you are not."`, author: ` Andre Gide`},
    {quote: `"The purpose of our lives is to be happy."`, author: ` Dalai Lama`}
]

button.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText=quotes[random].quote;
    author.innerText=quotes[random].author;
})