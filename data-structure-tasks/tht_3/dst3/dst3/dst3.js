const coderA = new Set(['JS', 'PHP', 'C#', 'Python']);
const coderB = new Set(['JS', 'Java', 'C++', 'Python']);
const coderC = new Set(['JS', 'Java', 'Perl', 'Ruby']);

const coders = [coderA, coderB, coderC];

function union(coders) {
  const unionSet = new Set();

  coders.forEach((coder) => {
    coder.forEach((codeLanguage) => {
      unionSet.add(codeLanguage);
    });
  });

  return unionSet;
}

function haveCodeSkill(coders, language) {
  const allLanguages = union(coders);

  return allLanguages.has(language);
}

console.log('Someone has skill Go :', haveCodeSkill(coders, 'Go'));

export { union, haveCodeSkill };
