
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
    return url !== "#" && url.indexOf('javascript:') === -1 && url.indexOf("(") === -1
}
const hookLinks = function(contentEl) {
    $('a').on('click', function(evt) {
        evt.preventDefault();

        let url = $(this).attr('href');
        if(validHtmlFile(url)) {
            loadHtmlFile(contentEl, url);
        }
    });
}

$(document).ready(function() {

    const contentEl = $('#mainContent');

    loadMainHeader(function() {
        loadMainFooter(function() {
            $('a').on('click', function(evt) {
                evt.preventDefault();
        
                let url = $(this).attr('href');
                if(validHtmlFile(url)) {
                    loadHtmlFile(contentEl, url);
                }
            });

        });
    });
});