
const loadHtmlFile = function(el, file, cb = function() { }) {
    $(el).load(file, cb);
}

const loadMainHeader = function(cb, el = '#mainHeader', header = '../header.html') {
    loadHtmlFile(el, header, cb);
}
const loadMainFooter = function(cb, el = '#mainFooter', footer = '../footer.html') {
    loadHtmlFile(el, footer, cb);
}
const validHtmlFile = function(url) {
    return url[0] === '.' && url !== "#" && url.indexOf('javascript:') === -1 && url.indexOf("(") === -1
}
const loadSyntaxHighlight = function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
}
const hookLinks = function(contentEl) {
    $('a').off('click');

    $('a').on('click', function(evt) {
        let url = $(this).attr('href');
        if(validHtmlFile(url)) {
            evt.preventDefault();
            loadHtmlFile(contentEl, url, function() {
                hookLinks(contentEl);
                loadSyntaxHighlight();
            });
        }
    });
}

$(document).ready(function() {

    const contentEl = $('#mainContent');

    loadMainHeader(function() {
        loadMainFooter(function() {
            hookLinks(contentEl);
        });
    });
});