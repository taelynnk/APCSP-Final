function timesTable(number) {

    var rows = 10;
    var cells = 10;
    document.write("<table border=1>");
    for (i = 1; i < rows; i++) {
        document.write("<tr>");
        for (j = 1; j < cells; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
