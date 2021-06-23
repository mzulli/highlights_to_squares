/* Convert all highlights to red squares */

var oDoc = event.target;
var aAnnts = oDoc.getAnnots();

for (var i = 0; i < aAnnts.length; i++) {
    if (aAnnts[i].type == "Highlight" &&
        aAnnts[i].strokeColor == color.cyan) {
        aAnnts[i].type = "Square";
        aAnnts[i].style = "S";
        aAnnts[i].fillColor = color.transparent;
        aAnnts[i].strokeColor = color.red;
    }
}
