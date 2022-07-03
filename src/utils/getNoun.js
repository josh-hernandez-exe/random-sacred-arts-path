import axios from 'axios';
import seedrandom from 'seedrandom';

const nounUrl =
  'https://raw.githubusercontent.com/janester/mad_libs/master/List%20of%20Nouns.txt';

const nounArray = [];

let rng = null;

async function getNounList() {
  const result = await axios.get(nounUrl);
  let { data } = result;
  data = data.split(/\s+/);

  data.sort();

  nounArray.push(...data);
}

export async function loadNounArray() {
  if (nounArray.length === 0) await getNounList();
}

export function getRandomNounSync({ seed = undefined } = {}) {
  if (nounArray.length === 0) throw new Error('nounArray not initialized');

  if (rng === null || seed !== undefined) {
    rng = seedrandom(seed);
  }

  const randomIndex = Math.floor(rng() * nounArray.length);
  return nounArray[`${randomIndex}`];
}

export default async function getRandomNoun() {
  await loadNounArray();

  return getRandomNounSync();
}
