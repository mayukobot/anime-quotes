const animeQuote = require('./index')

async function getQuotes() {

    const quotePlz = await animeQuote()
    const specificQuotePlz = await animeQuote("Subaru Natsuki")
    const specificQuoteWithPagination = await animeQuote("saitama", 2)

    console.log(quotePlz)
    console.log(specificQuotePlz[0])
    console.log(specificQuoteWithPagination[0])
    
}

(async function() {
    getQuotes()
})();