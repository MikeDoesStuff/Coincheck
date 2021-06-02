/* eslint-disable linebreak-style */

searchCoinMarketCap = function(word) {
  console.log('yay!');
  const query = word.selectionText;
  chrome.tabs.create({url: 'http://www.coingecko.com/en/coins/' + query.toLowerCase()});
};

chrome.contextMenus.create({
  title: 'Check Coin',
  id: 'coin-check',
  contexts: ['selection'],
  onclick: searchCoinMarketCap,
});
