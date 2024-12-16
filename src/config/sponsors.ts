export interface SPONSORItem {
  name: string;
  title: string;
  imageURL: string;
  links: {
    website: string;
    linkedin?: string;
    facebook?: string;
    youtube?: string;
    instagram?: string;
  }
}


export const sponsorData: SPONSORItem[] = [
  {
    name: "QJ",
    title: "Associate Sponsor",
    imageURL: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/QJ_logo.jpg",
    links: {
      website: "https://qjconsulting.in/",
      linkedin: "https://www.linkedin.com/company/qj-consultingofficial/",
      // facebook: "https://www.facebook.com",
      youtube: "https://youtube.com/@qjconsulting ",
      instagram: "https://www.instagram.com/qjconsulting/",
    }
  },
  {
    name: "Nihilent",
    title: "Technical Sponsor",
    imageURL: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/Nihilent_logo.jpg",
    links: {
      website: "https://www.nihilent.com/",
      linkedin: "https://www.linkedin.com/company/nihilent/",
      facebook: "https://www.facebook.com/Nihilent/",
      youtube: "https://www.youtube.com/@NihilentLimited",
      // instagram: "https://www.instagram.com",
    }
  },
  {
    name: "Data Space",
    title: "Technical Sponsor",
    imageURL: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/data_space.png",
    links: {
      website: "https://dataspaceacademy.com/",
      linkedin: "https://www.linkedin.com/company/dataspace-academy/",
      facebook: "https://www.facebook.com/DataSpaceAcademy",
      youtube: "https://youtube.com/@dataspaceacademy",
      instagram: "https://www.instagram.com/dataspacacademy",
    }
  },
  {
    name: "HandE",
    title: "Event Sponsor",
    imageURL: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/HandE_Logo.png",
    links: {
      website: "https://www.handelearning.com/",
      linkedin: "https://www.linkedin.com/company/hande-learning",
      facebook: "https://www.facebook.com/humanandemotion/",
      youtube: "https://www.youtube.com/@humanandemotion",
      instagram: "https://www.instagram.com/humanandemotion",
    }
  },
]