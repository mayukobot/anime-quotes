'use strict';

const axios = require("axios");

module.exports = getQuote;

async function getQuote(character, page) {
    if(character === undefined) {
        var quote = await axios.get('https://animechan.vercel.app/api/random')      // If an anime character is not given, fall back to a random quote from a random character.
    } else {
        if(page === undefined) {                                                    // Pagination is fun! But I didn't want to support it because it's weird.
            var quote = await axios.get(`https://animechan.vercel.app/api/quotes/character?name=${character}&page=1`)   // Similar to character fallback, select page 1 if a page is not specified.
        } else {
            var quote = await axios.get(`https://animechan.vercel.app/api/quotes/character?name=${character}&page=${page}`) // Youi can assume this one based on the comment above.
        }
        
    }
    return quote.data
}