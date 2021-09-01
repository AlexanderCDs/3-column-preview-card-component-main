/** 
* @author: Alexander Chi
* @description:
* @date: 01/Septiembre/2021
**/  
import sedans from '../assets/images/icon-sedans.svg';
import suvs from '../assets/images/icon-suvs.svg';
import luxury from '../assets/images/icon-luxury.svg';

export const cards = [
  {
    color:'orange',
    icon: sedans,
    title: 'Sedans',
    description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    butons: [
      {text: 'Learn More'}
    ]
  },
  {
    color:'cyan',
    icon: suvs,
    title: 'Suvs',
    description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    butons: [
      {text: 'Learn More'}
    ]
  },
  {
    color:'dark__cyan',
    icon: luxury,
    title: 'Luxury',
    description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    butons: [
      {text: 'Learn More'}
    ]
  }
];

export default cards;
