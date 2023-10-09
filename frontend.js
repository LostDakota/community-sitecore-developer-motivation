let today = new Date();
today.setHours(0, 0, 0, 0);
let dateString = today.toDateString().toLowerCase().replace(/ /g, '_');
let reps = () => parseInt(localStorage.getItem('reps'));

if (!reps()) localStorage.setItem('reps', 10);

const cacheKey = `get_fit_${dateString}`;

const getTimes = () => localStorage.getItem(cacheKey);

if (!getTimes()) localStorage.setItem(cacheKey, 1);

const cleanUp = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key.indexOf('fit_') > -1 && key !== cacheKey) localStorage.removeItem(key);
    }
}

const evaluateReady = () => {
    if (window.location.href === localStorage.getItem('referrer')) {
        localStorage.setItem(cacheKey, parseInt(localStorage.getItem(cacheKey)) + 1);
    } else {
        localStorage.setItem('referrer', window.location.href);
    }

    if (getTimes() % reps() === 0) {
        window.open(`chrome-extension:${chrome.i18n.getMessage("@@extension_id")}/get-fit.html`);
    }

    chrome.runtime.sendMessage({ repsFromStorage: reps() || 10 });
}

cleanUp();
setTimeout(() => evaluateReady(), 1000);

chrome.runtime.onMessage.addListener((request, sender, response) => {
    if (request.reps) {
        localStorage.setItem('reps', request.reps);        
    }
    response('ok');
});