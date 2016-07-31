// Commands:
//   hi - Hubot responds with "hello from hubot!"
//   GAJS bye - Hubot responds with "goodbye from hubot!"


module.exports = function (robot) {
    
    robot.hear(/hi/i, function(msg) {
        
        msg.send("Hola!");
        
    });
    
    // You gotta say this dude's name first for it to work!
    // In this case, it's GAJS
    robot.respond(/bye/i, function(msg) {
        
        msg.send("See ya!");
        
    });
    
    robot.respond(/.*teach.*me.*make.*taco.*/i, function(msg) {
        
        msg.send("Okay. Let me find a taco recipe...");
        
        getRequest('http://www.epicurious.com/search?terms=tacos');
        
    });
    
    function getRequest(url, callback) {
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                console.log(callback(xmlHttp.responseText));
        }
        
        xmlHttp.open("GET", url); // true for asynchronous 
        xmlHttp.send(null);
    }
}