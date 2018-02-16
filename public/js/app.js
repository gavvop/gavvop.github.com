
const loadHtmlFile = function(el, file) {
    $(el).load(file);
}

const loadHeader = function(el = '#mainHeader', header = '../header.html') {
    loadHtmlFile(el, header);
}
const loadFooter = function(el = '#mainFooter', footer = '../footer.html') {
    loadHtmlFile(el, footer);
}

$(document).ready(function() {
    loadHeader();
    loadFooter();

    $('a').on('click', function(evt) {
        evt.preventDefault();

        let url = $(this).attr('href');
        console.log(url);
    });
});