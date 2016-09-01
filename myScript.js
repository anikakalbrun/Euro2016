    $( document ).ready(function() {
        
        $("#button").click(function() {
            
            
        // get the value of the chected input
           var value = $("input:checked").val();
            
            //if the input is not checked (change the content od the element with the id info) display a message
           
            if( ! $("input").is(':checked') ) {
                $("#info").text("To see if you are right, select one of the awesome football players");
            }
            
            // if the input is chected and has a specific value (lfor example "zlatanIbrahimovic") 
            // change the backgroundImage 
            // insert a string (text message) in the div with the id answer
            // insert a html - change the content (becouse of the euro symbol that is a reserved character in HTML and must be replaced with character entitie)
            // insert a string (text message) in the div with the id info
            else if(value === "zlatanIbrahimovic") {
                $(".image").css('backgroundImage',"url('http://e2.365dm.com/16/05/768x432/zlatan-ibrahimovic-psg_3468079.jpg?20160516234022')");
                $("#answer").text("You are wrong, try it once again!");
                $("#rate").html("Zlatan Ibrahimovic - Net Worth: &#8364;105 Million ($114 million)");
                $("#info").text("");
            }
            else if(value === "neymar") {
                $(".image").css('backgroundImage',"url('http://cdn-football365.365.co.za/wp-content/uploads/2016/04/04142216/Neymar-Barcelona.jpg')");
                $("#answer").text("You are wrong, try it once again!");
                $("#rate").html("Neymar - Net Worth: &#8364;135 Million ($148 million)");
                $("#info").text("");
            }
            else if(value === "lionelMessi") {
                $(".image").css('backgroundImage',"url('http://suitelife.com/blog/wp-content/uploads/2015/07/lionel-messi-museum.jpg')");
                $("#answer").text("You are wrong, try it once again!");
                $("#rate").html("Lionel Messi - Net Worth: &#8364;200 Million ($218 million)");
                $("#info").text("");
            }
            else {
                $(".image").css('backgroundImage',"url('http://www.telegraph.co.uk/content/dam/football/2016/04/13/Cristiano_Ronaldo_Real_WINK-large_trans++qVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg')");
                $("#answer").text("You are right!");
                $("#rate").html("Cristiano Ronaldo - Net Worth: &#8364;210 Million ($230 million)");
                $("#info").text("");
                
            }
           
            
        })
    });