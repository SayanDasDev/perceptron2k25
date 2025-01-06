export type SpeakerData = {
  name: string,
  image: string,
  designation: string,
  department?: string,
  institution: string,
  role?: string,
  topic: string,
  date: string,
  time: string,
}

export const speakersData: SpeakerData[] = [
  {
    name: "Prof. Sourangshu Bhattacharya",
    image: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/speaker_sourangshu.webp",
    designation: "Associate Professor",
    department: "Department of Computer Science and Engineering",
    institution: "IIT Kharagpur",
    role: "Keynote Speaker",
    topic: "Efficient Exempler Subnet Selection for Complex Reasoning with LLMs",
    date: "10 Jan",
    time: "10:30 am"
  },
]