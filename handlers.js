function clickHandler() {
    const input = document.getElementById('input');
    const iframe = document.getElementById('iframe');
    const inputValue = input.value;

    if (inputValue === iframe.src) {
        return;
    }

    iframe.src = input.value;
};

function scriptLoader(win, doc, url) {
    const sws = doc.createElement('script');
    sws.type = 'text/javascript';
    sws.async = true;
    sws.src = url;

    const pfs = doc.getElementsByTagName('script')[0];
    pfs.parentNode.insertBefore(sws, pfs);
}
