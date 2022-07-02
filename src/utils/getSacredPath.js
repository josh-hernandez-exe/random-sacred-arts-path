import { loadAdjectiveArray, getRandomAdjectiveSync } from './getAdjective.js';
import { loadNounArray, getRandomNounSync } from './getNoun.js';
import { loadVerbArray, getRandomVerbSync } from './getVerb.js';

export async function loadSacredPathData() {
  await loadAdjectiveArray();
  await loadNounArray();
  await loadVerbArray();
}

export function getRandomSacredPathSync() {
  const noun = getRandomNounSync();

  if (Math.random() > 0.5) {
    const adjactive = getRandomAdjectiveSync();
    return `Path of ${adjactive} ${noun}`;
  }

  const verb = getRandomVerbSync();
  return `Path of ${verb} ${noun}`;
}

export default async function getRandomSacredPath() {
  await loadSacredPathData();

  return getRandomSacredPathSync();
}
