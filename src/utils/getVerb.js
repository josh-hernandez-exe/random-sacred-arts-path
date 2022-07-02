import axios from 'axios';

const verbUrl =
  'https://raw.githubusercontent.com/monolithpl/verb.forms.dictionary/master/csv/verbs-all.csv';

const adjectiveArray = [];

async function getVerbList() {
  const result = await axios.get(verbUrl);
  let { data } = result;
  data = data.split('\n');
  data = data.map((line) => line.split(/\s+/));
  data = data.map((line) => line[4]);
  data = data.filter((verb) => verb.substr(-3) === 'ing');

  data.sort();

  adjectiveArray.push(...data);
}

export default async function getRandomVerb() {
  if (adjectiveArray.length === 0) await getVerbList();

  const randomIndex = Math.round(Math.random() * adjectiveArray.length);
  return adjectiveArray[`${randomIndex}`];
}
