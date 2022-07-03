import seedrandom from 'seedrandom';

import { loadAdjectiveArray, getRandomAdjectiveSync } from './getAdjective.js';
import { loadNounArray, getRandomNounSync } from './getNoun.js';
import { loadVerbArray, getRandomVerbSync } from './getVerb.js';

let rng = null;

export async function loadSacredPathData() {
  await loadAdjectiveArray();
  await loadNounArray();
  await loadVerbArray();
}

export function getRandomSacredPathSync({ seed = undefined } = {}) {
  if (rng === null || seed !== undefined) {
    rng = seedrandom(seed);
  }

  const randVal = rng();
  const noun = getRandomNounSync({ seed });
  const adjactive = getRandomAdjectiveSync({ seed });
  const verb = getRandomVerbSync({ seed });

  const stringArray = ['Path', 'of', 'the'];

  if (randVal < 1 / 3) stringArray.push(verb);
  else if (randVal < 2 / 3) stringArray.push(adjactive);
  else stringArray.push(verb, adjactive);

  stringArray.push(noun);

  return stringArray.join(' ');
}

export default async function getRandomSacredPath({ seed = undefined } = {}) {
  await loadSacredPathData();

  return getRandomSacredPathSync({ seed });
}
