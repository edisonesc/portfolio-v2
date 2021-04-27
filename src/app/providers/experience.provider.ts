import { Experience } from '../models/experience.model';

export const experiences: Experience[] = [
  {
    company_name: '8Layer Technologies Inc.',
    started_at: 'Jul 2019',
    position: 'Junior Mobile Application Developer',
    type: 'WORK',
    responsibilities: [
      'Performs API integration to front-end and mobile applications',
      'Performs component refactorization/development for reusability and significantly reduce time cost',
      'Performs deployment on mobile applications',
      'Designs User Interface for mobile',
      'Converts mockup designs to actual code',
      'Supports re-development of current projects to use updated technologies and apply standard practices',
      'Supports on the development of back-end applications',
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
