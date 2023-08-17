export interface Awards {
  name: string;
  additionalInformation: string;
  key: string;
}

export const awards: Awards[] = [
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    additionalInformation:
      'Ability to develop many aspects of Azure, such as compute solutions, Azure storage & security. Also monitor, troubleshoot, and optimise Azure solutions',
    key: 'az204',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    additionalInformation:
      'Understanding of cloud computing concepts, models and services in Microsoft Azure. Knowledge of security, privacy, compliance, and trust when it comes to cloud computing.',
    key: 'az900',
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    additionalInformation:
      'Demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.',
    key: 'dp900',
  },
  {
    name: 'Foundations of Git - Certification Course',
    additionalInformation: 'Understand the fundamentals of Git version control.',
    key: 'git',
  },
  {
    name: 'The Ethical IT Professional',
    additionalInformation:
      'Understanding of ethical practices relevant to working in the IT industry, corporate social responsibility, and ethical safeguarding.',
    key: 'ethical-it',
  },
  {
    name: 'Getting Started with SpecFlow in Visual Studio',
    additionalInformation:
      'Understanding of Behaviour Driven Development, setup and using SpecFlow to automate tests.',
    key: 'specflow',
  },
];
