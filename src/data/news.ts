export type NewsItem = {
	id: string;
	title: string;
	summary: string;
	date: string;
	href?: string;
};

export const NEWS: NewsItem[] = [
	{
		id: "mit-ai-edu-hack-the-climate",
		title: "MIT AI & EDU Summit — “Hack the Climate” Winners",
		summary: "APP‑IN Club teams earned top awards at the MIT AI & EDU Summit Hack the Climate.",
		date: "2024-07-26",
	},
	{
		id: "congressional-app-challenge",
		title: "Recognitions at the Congressional App Challenge",
		summary: "Members and officers won and were invited to Washington DC #HouseOfCode.",
		date: "2024-04-25",
	},
	{
		id: "global-ai-hackathon",
		title: "Global AI Hackathon — Youth Award",
		summary: "APP‑IN Club members won the youth team award and honorable mention.",
		date: "2024-05-13",
	},
];


