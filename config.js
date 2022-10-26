// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Rödhake',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,
  title: 'Homepage',

	// Greetings
	greetingMorning: 'Guten morgen!',
	greetingAfternoon: 'Guten tag,',
	greetingEvening: 'Guten abend,',
	greetingNight: 'Geh ins Bett!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'
	
	// Theme
	theme: 'latte-frappe',

	// Weather
	weatherKey: '5a897f4102327df4bdc7ace580a776a0', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '51.331699',
	defaultLongitude: '6.559350',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

  	// Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
  	changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/feed/subscriptions',
		},
		{
			id: '2',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'Facebook',
			icon: 'facebook',
			link: 'https://www.facebook.com/messages/t',
		},
		{
			id: '4',
			name: 'Kemono',
			icon: 'gitlab',
			link: 'https://kemono.party/favorites',
		},
		{
			id: '5',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '6',
			name: 'Floraverse',
			icon: 'flower',
			link: 'https://floraverse.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Comfi Beats',
					link: 'https://www.youtube.com/c/comfibeats',
				},
				{
					name: 'Practice Run',
					link: 'https://youtu.be/72kxJOKbQgw',
				},
				{
					name: 'Itchy Itchy',
					link: 'https://youtu.be/JrSMbOKw7Cg',
				},
				{
					name: 'Experimental 38',
					link: 'https://youtu.be/dGGkNbCb33U',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'OneDrive',
					link: 'https://magud-my.sharepoint.com/personal/innwy_magud_onmicrosoft_com/_layouts/15/onedrive.aspx',
				},
				{
					name: 'ProtonMail',
					link: 'https://mail.proton.me/',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Repos',
					link: 'https://github.com/RDkhoa',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/RDkhoa',
				},
			],
		},
	],
};
