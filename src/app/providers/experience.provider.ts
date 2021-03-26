import { Experience } from '../models/experience.model';

export const experiences: Experience[] = [
  {
    company_name: '8Layer Technologies Inc.',
    started_at: 'Jul 2019',
    position: 'Junior Mobile Application Developer',
    type: 'WORK',
    responsibilities: [
      'Perform development, testing, optimization for reusability, and support on mobile/web applications.',
      'Perform deployment on mobile applications.',
      'Developed Unity based mobile application that uses AR to visualize 3D content e.g. Video, Text.',
      'Designed UI for mobile',
      'Converted UI mockup design to actual code',
      'Supported on the development of backend applications',
    ],
  },
  {
    company_name: 'ihatecomputer.com Inc.',
    started_at: 'July 2018',
    finished_at: 'Nov 2018',
    position: 'Intern',
    type: 'WORK',
    responsibilities: [
      'Developed web application modules',
      'Developed interactive reports',
    ],
  },
  {
    company_name: 'AMA Computer University - Quezon City Philippines',
    started_at: 'March 2018',
    finished_at: 'May 2018',
    position: 'Student',
    type: 'EDUCATION',
    responsibilities: [
      'Bachelor of Science in Computer Science',
      'Member, Microsoft Student Community',
    ],
  },
  {
    company_name: 'AMA Computer University - Quezon City Philippines',
    started_at: 'March 2015',
    finished_at: 'March 2018',
    position: 'Student',
    type: 'EDUCATION',
    responsibilities: ['Secondary'],
  },
];
