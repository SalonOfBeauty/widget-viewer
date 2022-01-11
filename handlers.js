function clickHandler() {
    const input = document.getElementById('input');
    const iframe = document.getElementById('iframe');
    const inputValue = input.value;

    if (inputValue === iframe.src) {
        return;
    }

    iframe.src = input.value;
};