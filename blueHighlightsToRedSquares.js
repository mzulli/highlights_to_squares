/* Convert blue highlights to red squares */

try {
    this.syncAnnotScan();
    for (var nPage = 0; nPage < thisnumPages; nPage++) {
        // get all annotations on the page
        var Annots = this.getAnnots(
            { nPage: nPage }
        );
        // process each annotation
        if (Annots != null) {
            for (var i = 0; i < Annots.length; i++) {
                if (Annots[i].type == "Highlight" && Annots[i].strokeColor == color.cyan) {
                    Annots[i].type = "Square";
                    Annots[i].style = "S";
                    Annots[i].fillColor = color.transparent;
                    Annots[i].strokeColor = color.red;
                }
            }
        }
    }
}
catch (e) {
    applicationCache.alert(e);
}