import { sortData } from './sortHelper';

const mockData = [
  {
    id: '80020578-C',
    name: 'Jean Paul Gaultier Scandal Eau de Parfum',
    slug:
      'parfum/jean-paul-gaultier/scandal/jean-paul-gaultier-scandal-eau-de-parfum.html',
    brand: 'Jean Paul Gaultier',
    type: 'Eau de Parfum',
    image:
      'https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-scandal-eau-de-parfum-80-ml-8435415006408.jpg',
    price: 3895,
    size: '30ML',
    rating: 96
  },
  {
    id: '30103514',
    name: 'Paco Rabanne Lady Million Eau de Parfum',
    slug:
      'parfum/paco-rabanne/lady-million/paco-rabanne-lady-million-eau-de-parfum.html',
    brand: 'Paco Rabanne',
    type: 'Eau de Parfum',
    image:
      'https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-lady-million-eau-de-parfum-80-ml-3349668508587.jpg',
    price: 3695,
    size: '30ML',
    rating: 98
  },
  {
    id: '30103318',
    name: 'Jean Paul Gaultier Le Male Eau de Toilette',
    slug:
      'parfum/jean-paul-gaultier/le-male/jean-paul-gaultier-le-male-eau-de-toilette.html',
    brand: 'Jean Paul Gaultier',
    type: 'Eau de Toilette',
    image:
      'https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-le-male-eau-de-toilette-125-ml-3423470317534.jpg',
    price: 3395,
    size: '40ML',
    rating: 99
  }
];

test('Sort functionality sorting by rating', () => {
  expect(sortData('rating', mockData)).toEqual([
    {
      id: '30103318',
      name: 'Jean Paul Gaultier Le Male Eau de Toilette',
      slug:
          'parfum/jean-paul-gaultier/le-male/jean-paul-gaultier-le-male-eau-de-toilette.html',
      brand: 'Jean Paul Gaultier',
      type: 'Eau de Toilette',
      image:
          'https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-le-male-eau-de-toilette-125-ml-3423470317534.jpg',
      price: 3395,
      size: '40ML',
      rating: 99
    },
    {
      id: '30103514',
      name: 'Paco Rabanne Lady Million Eau de Parfum',
      slug:
        'parfum/paco-rabanne/lady-million/paco-rabanne-lady-million-eau-de-parfum.html',
      brand: 'Paco Rabanne',
      type: 'Eau de Parfum',
      image:
        'https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-lady-million-eau-de-parfum-80-ml-3349668508587.jpg',
      price: 3695,
      size: '30ML',
      rating: 98
    },
    {
      id: '80020578-C',
      name: 'Jean Paul Gaultier Scandal Eau de Parfum',
      slug:
        'parfum/jean-paul-gaultier/scandal/jean-paul-gaultier-scandal-eau-de-parfum.html',
      brand: 'Jean Paul Gaultier',
      type: 'Eau de Parfum',
      image:
        'https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-scandal-eau-de-parfum-80-ml-8435415006408.jpg',
      price: 3895,
      size: '30ML',
      rating: 96
    }
  ]);
});
