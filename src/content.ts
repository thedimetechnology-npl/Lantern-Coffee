// All copy lives here so the page can be re-themed for a product without
// touching layout. Sections read from this file; remove a section by deleting
// it from App.tsx.

export const brand = {
  name: 'Lantern Coffee',
  tagline: 'Small-batch coffee, roasted the day it ships',
}

export const nav = {
  links: [
    { label: 'Coffee', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Reviews', href: '#customers' },
    { label: 'Subscriptions', href: '#pricing' },
  ],
  signIn: { label: 'Sign in', href: '#' },
  cta: { label: 'Start a subscription', href: '#cta' },
}

export const hero = {
  badge: 'Now shipping across the EU, UK and US',
  title: ['We roast Tuesday,', 'you brew Wednesday'],
  highlight: 'Wednesday',
  description:
    'Single-origin lots from farms we know by name, roasted in 12 kg batches and at your door within 48 hours. Pause, skip or swap a bag whenever you like.',
  primary: { label: 'Start a subscription', href: '#cta' },
  secondary: { label: 'Shop single origins', href: '#features' },
  footnote: 'Free shipping over $30. Cancel any time, no fee.',
}

export const logos = ['Marlowe', 'Foundry', 'Halfmoon', 'Tidewater', 'Ora', 'Kindred', 'Copperline', 'Verity']

export const features = {
  eyebrow: 'Why it tastes better',
  title: 'Small batches, no shortcuts',
  description: 'Four things we refuse to rush.',
  items: [
    {
      key: 'roast',
      title: 'Roasted to order, never warehoused',
      description: 'Every batch leaves the roaster within 24 hours of hitting its curve.',
      span: 2,
    },
    {
      key: 'subscription',
      title: 'A box that bends to your week',
      description: 'Skip, pause or swap from a text. No accounts to log into.',
      span: 1,
    },
    {
      key: 'quality',
      title: 'Cupped three times',
      description: 'No lot reaches a bag until it tastes the way the farm intended.',
      span: 1,
    },
    {
      key: 'grind',
      title: 'Ground for your brewer',
      description: 'Whole bean, filter, espresso, moka or press — set per shipment.',
      span: 2,
    },
  ],
}

export const steps = {
  eyebrow: 'How it works',
  title: 'From cherry to cup in a week',
  items: [
    {
      title: 'Tell us how you brew',
      description: 'Espresso, filter or press. We match grind size and roast level to your gear.',
    },
    {
      title: 'We roast on Tuesday',
      description: 'Twelve kilogram batches, tasted and logged by the roaster the same morning.',
    },
    {
      title: 'It lands Thursday',
      description: 'At your door within 48 hours of the roast, with the farm notes printed on the bag.',
    },
  ],
}

export const showcase = {
  eyebrow: 'Your subscription, in three views',
  title: 'You stay in control of every bag',
  tabs: [
    {
      key: 'shipments',
      title: 'Shipments',
      description: 'What is arriving, when it ships, and what it will taste like.',
    },
    {
      key: 'journey',
      title: 'From cherry to cup',
      description: 'Where each lot sits on its journey from the farm to your kitchen.',
    },
    {
      key: 'roast',
      title: 'Roast log',
      description: 'The exact curve behind the bag on your counter, kept for every batch.',
    },
  ],
}

export const metrics = [
  { value: 48, suffix: 'h', label: 'From roaster to doorstep' },
  { value: 4.9, decimals: 1, label: 'Average review score' },
  { value: 12400, suffix: '+', label: 'Bags shipped last year' },
  { value: 100, suffix: '%', label: 'Lots traceable to one farm' },
]

export const testimonials = {
  eyebrow: 'Customers',
  title: 'People who cancelled their supermarket bag',
  items: [
    {
      quote:
        'I did not think coffee could taste this different. The first bag of Guji ruined every other cup I had drank that year.',
      name: 'Maya Chen',
      role: 'Subscriber since 2023',
      hue: 250,
    },
    {
      quote: 'I text to skip when I travel, and it just works. No login, no guilt, no stale beans waiting for me.',
      name: 'Daniel Okafor',
      role: 'Ritual plan, London',
      hue: 170,
    },
    {
      quote: 'The roast date is printed on the bag and it is always within two days. That alone beat my local roaster.',
      name: 'Sofia Marin',
      role: 'Home espresso nerd',
      hue: 20,
    },
    {
      quote: 'We serve it in our studio and three clients have asked which caf we buy from. It is not a caf, it is a box.',
      name: 'Jonas Weber',
      role: 'Studio owner, Rotterdam',
      hue: 300,
    },
    {
      quote: 'Ground for the moka pot, delivered on the same Thursday every month. I have not thought about coffee since.',
      name: 'Priya Natarajan',
      role: 'Household plan, Lisbon',
      hue: 120,
    },
    {
      quote: 'The brew notes on each bag turned my terrible pour-over into something worth waking up for.',
      name: 'Lucas Ferreira',
      role: 'Subscriber since 2024',
      hue: 40,
    },
  ],
}

export const pricing = {
  eyebrow: 'Subscriptions',
  title: 'One bag or four, same care',
  description: 'Free shipping on every plan. Change or cancel whenever.',
  yearlyNote: 'Save 15%',
  tiers: [
    {
      name: 'Solo',
      monthly: 19,
      yearly: 16,
      description: 'One 340 g bag a month, ground to order.',
      cta: 'Start Solo',
      features: ['One 340 g bag monthly', 'Free shipping, always', 'Skip or pause any month', 'Brew notes on every bag'],
    },
    {
      name: 'Ritual',
      monthly: 34,
      yearly: 29,
      description: 'Two bags a month — one house favourite, one experiment.',
      cta: 'Start Ritual',
      popular: true,
      features: [
        'Two 340 g bags monthly',
        'Whole bean or ground, your call',
        'Swap origins before we roast',
        'First pick of micro-lots',
        'Text us to skip or pause',
      ],
    },
    {
      name: 'Household',
      monthly: 62,
      yearly: 52,
      description: 'Four bags for busy kitchens and small offices.',
      cta: 'Start Household',
      features: [
        'Four 340 g bags monthly',
        'Split the grind across bags',
        'Free brew gear in year one',
        'Invoiced, receipt by email',
        'A fixed slot on roast day',
      ],
    },
  ],
}

export const faq = {
  title: 'Questions, answered',
  items: [
    {
      q: 'How fresh is the coffee when it arrives?',
      a: 'Roasted on Tuesday, in your hands by Thursday. Every bag carries its roast date, and nothing sits in a warehouse waiting for an order.',
    },
    {
      q: 'Can I skip a delivery or pause?',
      a: 'Any time, by text or from your account. Skip a single week while you are away, or pause indefinitely — we will not charge you while it is paused.',
    },
    {
      q: 'Whole bean or ground?',
      a: 'Both. Set a grind per shipment: espresso, filter, moka, French press or whole bean. Change it whenever your gear changes.',
    },
    {
      q: 'Where do the beans come from?',
      a: 'Twelve farms across Ethiopia, Colombia, Guatemala, Kenya and Brazil, bought directly or through two long-standing importers we visit each harvest.',
    },
    {
      q: 'What if I do not like a bag?',
      a: 'Tell us and we will swap it for the next roast, free. After that, we will tune your profile until the box is right.',
    },
    {
      q: 'Do you ship outside the country?',
      a: 'We ship across the EU, UK and US. Flat rate outside your home region, free within it on orders over $30.',
    },
  ],
}

export const cta = {
  title: 'Wake up to better coffee',
  description: 'Answer four short questions and your first bag joins Tuesday’s roast.',
  placeholder: 'you@email.com',
  button: 'Start my subscription',
  success: 'You are on the list. Check your inbox to pick your first roast.',
}

export const footer = {
  blurb: 'Small-batch coffee, roasted the day it ships.',
  columns: [
    { title: 'Coffee', links: ['Subscriptions', 'Single origins', 'Decaf', 'Gift cards', 'Wholesale'] },
    { title: 'Company', links: ['Our farms', 'The roastery', 'Careers', 'Press', 'Contact'] },
    { title: 'Learn', links: ['Brew guides', 'Roast calendar', 'Flavour glossary', 'Help centre', 'Stockists'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Shipping', 'Returns'] },
  ],
  legal: `© ${new Date().getFullYear()} Lantern Coffee Roasters`,
}