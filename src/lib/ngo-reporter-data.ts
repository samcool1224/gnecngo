import { NgoReporterIssue } from "@/lib/ngo-reporter-api";

export interface NgoReporterDisplayIssue {
  id: string;
  volumeNumber: number;
  title: string;
  date: string;
  description: string;
  topics: string[];
  url: string;
  isDynamic?: boolean;
}

export const hardcodedNgoReporterIssues: NgoReporterDisplayIssue[] = [
  {
    id: "hardcoded-47",
    volumeNumber: 47,
    title: "NGO Reporter Vol 47",
    date: "2025",
    description: "Latest developments in NGO/CSO-UN partnerships, featuring updates from GNEC board activities and global civil society initiatives.",
    topics: ["Board Updates", "Partnership News", "Event Highlights"],
    url: "https://conta.cc/47A7zW7"
  },
  {
    id: "hardcoded-46",
    volumeNumber: 46,
    title: "NGO Reporter Vol 46",
    date: "2025",
    description: "Focus on digital advocacy strategies and emerging technologies for NGO/CSO communications and outreach.",
    topics: ["Digital Advocacy", "Tech Innovation", "Communication Tools"],
    url: "https://conta.cc/42f3XHg"
  },
  {
    id: "hardcoded-45",
    volumeNumber: 45,
    title: "NGO Reporter Vol 45",
    date: "2025",
    description: "Special coverage of the UN Civil Society Conference and its impact on global NGO/CSO collaboration.",
    topics: ["Conference Coverage", "Global Collaboration", "Policy Updates"],
    url: "https://conta.cc/4fhKMBH"
  },
  {
    id: "hardcoded-44",
    volumeNumber: 44,
    title: "NGO Reporter Vol 44",
    date: "2025",
    description: "Highlighting successful NGO/CSO campaigns and their contributions to Sustainable Development Goals achievement.",
    topics: ["Success Stories", "SDG Progress", "Campaign Analysis"],
    url: "https://conta.cc/4kBCIxL"
  },
  {
    id: "hardcoded-43",
    volumeNumber: 43,
    title: "NGO Reporter Vol 43",
    date: "2025",
    description: "Exploring innovative approaches to global challenges through NGO/CSO and UN partnerships.",
    topics: ["Innovation", "Partnerships", "Global Challenges"],
    url: "https://conta.cc/4cWUPuH"
  },
  {
    id: "hardcoded-42",
    volumeNumber: 42,
    title: "NGO Reporter Vol 42",
    date: "2025",
    description: "Focus on youth engagement and leadership development in the NGO/CSO sector.",
    topics: ["Youth Engagement", "Leadership", "Capacity Building"],
    url: "https://conta.cc/4icmE3v"
  },
  {
    id: "hardcoded-41",
    volumeNumber: 41,
    title: "NGO Reporter Vol 41",
    date: "2025",
    description: "Special edition on climate action and environmental sustainability initiatives by NGOs/CSOs.",
    topics: ["Climate Action", "Sustainability", "Environmental Policy"],
    url: "https://conta.cc/3DkYLYQ"
  },
  {
    id: "hardcoded-40",
    volumeNumber: 40,
    title: "NGO Reporter Vol 40",
    date: "2025",
    description: "Humanitarian response and crisis management strategies from leading NGOs/CSOs.",
    topics: ["Humanitarian Aid", "Crisis Response", "Disaster Relief"],
    url: "https://conta.cc/42vXBEe"
  },
  {
    id: "hardcoded-39",
    volumeNumber: 39,
    title: "NGO Reporter Vol 39",
    date: "2025",
    description: "Advancing gender equality and women's empowerment through NGO/CSO initiatives.",
    topics: ["Gender Equality", "Women's Empowerment", "Inclusion"],
    url: "https://conta.cc/3BePPTP"
  },
  {
    id: "hardcoded-38",
    volumeNumber: 38,
    title: "NGO Reporter Vol 38",
    date: "2025",
    description: "Strengthening global health partnerships and pandemic response through NGO/CSO collaboration.",
    topics: ["Global Health", "Pandemic Response", "Healthcare Access"],
    url: "https://myemail.constantcontact.com/NGO-Reporter-Vol-38--1.html?soid=1118608394243&aid=rNkpqJuyR70"
  }
];

export const mapNgoReporterIssueToDisplay = (issue: NgoReporterIssue): NgoReporterDisplayIssue => ({
  id: issue.id,
  volumeNumber: issue.volume_number,
  title: `NGO Reporter Vol ${issue.volume_number}`,
  date: issue.date,
  description: issue.description,
  topics: issue.tags,
  url: issue.link,
  isDynamic: true,
});

export const mergeNgoReporterIssues = (dynamicIssues: NgoReporterIssue[]) => {
  const hardcodedVolumes = new Set(hardcodedNgoReporterIssues.map((issue) => issue.volumeNumber));
  const merged = [
    ...hardcodedNgoReporterIssues,
    ...dynamicIssues
      .filter((issue) => !hardcodedVolumes.has(issue.volume_number))
      .map(mapNgoReporterIssueToDisplay),
  ];

  return merged.sort((a, b) => b.volumeNumber - a.volumeNumber);
};
