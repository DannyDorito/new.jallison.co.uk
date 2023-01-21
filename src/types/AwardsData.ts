export interface Awards
{
  name: string,
  additionalInformation: string,
  key: string
}

export const awards: Awards[] = [
  {
    name: "Microsoft Certified: Azure Developer Associate",
    additionalInformation: "Ability to develop many aspects of Azure, such as compute solutions, Azure storage & security. Also monitor, troubleshoot, and optimise Azure solutions",
    key: "az204"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    additionalInformation: "Understanding of cloud computing concepts, models and services in Microsoft Azure. Knowledge of security, privacy, compliance, and trust when it comes to cloud computing.",
    key: "az900"
  },
  {
    name: "The Ethical IT Professional",
    additionalInformation: "Understanding of ethical practices relevant to working in the IT industry, corporate social responsibility, and ethical safeguarding",
    key: "ethical-it"
  },
  {
    name: "Android Development",
    additionalInformation: "Advanced Android (Java) development, activity lifecycles and UI design.",
    key: "android"
  }
];
