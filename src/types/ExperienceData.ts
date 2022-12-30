export interface Experience
{
  company: string,
  title: string,
  startDate: Date,
  endDate: Date | undefined,
  location: string,
  workFromHome: "Hybrid" | "WFH" | "",
  additionalInformation: string[],
  key: string
}

export const experience: Experience[] = [];
