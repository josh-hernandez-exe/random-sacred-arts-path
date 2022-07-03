import axios from 'axios';
import seedrandom from 'seedrandom';

const verbUrl =
  'https://raw.githubusercontent.com/monolithpl/verb.forms.dictionary/master/csv/verbs-all.csv';

const verbArray = [];

let rng = null;

async function getVerbList() {
  const result = await axios.get(verbUrl);
  let { data } = result;
  data = data.split('\n');
  data = data.map((line) => line.split(/\s+/));
  data = data.map((line) => line[4]);
  data = data.filter((verb) => verb.substr(-3) === 'ing');

  data.sort();

  verbArray.push(...data);
}

export async function loadVerbArray() {
  if (verbArray.length === 0) await getVerbList();
}

export function getRandomVerbSync({ seed = undefined } = {}) {
  if (verbArray.length === 0) throw new Error('verbArray not initialized');

  if (rng === null || seed !== undefined) {
    rng = seedrandom(seed);
  }

  const randomIndex = Math.floor(rng() * verbArray.length);
  return verbArray[`${randomIndex}`];
}

export default async function getRandomVerb() {
  await loadVerbArray();

  return getRandomVerbSync();
}
