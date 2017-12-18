function checkPrime(number) {
    if (number < 1) {
        return "not prime"
    }
    if (number % 1 != 0) {
        return "not prime"
    }
    for (i = 2; i <= number / 2; i++) {
        else if ((number) % i == 0) {
            return "not prime";
        }
    }
    return "prime";
}


function timesTable(number) {

    var rows = number;
    var cells = number;
    document.write("<table border=1>");
    for (i = 1; i <= rows; i++) {
        document.write("<tr>");
        for (j = 1; j <= cells; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}


function primeTable(number) {

    var rows = number;
    var cells = 10;
   document.write("<table border=1>");
    for (i = 0; i <= rows; i++) {
        document.write("<tr>");
        for (j = cells/10; j <= cells; ) {
            document.write(Math.round(j), "<td>", i + j, "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
