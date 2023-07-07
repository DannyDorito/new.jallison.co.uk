export interface Experience {
  company: string;
  title: string;
  startDate: Date;
  endDate: Date | undefined;
  location: string;
  workFromHome: 'Hybrid' | 'WFH' | '';
  additionalInformation: string[];
  key: string;
}

export const experience: Experience[] = [
  {
    company: 'Trailight Ltd.',
    title: 'Software Developer',
    startDate: new Date(2021, 5),
    endDate: undefined,
    location: 'York',
    workFromHome: 'Hybrid',
    additionalInformation: [
      "Developing rich features and maintaining the UK's leading financial regulatory software. Our Scrum team predominantly use;",
      'ASP.NET, Entity Framework, Bootstrap, Azure, React, Microservices, SCSS, Playwright, SpecFlow, MySQL.',
    ],
    key: 'trailight',
  },
  {
    company: 'Fidelity Systems Ltd.',
    title: 'Junior Developer',
    startDate: new Date(2020, 12),
    endDate: new Date(2021, 5),
    location: 'Kingston Upon Hull',
    workFromHome: 'WFH',
    additionalInformation: [
      'Working closely with the development team to migrate existing applications to the web to provide first class EPoS systems.',
      'Tech stack includes; ASP.NET MVC 4, Entity Framework, JQuery, AutoMapper, Bootstrap, IgniteUI, JavaScript, SCSS, AJAX, MySQL.',
    ],
    key: 'fidelity',
  },
  {
    company: 'Hull and Humber Chamber of Commerce',
    title: 'Software Developer',
    startDate: new Date(2019, 9),
    endDate: new Date(2020, 5),
    location: 'Kingston Upon Hull',
    workFromHome: 'Hybrid',
    additionalInformation: [
      'Created a full stack environment for a loan management system, technologies used:',
      'WPF, C# Web API, MySQL, Windows Server Administration, IIS',
      'Experienced the full agile development process including daily stand-ups, sprint planning and UAT meetings and demonstrations.',
    ],
    key: 'chamber-of-commerce',
  },
  {
    company: 'Giacom',
    title: 'Full Stack Software Developer Intern',
    startDate: new Date(2018, 6),
    endDate: new Date(2018, 9),
    location: 'Kingston Upon Hull',
    workFromHome: '',
    additionalInformation: [
      'The developer of an internal finance website & Web API using modern technologies such as:',
      'Angular 5, Angular Material, C# Web API, MySQL, LDAP & AD group verification, IIS, Azure DevOps Deployments.',
    ],
    key: 'giacom-intern',
  },
  {
    company: 'Giacom',
    title: 'Software Tester (Work Experience)',
    startDate: new Date(2017, 8),
    endDate: new Date(2017, 9),
    location: 'Kingston Upon Hull',
    workFromHome: '',
    additionalInformation: [
      'Testing software from different sprint stages,',
      'Logging bugs and defects from regression and UAT tests including detailed reproduction steps, test automation with Selenium and Protractor',
    ],
    key: 'giacom-work-experience',
  },
];
