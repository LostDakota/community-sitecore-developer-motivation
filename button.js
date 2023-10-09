var button = document.getElementById('setTimes');
var input = document.getElementById('how-many');

button.addEventListener('click', function() {
    var count = document.getElementById('how-many').value;
    localStorage.setItem('reps', count);
    chrome.runtime.sendMessage({reps: count});
    window.close();
});

chrome.runtime.onMessage.addListener((request, sender, response) => {    
    if(request.repsFromStorage != undefined) {
        input.value = request.repsFromStorage;        
    }
    response('ok');
});

setTimeout(() => input.value = localStorage.getItem('reps'), 300);