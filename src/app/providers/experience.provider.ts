import { Experience } from '../models/experience.model';

export const experiences: Experience[] = [
  {
    company_name: '8Layer Technologies Inc.',
    started_at: 'Jul 2019',
    finished_at: 'June 2021',
    position: 'Junior Mobile Application Developer',
    type: 'WORK',
    location: "Manila, PH",
    responsibilities: [
      'Developed web front-end applications for Incidents Management and Wallet Application Dashboard using Angular (Typescript)',
      'Developed mobile applications for Entertainment/Video Streaming Application and Wallet Application using Ionic with Angular (Typescript)',
      'Developed Augmented Reality based mobile application that produces 3D objects, text and videos when an image is scanned using Unity and Vuforia (C#)',
      'Performed component refactorization/development for reusability and significantly reduce time cost',
      'Sign and build mobile applications on Android Studio and XCode',
      'Provisioned and uploaded mobile application builds on Google Play, Testflight and Appstore',
      'Designed User Interface for Entertainment/Video Streaming Application, Wallet Application Application and other pages',
      'Collaborated with UI/UX designers on converting mockups and contents to actual code',
      'Contributed to upgrading applications and apply standards on best practices',
      'Supported on development of back-end applications using NestJS',
    ],
  },
  {
    company_name: 'ihatecomputer.com Inc.',
    started_at: 'July 2018',
    finished_at: 'Nov 2018',
    position: 'Intern',
    type: 'WORK',
    location: "Manila, PH",
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
