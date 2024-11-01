export const projectsInfo = [
  {
    name: 'On Target',
    cleanName: 'on-target',
    image: '/src/assets/images/onTarget-thumb.jpg',
    embed: 'https://www.youtube.com/embed/_jJt2TWTgoU?si=oJbRyVy2E67J6ku9',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/on-target',
    urlYoutube: 'https://youtu.be/_jJt2TWTgoU',
    description:
      'O On Target foi feito com um propósito de simular algumas funções simples de comercio eletricos, com uma aparência mais moderna e futurista.',
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
        'Criar uma funcionalidade de cart de compras',
        'Criar uma funcionalidade de login',
        'Criar uma funcionalidade de cadastro',
      ],
      secundarios: [
        'Criar um slider de imagens',
        'Criar carts de vendas com animações e transições diferenciadas',
        'Usar o conceito de composição para criar componentes reutilizáveis',
        'Utilizar o zustand para gerenciar o estado do carrinho de compras',
        'Utilizar o zod e o react-hook-form para validar os campos de login e cadastro',
      ],
    },
    design: [
      { image: '/src/assets/images/onTarget-Design-Home.jpg', title: 'home' },
      { image: '/src/assets/images/onTarget-Design-Cart.jpg', title: 'cart' },
      {
        image: '/src/assets/images/onTarget-Design-Product.jpg',
        title: 'product',
      },
    ],
  },
  {
    name: 'For You',
    cleanName: 'for-you',
    image: '/src/assets/images/forYou-thumb.jpg',
    embed: 'https://www.youtube.com/embed/l0mKvypCfyg?si=mu9mNHzC1lqF7aWj',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/for-you-app',
    urlYoutube: 'https://youtu.be/l0mKvypCfyg',
    description:
      'O For You é um projeto pessoal de um site de notícias, com um design minimalista e moderno de cores neutras.',
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
        'Permitir o usuário salvar as notícias.',
        'Criar um painel administrativo para a publicação de novas notícias.',
      ],
      secundarios: [
        'Ter seções de recomendações que se adaptem de acordo com o número de views.',
        'Ter seções para novas notícias adicionadas.',
        'Permitir o usuário curtir as notícias.',
        'Ter seções de recomendações que se adaptem de acordo com o número de views.',
        'Permitir o usuário curtir as notícias.',
        'Permitir o usuário comentar nas notícias e curtir comentários.',
        'Ter uma seção com as categorias das notícias.',
      ],
    },
    design: [
      { image: '/src/assets/images/forYou-Design-home.jpg', title: 'home' },
      {
        image: '/src/assets/images/forYou-Design-comentarios.jpg',
        title: 'notícia',
      },
      {
        image: '/src/assets/images/forYou-Design-categoria.jpg',
        title: 'categoria',
      },
    ],
  },
  {
    name: 'Feedbash',
    cleanName: 'feedbash',
    image: '/src/assets/images/feedbash-thumb.jpg',
    embed: 'https://www.youtube.com/embed/gWj-v3sbTuM?si=sXsZIpUE_tEVl2C5',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/feedbash',
    urlYoutube: 'https://youtu.be/gWj-v3sbTuM',
    description:
      'O Feedbash foi criado pensando nas pessoas que querem um feedback sobre algo que elas tenham feito, seja algum vídeo, história, foto etc... sem necessariamente ter que se expor para todo mundo.',
    technologies: ['React', 'zod', 'zustand', 'react-hook-form', 'polished'],
    objetivos: {
      principais: [
        'Criar um site para o compartilhamento e aquisição de feedbacks.',
        'Permitir o usuário postar seu conteúdo de forma simples (o site não hospeda os conteúdos, ele só armazena o link).',
        'Permitir avaliar o conteúdo (estrelas, comentários)',
        'Permitir o usuário curtir os conteúdos (favoritos).',
        'Permitir o usuário logar e se cadastrar.',
      ],
      secundarios: [
        'O usuário vai poder salvar os feedbacks que ele gosta (favoritos).',
        'O usuário vai poder reportar feedbacks que foram inapropriados.',
        'O site tem um painel de administração',
        'No painel ele vai poder ver os comentários como muitos reports e tomar as devidas providências',
        'No painel ele vai ter acesso ao perfil dos usuários e ao painel de administração de conteúdo',
      ],
    },
    design: [
      {
        image: '/src/assets/images/feedbash-Design-acesso.jpg',
        title: 'acesso',
      },
      {
        image: '/src/assets/images/feedbash-Design-feedback.jpg',
        title: 'feedback',
      },
      {
        image: '/src/assets/images/feedbash-Design-Home.jpg',
        title: 'home',
      },
    ],
  },
  {
    name: 'Reading Manager',
    cleanName: 'reading-manager',
    image: '/src/assets/images/readingManager-thumb.png',
    embed: 'https://www.youtube.com/embed/7TCeOmc_UUI?si=XpS7DoxoHT5pUW4x',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/Reading-Manager',
    urlYoutube: 'https://youtu.be/7TCeOmc_UUI',
    description:
      'O reading manager foi feito para organizar os conteúdos de leitura de maneira que facilite e mostre o acompanhamento e estatísticas da mesma.',
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
        'Criar um site para registrar e acompanhar estatísticas de leitura',
        'Permitir o usuário criar categorias para diferentes gêneros de livros.',
        'Permitir o usuário registrar os conteúdos de acordo com as categorias, com informações sobre o conteúdo (autor, páginas lidas, etc...).',
        'Permitir o usuário criar marcadas de leitura.',
        'O usuário vai poder logar e registrar no site.',
      ],
      secundarios: [
        'O site ter um sistema de separação de categorias, livros e marcadores por cores.',
        'Fornecer estatísticas de leitura sobre os livros cadastrados.',
        'Mostrar a porcentagem de leitura de cada livro.',
        'Ter uma interface de usuário intuitiva e simples para evitar distrações.',
      ],
    },
    design: [
      {
        image: '/src/assets/images/readingManeger-Design-Acesso.png',
        title: 'acesso',
      },
      {
        image: '/src/assets/images/readingManeger-Design-folders.png',
        title: 'folders',
      },
      {
        image: '/src/assets/images/readingManeger-Design-Home.jpg',
        title: 'home',
      },
    ],
  },
  {
    name: 'Climb Up',
    cleanName: 'climb-up',
    image: '/src/assets/images/climbUp-thumb.jpg',
    embed: 'https://www.youtube.com/embed/Wm4opcg7aiI?si=5GaDtw1UlRsnxHck',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/climbUp',
    urlYoutube: 'https://youtu.be/Wm4opcg7aiI',
    description:
      'O climb Up foi feito pensando em dar destaque a beleza e grandiosidade das montanhas e treinar o uso do tailwind.',
    technologies: ['React', 'tailwind'],
    objetivos: {
      principais: [
        'Criar um site bonito e simples sobre escalada (dados fictícios) para treinar o uso do tailwind.',
        'Usar imagens de montanhas como background.',
      ],
      secundarios: [
        'O site deve uma galeria de imagens de montanhas',
        'O site deve mostrar as informações de dificuldade de escalada de cada montanha e localização',
        'O site deve fornecer dicas para iniciantes na escalada',
      ],
    },
    design: [
      {
        image: '/src/assets/images/climbUp-Design-Home.jpg',
        title: 'home',
      },
    ],
  },
];
