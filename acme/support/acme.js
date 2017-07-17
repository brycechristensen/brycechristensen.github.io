var container = $("json-container");

function displayData (input) {
$.ajax ({
  url: "/acme/js/acme.json",
    dataType: "json",
    success: function (data) {
        $("#name").html(input);
        console.log(data[(input.trim())]);
        console.log( '[' + input + ']')
        
        var data = data[(input.trim())];
       $("#jsonPicutre").html(data.path)
        $("#description").html(data.description);
        console.log("This is the data: " + data)
        
        
        $("#manufacturer").html(data.manufacturer);
        $("#price").html("$" + data.price);
        $("#reviews").html(data.reviews);
        $('#mainDisplay').html("");
        $('#bottomcontent').html("");

        
        
/*******************        
        <ul id="content">
            <li id="path"></li>
            <li id="description"></li>
            <li id="manufacturer"></li>
            <li id="price"></li>
            <li id="reviews"></li>

          </ul>
*********************/          
        console.log("This is the input: " + input);
    }
    
    
//$("#cityDisplay").text(location);    
    
});
};

$("#largeNav span").on("click", function (evt) {
  evt.preventDefault();
    var click = $(this).text();
    $("mainDisplay").hide();
    
    console.log(click);
    
$.ajax({
    url: "/acme/js/acme.json"
    , dataType: "json"
    , success: function (data) {
    console.log(data);
    displayData(click);
    
        }
  });
});


/*******
function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  ***********/