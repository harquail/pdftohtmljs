exports.load = function(pdf2htmlex) {
    pdf2htmlex.add_options([
        '--fit-width 720',
        '--font-format woff'
    ]);
    return pdf2htmlex
}
