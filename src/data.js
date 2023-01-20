import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'fab fa-twitter',
  },

  {
    id: 2,
    href: 'https://www.facebook.com',
    target: '_blank',
    className: 'fab fa-facebook',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    target: '_blank',
    className: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    icon: 'service-icon',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: 2,
    icon: 'service-icon',
    title: 'endless hiking',
    text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    icon: 'service-icon',
    title: 'amazing comfort',
    text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export const featuredTours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    description: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque',
    days: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    description: 'best of java',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque',
    location: 'indonesia',
    days: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    description: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    location: 'hong kong',
    days: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    description: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    location: 'kenya',
    days: '20 days',
    price: 'from $3300',
  },
]
