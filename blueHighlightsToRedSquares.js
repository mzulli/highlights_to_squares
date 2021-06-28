/* Convert blue highlights to red squares */

var oDoc = event.target;
var aAnnts = oDoc.getAnnots();

for (var i = 0; i < aAnnts.length; i++) {
    if (aAnnts[i].type == "Highlight") {
        applicationCache.alert({
            cMsg: "Is this the color to convert to squares?",
            cTitle: "Question",
            nType: 3,
        });
        if (nButton == "Yes") {
            var selectedColor = this.strokeColor;
            break;
        }
    }
}

for (var i = 0; i < aAnnts.length; i++) {
    if (aAnnts[i].type == "Highlight" && color.equal(aAnnts[i].strokeColor, selectedColor)) {
        aAnnts[i].type = "Square";
        aAnnts[i].style = "S";
        aAnnts[i].fillColor = color.transparent;
        aAnnts[i].strokeColor = color.red;
    }
}
