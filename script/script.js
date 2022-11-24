const rootElem = document.querySelector('#root');

const recipes = [
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
		title: 'Meet',
		link: 'https://exsample.com',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
		title: 'Salat',
		link: 'https://exsample.com',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
		title: 'Cake',
		link: 'https://exsample.com',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
		title: 'Limonade',
		link: 'https://exsample.com',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
		title: 'Raznoje',
		link: 'https://exsample.com',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
		title: 'MeetDeserty',
		link: 'https://exsample.com',
	},
];

recipes.forEach(({ img, title, link }) => {
	const container = document.createElement('div');
	const img_elem = document.createElement('img');
	/* const title_p = document.createElement('p'); */
	const link_a = document.createElement('a');
	container.append(img_elem, link_a);
	rootElem.append(container);

	container.classList.add('card_recipe');
	img_elem.classList.add('img_elem');

	img_elem.src = img;
	/* title_p.innerText = title; */
	link_a.innerText = title;
	link_a.href = link;
	link_a.target = '_blank';
});
