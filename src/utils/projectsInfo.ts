import { assetsItems } from '../assets/assets';

export const projectsInfo = [
  {
    name: 'On Target',
    cleanName: 'on-target',
    image: assetsItems.onTargetThumb,
    embed: 'https://www.youtube.com/embed/_jJt2TWTgoU?si=oJbRyVy2E67J6ku9',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/on-target',
    urlYoutube: 'https://youtu.be/_jJt2TWTgoU',
    description:
      'O On Target foi feito com o propósito de simular algumas funções simples de comércio eletrônico, com uma aparência moderna e futurista.',
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
        'Criar um site moderno e responsivo.',
        'Criar uma funcionalidade de carrinho de compras.',
        'Criar uma funcionalidade de login.',
        'Criar uma funcionalidade de cadastro.',
      ],
      secundarios: [
        'Criar um slider de imagens.',
        'Criar cards de vendas com animações e transições diferenciadas.',
        'Usar o conceito de composição para criar componentes reutilizáveis.',
        'Utilizar o zustand para gerenciar o estado do carrinho de compras.',
        'Utilizar o zod e o react-hook-form para validar os campos de login e cadastro.',
      ],
    },
    design: [
      { image: assetsItems.onTargetDesignHome, title: 'home' },
      { image: assetsItems.onTargetDesignCart, title: 'cart' },
      {
        image: assetsItems.onTargetDesignProduct,
        title: 'product',
      },
    ],
  },
  {
    name: 'For You',
    cleanName: 'for-you',
    image: assetsItems.forYouThumb,
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
        'Criar um site simples e minimalista de notícias, de uso intuitivo e interface moderna.',
        'Permitir que o usuário salve as notícias.',
        'Criar um painel administrativo para a publicação de novas notícias.',
      ],
      secundarios: [
        'Ter seções de recomendações que se adaptem de acordo com o número de visualizações.',
        'Ter seções para novas notícias adicionadas.',
        'Permitir que o usuário curta as notícias.',
        'Permitir que o usuário comente nas notícias e curta comentários.',
        'Ter uma seção com as categorias das notícias.',
      ],
    },
    design: [
      { image: assetsItems.forYouDesignHome, title: 'home' },
      {
        image: assetsItems.forYouDesignComentarios,
        title: 'notícia',
      },
      {
        image: assetsItems.forYouDesignCategoria,
        title: 'categoria',
      },
    ],
  },
  {
    name: 'Feedbash',
    cleanName: 'feedbash',
    image: assetsItems.feedbashThumb,
    embed: 'https://www.youtube.com/embed/gWj-v3sbTuM?si=sXsZIpUE_tEVl2C5',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/feedbash',
    urlYoutube: 'https://youtu.be/gWj-v3sbTuM',
    description:
      'O Feedbash foi criado para pessoas que querem feedback sobre algo que fizeram, seja um vídeo, história, foto, etc., sem necessariamente se expor para todos.',
    technologies: ['React', 'zod', 'zustand', 'react-hook-form', 'polished'],
    objetivos: {
      principais: [
        'Criar um site para o compartilhamento e obtenção de feedbacks.',
        'Permitir que o usuário poste seu conteúdo de forma simples (o site não hospeda o conteúdo apenas armazena o link).',
        'Permitir avaliar o conteúdo (estrelas, comentários).',
        'Permitir que o usuário curta os conteúdos (favoritos).',
        'Permitir que o usuário faça login e cadastro.',
      ],
      secundarios: [
        'O usuário poderá salvar os feedbacks que gosta (favoritos).',
        'O usuário poderá reportar feedbacks inapropriados.',
        'O site tem um painel de administração.',
        'No painel, ele poderá ver comentários com muitos reports e tomar as devidas providências.',
        'No painel, ele terá acesso ao perfil dos usuários e ao painel de administração de conteúdo.',
      ],
    },
    design: [
      {
        image: assetsItems.feedbashDesignAcesso,
        title: 'acesso',
      },
      {
        image: assetsItems.feedbashDesignfeedback,
        title: 'feedback',
      },
      {
        image: assetsItems.feedbashDesignHome,
        title: 'home',
      },
    ],
  },
  {
    name: 'Reading Manager',
    cleanName: 'reading-manager',
    image: assetsItems.readingManagerThumb,
    embed: 'https://www.youtube.com/embed/7TCeOmc_UUI?si=XpS7DoxoHT5pUW4x',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/Reading-Manager',
    urlYoutube: 'https://youtu.be/7TCeOmc_UUI',
    description:
      'O Reading Manager foi feito para organizar conteúdos de leitura, facilitando o acompanhamento e fornecendo estatísticas.',
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
        'Criar um site para registrar e acompanhar estatísticas de leitura.',
        'Permitir que o usuário crie categorias para diferentes gêneros de livros.',
        'Permitir que o usuário registre conteúdos de acordo com as categorias, com informações sobre o conteúdo (autor, páginas lidas, etc.).',
        'Permitir que o usuário crie marcadores de leitura.',
        'Permitir que o usuário faça login e cadastro.',
      ],
      secundarios: [
        'O site terá um sistema de separação de categorias, livros e marcadores por cores.',
        'Fornecer estatísticas de leitura dos livros cadastrados.',
        'Mostrar a porcentagem de leitura de cada livro.',
        'Ter uma interface de usuário intuitiva e simples para evitar distrações.',
      ],
    },
    design: [
      {
        image: assetsItems.readingManagerDesignAcesso,
        title: 'acesso',
      },
      {
        image: assetsItems.readingManagerDesignFolders,
        title: 'folders',
      },
      {
        image: assetsItems.readingManagerDesignHome,
        title: 'home',
      },
    ],
  },
  {
    name: 'Climb Up',
    cleanName: 'climb-up',
    image: assetsItems.climbUpThumb,
    embed: 'https://www.youtube.com/embed/Wm4opcg7aiI?si=5GaDtw1UlRsnxHck',
    urlGithub: 'https://github.com/MateusBorgesGuimaraes/climbUp',
    urlYoutube: 'https://youtu.be/Wm4opcg7aiI',
    description:
      'O Climb Up foi feito para destacar a beleza e grandiosidade das montanhas e praticar o uso do Tailwind CSS.',
    technologies: ['React', 'tailwind'],
    objetivos: {
      principais: [
        'Criar um site bonito e simples sobre escalada (dados fictícios) para treinar o uso do Tailwind CSS.',
        'Usar imagens de montanhas como background.',
      ],
      secundarios: [
        'O site deve ter uma galeria de imagens de montanhas.',
        'O site deve mostrar informações sobre a dificuldade de escalada e localização de cada montanha.',
        'O site deve fornecer dicas para iniciantes na escalada.',
      ],
    },
    design: [
      {
        image: assetsItems.climbUpDesignHome,
        title: 'home',
      },
    ],
  },
];
