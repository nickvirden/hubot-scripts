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
    
    // If you ask C3P0 to teach you how to cook
    // robot.respond(/.*teach.*me.*cook.*/i, function (msg) {
    /*
        recipe(msg);
        
        var recipe = function (msg) {
            
            // Hard code the URL
            var url = 'http://www.reddit.com/r/GifRecipes/hot.json';
            
            msg.http(url).get()(function (err, res, body) {
            
                if (body.match(/^302/)[0] == '302' || body.match(/^302/)[0] === null) {
                    msg.send("That subreddit does not seem to exist.");
                    return;
                }

                var posts = JSON.parse(body);

                if (post.error || null) {
                    msg.send("That doesn't seem to be a valid subreddit. [http response #{posts.error}]");
                    return;
                } else if (posts.data.children && posts.data.children.length > 0) {

                    msg.send("While that subreddit exists, there does not seem to be anything there.");
                    return;
                }

                var post = getPost(posts),
                    tries_to_find_picture = 0;

                while ((post.domain != "i.imgur.com") && (tries_to_find_picture < 30)) {
                    post = getPost(posts);
                    tries_to_find_picture++;
                }

                // Send pictures with the url on one line so Campfire displays it as an image
                if (post.domain == 'i.imgur.com') {
                    msg.send("#{post.title} - http://www.reddit.com#{post.permalink}");
                    msg.send(post.url);
                } else {
                    msg.send("#{post.title} - #{post.url} - http://www.reddit.com#{post.permalink}");
                }
            });
        };

        var getPost = function (posts) {
            
            var random = Math.round(Math.random() * posts.data.children.length);
            posts.data.children[random].data;
        };
    });
    */
};