// Commands:
//   hi - Hubot responds with "hello from hubot!"
//   GAJS bye - Hubot responds with "goodbye from hubot!"


module.exports = function (robot) {
    
    robot.hear(/hi/i, function (msg) {
        
        msg.send("Hola!");
        
    });
    
    // When you're testing on the command line, you have to preface any command with the .respond method with the bot's name.
    // In slack, you don't have to do this.
    // Bot Name: C3P0
    robot.respond(/bye/i, function (msg) {
        
        msg.send("See ya!");
        
    });
    
    // If you ask C3P0 to give you a random quote
    robot.respond(/.*give.*me.*a.*quote.*/i, function (msg) {
        
        var retrieveQuote = function (msg) {
            
            // Hard code the URL
            var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';
            
            msg.http(url).get()(function (err, res, body) {
                
                console.log(body);

                var quote = JSON.parse(body);
                
                msg.send(quote.content - quote.title - quote.link);
            });
        };
        
        retrieveQuote(msg);
    });
};