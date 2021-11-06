import shortyy from "./shorty.png";
import thewall from "./thewall.png";
import weatherPWA from "./weatherPWA.png";
import Gogl from "./Gogl.png";
import vidy from "./vidy.png";
import eshop from "./eshop.png";

export const projects = [
  {
    name: "E_Shop.",
    tags: ["ReactJs", "Express", "MongoDb", "Stripe"],
    img: eshop,
    desc: "Ecommerce site, where u cant buy dress and make payment online through stripe",
    gitLink: "https://github.com/ser-veresta/Ecommerce",
    link: "https://eshop01.netlify.app/",
    order: "1",
  },
  {
    name: "The Wall",
    tags: ["ReactJs", "MongoDb", "Express","TailwindCSS"],
    img: thewall,
    desc: `Post your content here to the community and vote and downvote others content.`,
    gitLink: "https://github.com/ser-veresta/wall",
    link: "https://thewall.netlify.app/",
    order: "2",
  },
  {
    name: "Vidy",
    tags: ["ReactJs", "SocketIo", "Materila-UI"],
    img: vidy,
    desc: "Video chat application",
    gitLink: "https://github.com/ser-veresta/vidy",
    link: "https://vidy.netlify.app/",
    order: "3",
  },
  {
    name: "Shortyy",
    tags: ["ReactJs", "MongoDb", "Express","Material-UI"],
    img: shortyy,
    desc: `This is more than just shorter links, Build your brand&apos;s recognition and get detailed insights on how your links are performing.`,
    gitLink: "https://github.com/ser-veresta/url-shortener",
    link: "https://url-shortener-01.netlify.app/",
    order: "4",
  },
  {
    name: "Gogl",
    tags: ["TailwindCSS", "ReactJs", "RapidApi","Material-UI"],
    img: Gogl,
    desc: `Google search engine clone with rapidApi`,
    gitLink: "https://github.com/ser-veresta/Gogl",
    link: "https://gogll.netlify.app",
    order: "5",
  },
  {
    name: "Weather App",
    tags: ["PWA", "ReactJs"],
    img: weatherPWA,
    desc: `Search weather of any city with this progressive web app.`,
    gitLink: "https://github.com/ser-veresta/weatherPWA",
    link: "https://weather-pwa-01.netlify.app/",
    order: "6",
  },
];
