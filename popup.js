document.addEventListener('DOMContentLoaded', function() {
    const clearCacheButton = document.getElementById('clearCacheButton');
    const refreshButton = document.getElementById('refreshButton');
  
    clearCacheButton.addEventListener('click', function() {
      chrome.browsingData.removeCache({}, function() {
        alert('Le cache du navigateur a été vidé avec succès !');
      });
    });
  
    refreshButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });