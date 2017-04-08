const NUMBER_OF_CARDS = 16;

export const generateCards = async () => {
  let cards = [];

  let response = await fetch('https://www.reddit.com/r/perfectloops/top.json?sort=top&t=year');
  // parsing
  let redditData = await response.json();
  //let redditData;
  let imageUrls = parseUrls(redditData);
  for (let i = 0; i < NUMBER_OF_CARDS; i += 2) {
    cards.push({
      id: i,
      rel: i + 1,
      selected: false,
      url: `${imageUrls[i/2]}`,
      found: false
    });
    cards.push({
      id: i + 1,
      rel: i,
      selected: false,
      url: `${imageUrls[i/2]}`,
      found: false
    });
  }
  return shuffle(cards);
}


export function shuffle(array) {
  let currentIndex = array.length;
  let temp, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}


function parseUrls(data) {
  let urls = [];
  if (data && data.data.children && data.data.children.length) {
    for (let item of data.data.children) {
    	const url = item.data.url;
    	if(url.substring(url.length-3, url.length) === 'gif'){
	      urls.push(url);
     	}
    }
  }
  if (urls.length >= NUMBER_OF_CARDS / 2) {
    return urls;
  } else {
    return new Array(NUMBER_OF_CARDS);
  }
}