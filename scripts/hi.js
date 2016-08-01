// Commands:
//   hi - Hubot responds with "hello from hubot!"
//   GAJS bye - Hubot responds with "goodbye from hubot!"


module.exports = function (robot) {
    
    robot.hear(/hi/i, function(msg) {
        
        msg.send("Hola!");
        
    });
    
    // When you're testing on the command line, you have to preface any command with the .respond method with the bot's name.
    // In slack, you don't have to do this.
    // Bot Name: C3P0
    robot.respond(/bye/i, function(msg) {
        
        msg.send("See ya!");
        
    });
}