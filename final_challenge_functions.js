function timesTable(number) {

    var rows = 10;
    var cells = 10;
    document.write("<table>");
    for (i = 0; i < rows; i++) {
        document.write("<tr>");
        for (j = 0; j < cells; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
