// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kimtona', // Your GitHub org/user name. (This is the only required config)
  },
  profile: {
    avatarUrl: '/사진_김정연.jpg',
    name: 'Jeongyeon Kim',
    bio:
      '🚀 Creating models that learn, imagine, and act.\nWelcome! I’m studying Artificial Intelligence with a focus on Multimodal and Agentic AI — always happy to connect with anyone who shares a love for AI.',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Brain-Inspired Recurrent ANN Design',
          description:
            'Inter-university project designing a recurrent ANN inspired by neocortical columns; applied dopamine-modulated HLR and ES for optimization; real-time C++↔Unity system.',
          imageUrl: '/image01_jy.png',
          link: 'https://www.youtube.com/watch?v=HEQ9dRaeFKs',
        },
        {
          title: 'Text-Guided Image Manipulation with Diffusion-CLIP',
          description:
            'Explored Diffusion-CLIP; hypothesized CLIP similarity can predict a more suitable t₀ to improve output quality across targets; validated via experiments.',
          imageUrl: '/image04_jy.jpg',
          link: 'https://drive.google.com/file/d/1OzcjuK0fWEnEmoYNx7Drlgf5MXDQcMkA/view?usp=drive_link',
        },
        {
          title: 'Reproducing Speaking Style Transfer Model',
          description:
            'Reproduced a speaking style transformation paper; hands-on with speech data processing and large-scale training workflows (3-day experiments).',
          imageUrl: '/image02_jy.png',
          link: 'https://drive.google.com/file/d/1OtUZ_JBg1vAnnX7lFKRKkI9ZYn_kpwVT/view?usp=drive_link',
        },
        {
          title: 'Learnable Activation Function Design',
          description:
            'Proposed mechanisms to make activation functions learnable during training, moving beyond fixed hyperparameters; implemented and evaluated novel variants.',
          imageUrl: '/image03_jy.png',
          link: 'https://drive.google.com/file/d/192oAUV2iiSgBawZMrQgscLVnxGGBPrFv/view?usp=drive_link',
        },
        {
          title: 'Optimizing Bipedal Walker via Actor-Critic Algorithms',
          description:
            'Course project modifying BipedalWalker to find the fastest agent; baseline setup and analysis across Actor-Critic algorithms; reward design via theory-driven insights.',
          imageUrl: '/image05_jy.png',
          link: 'https://drive.google.com/file/d/1Q2O5JAJS1ZBqpcGQyF0yBwGYJrPRBChm/view?usp=sharing',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Jeongyeon Kim', description: '', imageURL: '' },
  social: {
    linkedin: 'kimjeongyeon',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '010-3439-7172',
    email: 'wjddus0203@g.skku.edu',
  },
  resume: {
    fileUrl: '/JeongYeon_Kim_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['Python', 'PyTorch', 'TensorFlow', 'MySQL', 'Git'],
  experiences: [
    {
      company: 'SKKAI, Sungkyunkwan University',
      position: 'Artificial Math Team Member',
      from: 'September 2025',
      to: 'Present',
    },
    {
      company: 'brAIn (beyond real-time Artificial Intelligence networks)',
      position: 'Cohor 1 · 2 Member',
      from: 'September 2024',
      to: 'August 2025',
    },
    {
      company: 'BCSC (Brain & Cognitive Science Community)',
      position: 'Cohort 6 Graduate; Alumni',
      from: '2024',
      to: 'Present',
    },
    {
      company: 'Sungkyunkwan University',
      position: 'AI Convergence Year Representative',
      from: '2023',
      to: 'Present',
      companyLink: 'https://www.skku.edu',
    },
    {
      company: 'Puil Foreign Language High School',
      position: 'Student Council President',
      from: '2020',
      to: '2022',
      companyLink: 'https://www.puil.hs.kr',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'B.S., Artificial Intelligence Convergence',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Puil Foreign Language High School',
      degree: 'High School Diploma',
      from: '2020',
      to: '2022',
    },
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `❤️Welcome to Jeongyeon's Profile❤️`,

  enablePWA: true,
};

export default CONFIG;

