import axios from 'axios';
import seedrandom from 'seedrandom';

const adjectiveUrl =
  'https://raw.githubusercontent.com/taikuukaits/SimpleWordlists/master/Wordlist-Adjectives-All.txt';

const adjectiveArray = [];

let rng = null;
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

export function getRandomAdjectiveSync({ seed = undefined } = {}) {
  if (adjectiveArray.length === 0)
    throw new Error('adjectiveArray not initialized');

  if (rng === null || seed !== undefined) {
    rng = seedrandom(seed);
  }

  const randomIndex = Math.floor(rng() * adjectiveArray.length);
  return adjectiveArray[`${randomIndex}`];
}

export default async function getRandomAdjective() {
  await loadAdjectiveArray();

  return getRandomAdjectiveSync();
}
