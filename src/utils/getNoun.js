import axios from 'axios';

const nounUrl =
  'https://raw.githubusercontent.com/taikuukaits/SimpleWordlists/master/Wordlist-Adjectives-All.txt';

const nounArray = [];

async function getNounList() {
  const result = await axios.get(nounUrl);
  let { data } = result;
  data = data.split('\n');

  data.sort();

  nounArray.push(...data);
}

export default async function getRandomNoun() {
  if (nounArray.length === 0) await getNounList();

  const randomIndex = Math.round(Math.random() * nounArray.length);
  return nounArray[`${randomIndex}`];
}
