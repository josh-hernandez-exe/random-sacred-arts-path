import axios from 'axios';

const adjectiveUrl =
  'https://raw.githubusercontent.com/taikuukaits/SimpleWordlists/master/Wordlist-Adjectives-All.txt';

const adjectiveArray = [];

async function getAdjectiveList() {
  const result = await axios.get(adjectiveUrl);
  let { data } = result;
  data = data.split('\n');

  data.sort();

  adjectiveArray.push(...data);
}

export default async function getRandomAdjective() {
  if (adjectiveArray.length === 0) await getAdjectiveList();

  const randomIndex = Math.round(Math.random() * adjectiveArray.length);
  return adjectiveArray[`${randomIndex}`];
}
