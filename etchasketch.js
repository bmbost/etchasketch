$(document).ready(function() {
    $("#body").append("<div id='dataContainer'></div>");
    $("#dataContainer").css({"float": "left"});
    $("#btnReset").css({"margin": "10px"});
    FillBody(16, 16);

    $("#btnReset").on("click", function() {
        var input = prompt("Please enter the size grid:", "16");
        
        if (input != null) {
            FillBody(parseInt(input, 10), parseInt(input, 10));
        }
    });
});

function FillBody(columns, rows) {
    var html = "<table id='tblContainer'>";
    for (var i = 0; i < rows; i++) {
        html += "<tr>";
        for (var j = 0; j < columns; j++) {
            html += "<td><div class='container'></div></td>";
        }
        html += "</tr>";
    }
    html += "</table>";

    $("#dataContainer").html(html);
    $(".container").css({"border-color": "#000",
                         "border-width": "1px",
                         "border-style": "solid",
                         "padding": "0",
                         "margin": "0",
                         "width": "100%",
                         "height": "100%" });

    $("#tblContainer").css({"width": "960px",
                            "height": "960px" });
    
    $("tr").css({"padding": "0",
                 "margin": "0" });

    $("td").css({"padding":"0",
                 "margin": "0" });

    $(".container").hover(
        function() {
            $(this).css({"background-color": "blue"});
        }, function() {
        }
    );
}

