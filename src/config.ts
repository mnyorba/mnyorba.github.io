/** Main menu items */
export const navItems: { label: string; href: string; parent: Array; }[] = [
	{
		label: 'Головна',
		href: '/',
		parent: []
	},
	{
		label: 'Записи',
		href: '/works/',
		parent: [
			{
				label: 'Роботи',
				href: '/works/',
				parent: []
			},
			{
				label: 'Публікації',
				href: '/blog/',
				parent: []
			},
		]
	},
	{
		label: 'Роботи',
		href: '/works/',
		parent: []
	},
	{
		label: 'Публікації',
		href: '/blog/',
		parent: []
	},
	{
		label: 'Про мене',
		href: '/about/',
		parent: []
	},
];

export const headerSettings = {
	websiteName: 'M. Nyorba: Personal Site',
	separator: ' | ',
	description: 'The personal site of Mikhajlo Nyorba',
};
export const footerSettings = {
	year: 2022,
	separator: ' | ',
};
