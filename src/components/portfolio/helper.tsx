import PORTFOLIO_IMG from "../../assets/portfolio_logo.webp";

export interface IPortfolioRecords {
  id: number;
  image: any;
  title: string;
  link: string;
  demo: string;
}

export const PORTFOLIO_RECORDS: IPortfolioRecords[] = [
  {
    id: 1,
    image: PORTFOLIO_IMG,
    title:
      "Track a real time vaccination data of India shared by GOI",
    link: "https://github.com/sjshank/IN-Vaccination",
    demo: "https://in-vaccination.netlify.app/",
  },
  {
    id: 2,
    image: PORTFOLIO_IMG,
    title: "React based Rock-Paper-Scissor Game",
    link: "https://github.com/sjshank/React-Rock-Paper-Scissors-App",
    demo: "https://react-rock-paper-scissors-game.netlify.app/",
  },
  {
    id: 3,
    image: PORTFOLIO_IMG,
    title: "E-Commerce Web Application for Apparel",
    link: "https://github.com/sjshank/React-Shopping-Mart",
    demo: "https://shopping-mart.netlify.app/",
  },
  {
    id: 4,
    image: PORTFOLIO_IMG,
    title: "Manage employee's absence, export & import iCalender",
    link: "https://absence-manager.netlify.app/",
    demo: "https://github.com/sjshank/Absence-Manager",
  },
  {
    id: 5,
    image: PORTFOLIO_IMG,
    title: "Random user search directory built using React & Rest API",
    link: "https://absence-manager.netlify.app/",
    demo: "https://github.com/sjshank/Absence-Manager",
  },
];
