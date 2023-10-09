chrome.runtime.onMessage.addListener((request, sender, response) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, request, function(response) {
          console.log(response.farewell);
        });
      });
});