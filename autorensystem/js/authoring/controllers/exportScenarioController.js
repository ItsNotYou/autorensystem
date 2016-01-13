/**
 * Created by tobias on 13.01.16.
 */

$(function() {
    // sets the trigger for if save scenario was clicked
    $("#exportScenario").on("click", function() {
        exportScenario();
    });
});

function exportScenario() {
    // get current scenario name
    var currentScenario = $("#lname")[0].innerHTML;
    if (currentScenario == "") {
        alert("Sie müssen erst ein Szenario erstellen, bevor Sie es exportieren können.");
        return false;
    }

    var JSONLD = authorSystemContent.getScenario(currentScenario).getABoxJSONLD();

    $.ajax({
        url: "http://localhost:9998/owl/convert-from-json-ld",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        data: {"jsonld": JSON.stringify(JSONLD)},
        dataType: "text",
        success: function(response) {
            $.ajax({
                url: "http://localhost:9998/noderules/get-adaptation-rules",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: {"ontologyABox": response},
                success: function(response) {
                    console.log(response);
                    alert("Export war erfolgreich.")
                },
                error: function(err, textStatus) {
                    console.log(textStatus);
                    alert("Fehler beim Erstellen der Adaptionsregeln.")
                }
            });
        },
        error: function(err, textStatus) {
            console.log(textStatus);
            alert("Fehler beim Konvertieren der Autorensystemdaten.");
        }
    });
}