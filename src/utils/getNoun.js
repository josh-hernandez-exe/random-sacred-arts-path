import axios from 'axios';

const nounUrl =
  'https://raw.githubusercontent.com/taikuukaits/SimpleWordlists/master/Wordlist-Nouns-All.txt';

const nounArray = [];

async function getNounList() {
  const result = await axios.get(nounUrl);
  let { data } = result;
  data = data.split('\n');

  data.sort();

  nounArray.push(...data);
}

export async function loadNounArray() {
  if (nounArray.length === 0) await getNounList();
}

export function getRandomNounSync() {
  if (nounArray.length === 0) throw new Error('nounArray not initialized');

  const randomIndex = Math.floor(Math.random() * nounArray.length);
  return nounArray[`${randomIndex}`];
}

export default async function getRandomNoun() {
  await loadNounArray();

  return getRandomNounSync();
}
