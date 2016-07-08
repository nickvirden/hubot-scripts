// Commands:
//   hi - Hubot responds with "hello from hubot!"
//   GAJS bye - Hubot responds with "goodbye from hubot!"


module.exports = function (robot) {
    
    robot.hear(/hi/i, function(msg) {
        
        msg.send("hello from hubot!");
        
    });
    
    // You gotta say this dude's name first for it to work!
    // In this case, it's GAJS
    robot.respond(/bye/i, function(msg) {
        
        msg.send("goodbye from hubot!");
        
    });
    
    robot.respond(/.*taco.*/i, function(msg) {
        
        msg.send("Yes, there's a taco.");
        
    });
}