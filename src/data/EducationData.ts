export interface Education {
  institution: string;
  qualification: string;
  result: string;
  startDate: Date;
  endDate: Date;
  location: string;
  additionalInformation: string;
  key: string;
}

export const education: Education[] = [
  {
    institution: 'The University of Hull',
    qualification: 'MEng (Hons) Computer Science (Software Engineering)',
    result: 'First Class Honours',
    startDate: new Date(2016, 9),
    endDate: new Date(2020, 8),
    location: 'Kingston Upon Hull',
    additionalInformation: `Modules include C#, C++, C & Java Programming, Database Design, Networking, Maintaining Large Software Systems and Component-Based Architecture.`,
    key: 'hull-uni',
  },
  {
    institution: 'Sirius College',
    qualification: 'BTEC Level 3 Extended Diploma in IT (Software Development)',
    result: 'D*D*D in 18 modules',
    startDate: new Date(2014, 9),
    endDate: new Date(2016, 6),
    location: 'Kingston Upon Hull',
    additionalInformation: `Modules include Object-Oriented & Event-Driven Paradigms in C#, Web Production, Project Management, Database Design, Systems Architecture.`,
    key: 'sirius-college-it',
  },
  {
    institution: 'Sirius College',
    qualification: 'BTEC Level 3 Subsidiary Diploma in Art & Design',
    result: 'D* in 6 modules',
    startDate: new Date(2014, 9),
    endDate: new Date(2016, 6),
    location: 'Kingston Upon Hull',
    additionalInformation: `Modules include Material Techniques and Processes (e.g. Photography, Photo Editing, Graphic Design) & Communication Through Art and Design.`,
    key: 'sirius-college-art',
  },
];
