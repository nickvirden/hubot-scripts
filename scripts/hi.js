// Commands:
//   hi - Hubot responds with "hello from hubot!"
//   GAJS bye - Hubot responds with "goodbye from hubot!"


module.exports = function (robot) {
    
    'use strict';
    
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
    
        retrieveQuote(msg);
        
        var retrieveQuote = function (msg) {
            
            // Hard code the URL
            var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';
            
            msg.http(url).get()(function (err, res, body) {
            
                console.log(err);
                console.log(res);
                console.log(body);
                
                if (body.match(/^302/)[0] == '302' || body.match(/^302/)[0] === null) {
                    msg.send("That author probably doesn't exist.");
                    return;
                }

                var posts = JSON.parse(body);

                if (post.error || null) {
                    msg.send("That doesn't seem to be a valid author. [http response #{posts.error}]");
                    return;
                } else if (posts.data.children && posts.data.children.length > 0) {

                    msg.send("While that author exists, there does not seem to be any quotes.");
                    return;
                }

                var post = getPost(posts),
                    tries_to_find_picture = 0;
                
                msg.send("#{post.title} - http://quotesondesign.com/wp-json/posts#{post.permalink}");
            });
        };

        var getPost = function (posts) {
            
            var random = Math.round(Math.random() * posts.data.children.length);
            posts.data.children[random].data;
        };
    });
};