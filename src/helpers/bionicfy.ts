export const bionicfy = (str: string): string => {
	const words = str.split(' ');
	const bionicWords = words.map((word) => formatWord(word));

	const bionicText = bionicWords.join(' ');
	return bionicText;
};

const formatWord = (word: string): string => {
	const args = [
		'ing',
		'ate',
		'ed',
		'ation',
		'sion',
		'ion',
		'ly',
		'age',
		'tial',
		'ous',
		'ive',
		'ize',
		'ish',
		'ify',
		'able',
		'ible',
		'less',
		'ness',
		'ment',
		'ence',
		'ance',
		'ant'
	];

	const regex = new RegExp(`(${args.join('|')})$`, 'i');
	const match = word.match(regex);
	if (match) {
		console.log(match);
		return spanny(word.slice(0, match.index)) + match[0];
	}

	if (word.length <= 3) {
		// only wrap first character in span tag if word is 3 characters or less
		return spanny(word[0]) + word.slice(1);
	}

	// wrap with span only first half of word if word is longer than 5 characters
	const len = Math.floor(word.length / 2);
	return spanny(word.slice(0, len)) + word.slice(len);
};

const spanny = (str: string): string => {
	return `<span class="bold">${str}</span>`;
};
