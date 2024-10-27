export const projectsInfo = [
  {
    name: 'On Target',
    cleanName: 'on-target',
    image: '/src/assets/images/onTarget-thumb.png',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/on-target',
    urlYoutube: '...',
    description:
      'O On Target foi feito com um proposito de simular algumas funções simples de comercio eletricos, com uma aparencia mais moderna e futurista.',
    technologies: [
      'Next',
      'zod',
      'zustand',
      'react-hook-form',
      'tailwindcss',
      'shadcn',
    ],
    objetivos: {
      principais: [
        'Criar um site moderno e responsivo',
        'Criar uma funcionalide de cart de compras',
        'Criar uma funcionalidade de login',
        'Criar uma funcionalidade de cadastro',
      ],
      secundarios: [
        'Criar um slider de imagens',
        'Criar carts de vendas com animacoes e transicoes difernciadas',
        'Usar o conceito de composição para criar componentes reutilizáveis',
        'Utilizar o zustand para gerenciar o estado do carrinho de compras',
        'Utilizar o zod e o react-hook-form para validar os campos de login e cadastro',
      ],
    },
    desing: [
      { image: '../assets/images/onTarget-Design-Home.png', title: 'home' },
      {
        image: '../assets/images/onTarget-Design-Product.png',
        title: 'product',
      },
      { image: '../assets/images/onTarget-Design-Cart.png', title: 'cart' },
    ],
  },
  {
    name: 'For You',
    cleanName: 'for-you',
    image: '/src/assets/images/forYou-thumb.png',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/for-you-app',
    urlYoutube: '...',
    description:
      'O For You é um projeto pessoal de um site de noticias, com um design minimalista e moderno de cores neutras.',
    technologies: [
      'Next',
      'zod',
      'zustand',
      'react-hook-form',
      'tailwindcss',
      'shadcn',
    ],
    objetivos: {
      principais: [
        'Criar um site simples e minimalista de noticias, de uso intuitivo e interface moderna.',
        'Permitir o usuário salvar as noticias.',
        'Criar um painel administrativo para a publicação de novas noticias.',
      ],
      secundarios: [
        'Ter seções de recomendações que se adaptem de acordo com o numero de views.',
        'Ter seções para novas noticias adicionadas.',
        'Permitir o usuário curtir as noticias.',
        'Ter seções de recomendações que se adaptem de acordo com o numero de views.',
        'Permitir o usuário curtir as noticias.',
        'Permitir o usuário comentar nas noticias e curtir comentários.',
        'Ter uma seção com as categorias das notícias.',
      ],
    },
    desing: [
      { image: '../assets/images/forYou-Design-home.png', title: 'home' },
      {
        image: '../assets/images/forYou-Design-comentarios.png',
        title: 'noticia',
      },
      {
        image: '../assets/images/forYou-Design-categoria.png',
        title: 'categoria',
      },
    ],
  },
  {
    name: 'Feedbash',
    cleanName: 'feedbash',
    image: '/src/assets/images/feedbash-thumb.png',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/feedbash',
    urlYoutube: '...',
    description:
      'O Feedbash foi criado pensando nas pessoas que querem um feedback sobre algo que elas tenham feito, seja algum video, historia, foto etc... sem necessariamente ter que se expor para todo mundo.',
    technologies: ['React', 'zod', 'zustand', 'react-hook-form', 'polished'],
    objetivos: {
      principais: [
        'Criar um site para o compartilhamento e aquisição de feedbacks.',
        'Permitir o usuario postar seu conteudo de forma simples (o site não hospeda os conteudos, ele só armazena o link).',
        'Permitir avaliar o conteudo (estrelas, comentarios)',
        'Permitir o usuário curtir os conteudos (favoritos).',
        'Permitir o usuario logar e se cadastrar.',
      ],
      secundarios: [
        'O usuario vai poder salvar os feedbacks que ele gostar (favoritos).',
        'O usuario vai poder reportar feddbacks que foram inapropriados.',
        'O site tem um painel de administracao',
        'No painel ele vai poder ver os comentarios como muitos reports e tomar as devidas providencias',
        'No painel ele vai ter acesso ao perfil dos usuarios e ao painel de administracao de conteudo',
      ],
    },
    desing: [
      { image: '../assets/images/feedbash-Design-acesso.png', title: 'acesso' },
      {
        image: '../assets/images/feedbash-Design-feedback.png',
        title: 'feedback',
      },
      {
        image: '../assets/images/feedbash-Design-Home.png',
        title: 'home',
      },
    ],
  },
  {
    name: 'Reading Manager',
    cleanName: 'reading-manager',
    image: '/src/assets/images/readingManager-thumb.png',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/Reading-Manager',
    urlYoutube: '...',
    description:
      'O reading manager foi feito para organizar os conteudos de leitura de maneira que facilite e mostre o acompanhamneto e estatisticas da mesma.',
    technologies: [
      'Next',
      'zod',
      'react-hook-form',
      'tailwind',
      'rechart',
      'lucide-react',
      'shadcn',
    ],
    objetivos: {
      principais: [
        'Criar um site para registrar e acompanhar estatiscas de leitura',
        'Permitir o usuario crair categorias para diferentes generos de livros.',
        'Permitir o usuario registrar os conteudos de acordo com as categorias, com informacoes sobre o conteudo (autor, paginas lidas, etc...).',
        'Permitir o usuario criar marcadas de leitura.',
        'O usuario vai poder logar e resistrar no site.',
      ],
      secundarios: [
        'O site ter um sitema de separação de categorias, livros e marcadores por cores.',
        'Fornecer estatiscas de leitura sobre os livros cadastrados.',
        'Mostrar a porcentagem de leitura de cada livro.',
        'Ter uma interface de usario intuitiva e simples para evitar distrações.',
      ],
    },
    desing: [
      {
        image: '../assets/images/readingManeger-Design-Acesso.png',
        title: 'acesso',
      },
      {
        image: '../assets/images/readingManeger-Design-folders.png',
        title: 'folders',
      },
      {
        image: '../assets/images/readingManeger-Design-Home.png',
        title: 'home',
      },
    ],
  },
  {
    name: 'Climb Up',
    cleanName: 'climb-up',
    image: '/src/assets/images/climbUp-thumb.png',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/climbUp',
    urlYoutube: '...',
    description:
      'O climb Up foi feito pensando em dar destque a beleza e grandiode das montanhas e treinar o uso do tailwind.',
    technologies: ['React', 'tailwind'],
    objetivos: {
      principais: [
        'Criar um site bonito e simples sobre escalada (dados ficticios) par treinar o uso do tailwind.',
        'Usar images de montanhas como background.',
      ],
      secundarios: [
        'O site deve uma galeria de imagens de montanhas',
        'O site deve mostrar as informacoes de dificuldade de escalada de cada montanha e localizacao',
        'O site deve forncecer dicas para inicantes na escalada',
      ],
    },
    desing: [
      {
        image: '../assets/images/climbUp-Design-Home.png',
        title: 'home',
      },
    ],
  },
];
