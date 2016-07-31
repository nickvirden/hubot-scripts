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
    
    robot.respond(/.*teach.*me.*make.*taco.*/i, function(msg) {
        
        msg.send("Okay. Let me find a taco recipe...");
        
        msg.send(getURL('http://www.epicurious.com/search?terms=tacos'));
        
    });
    
    // Make a GET request to this URL
    function getURL(url) {

        console.log(url);

        // Create a new XMLHttp Request
        var xhr = new XMLHttpRequest();

        // Once the ReadyState of the page changes, execute the function
        // xhr.onreadystatechange = handleXHR;

        // Initializes the URL using a get request
        xhr.open('GET', url);

        // Sends the GET request to the URL
        xhr.send(null);
    }

    // Tracks the ready state of the request
    function handleXHR() {

        // If the entirety of the contents requested has been sent   
        if (this.readyState === XMLHttpRequest.DONE) {

            // If the page exists
            if (this.status === 200) {

                // Parse the JSON data into text
                var data = JSON.parse(this.responseText);

                // console.log(data);

                // Print that data to the console 
                console.log("It's " + Math.round(data.main.temp) + ". It might be " + data.weather[0].description + " in (usually) beautiful " + data.name);

                // GIPHY SOLUTION: return data;

            } else {
                console.log(this.status, 'Uh oh!');
            }
        }
    }
}