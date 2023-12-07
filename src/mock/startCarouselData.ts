export const startCarouselData = [
  {
    id: 1,
    image_url: '/mock/images/harryPotterBanner.png',
    call: 'A magia dos livros da maior saga do mundo bruxo.',
    subtext:
      'Embarque na jornada épica cheia de magia, amizade e aventura. Siga o jovem bruxo em sua luta contra o mal e descubra o verdadeiro significado da amizade e da coragem. Junte-se a Harry, Ron e Hermione em uma jornada inesquecível através do mundo mágico de Hogwarts.',
    book: '1',
    book_details: {
      isbn: '1',
      title: 'Harry Potter e o Prisioneiro De Azkaban',
      publisher: 'Rocco',
      country: 'Somalia',
      language: 'Gusikowski',
      description:
        'Neste terceiro livro da saga, Harry descobre que um perigoso assassino, Sirius Black, escapou da prisão de Azkaban e está procurando por ele.',
      price: 36.6,
      promotional_price: 22.5,
      category: ['Terror'],
      author: ['Stephen King'],
      stock: 932,
      sales: 9,
      image: '/mock/images/harryPotterBook.png',
      year: 586,
      pages: 101,
    },
  },
  {
    id: 2,
    image_url: 'https://i0.wp.com/resenhandosonhos.com/wp-content/uploads/2017/04/acabana05-700x336.jpeg?resize=660%2C317',
    call: 'Na cabana dos mistérios, a dor encontra a cura e a fé tece o impossível.',
    subtext:
      //eslint-disable-next-line
      "Em 'A Cabana', uma envolvente obra literária escrita por William P. Young, somos conduzidos a uma jornada emocional e espiritual profunda. Nesse livro cativante, acompanhamos a jornada de um homem chamado Mackenzie Allen Phillips, que após enfrentar uma terrível tragédia pessoal, se vê mergulhado em um oceano de dor, questionamentos e dúvidas sobre sua fé. ",
    book: '1',

    book_details: {
      isbn: '2',
      title: 'A cabana',
      description:
        'Durante uma viagem de fim de semana, a filha mais nova de Mack Allen Phillips é raptada e evidências de que ela foi brutalmente assassinada são encontradas numa velha cabana.',
      price: 54.9,
      promotional_price: 34.99,
      image: 'https://m.media-amazon.com/images/I/51ND1ZL6dfL._SX346_BO1,204,203,200_.jpg',
      category: ['Terror'],
      author: ['Stephen King'],
      stock: 932,
      sales: 9,
      year: 586,
      pages: 101,
      publisher: 'Rocco',
      country: 'Somalia',
      language: 'Gusikowski',
    },
  },
]

export type IStartCarouselData = typeof startCarouselData

export type IStartCarouselBookData = (typeof startCarouselData)[0]['book']
