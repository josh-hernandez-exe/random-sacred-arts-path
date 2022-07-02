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

export async function loadAdjectiveArray() {
  if (adjectiveArray.length === 0) await getAdjectiveList();
}

export function getRandomAdjectiveSync() {
  if (adjectiveArray.length === 0)
    throw new Error('adjectiveArray not initialized');

  const randomIndex = Math.floor(Math.random() * adjectiveArray.length);
  return adjectiveArray[`${randomIndex}`];
}

export default async function getRandomAdjective() {
  await loadAdjectiveArray();

  return getRandomAdjectiveSync();
}
