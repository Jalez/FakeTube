/** @format */

function getRandomDate() {
	const today = new Date(Date.now());
	const daysAgo = Math.round(10 * Math.random());
	let difference = today.getDate() - daysAgo;

	today.setDate(difference);
	today.setHours(60 * Math.random());
	today.setMinutes(60 * Math.random());
	return today;
}

const userComments = [
	{
		userId: 'Joe',
		comment: 'How artistic!',
		date: new Date(Date.now()),
	},
	{
		userId: 'Matt',
		comment: 'Very precise!',
		date: getRandomDate(),
	},
	{
		userId: 'Eliott',
		comment: 'We are all bots. This world is d00med',
		date: getRandomDate(),
	},
];

export default userComments;
