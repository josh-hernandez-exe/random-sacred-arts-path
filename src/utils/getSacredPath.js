import getRandomAdjective from './getAdjective.js';
import getRandomNoun from './getNoun.js';
import getRandomVerb from './getVerb.js';

export default async function getRandomSacredPath() {
  const noun = await getRandomNoun();

  if (Math.random() > 0.5) {
    const adjactive = await getRandomAdjective();
    return `Path of ${adjactive} ${noun}`;
  }

  const verb = await getRandomVerb();
  return `Path of ${verb} ${noun}`;
}
