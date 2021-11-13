import shortyy from "./shorty.png";
import thewall from "./thewall.png";
import PassManager from "./passManager.png";
import BookArchive from "./bookArchive.png";
import vidy from "./vidy.png";
import eshop from "./eshop.png";

export const projects = [
  {
    name: "E_Shop.",
    tags: ["ReactJs", "Express", "MongoDb", "Stripe"],
    img: eshop,
    desc: "Ecommerce site, where u cant buy dress and make payment online through stripe",
    gitLink: "https://github.com/ser-veresta/Ecommerce",
    accLink: "https://github.com/ser-veresta/Ecommerce/blob/main/README.md",
    link: "https://eshop01.netlify.app/",
  },
  {
    name: "The Wall",
    tags: ["ReactJs", "MongoDb", "Express", "TailwindCSS"],
    img: thewall,
    desc: `Post your content here to the community and vote and downvote others content.`,
    gitLink: "https://github.com/ser-veresta/wall",
    accLink: "https://github.com/ser-veresta/wall/blob/main/README.md",
    link: "https://thewall.netlify.app/",
  },
  {
    name: "PassManager",
    tags: ["MaterialUI", "ReactJs", "MySQL", "Express"],
    img: PassManager,
    desc: `A safe place to store all your passwords.`,
    gitLink: "https://github.com/ser-veresta/PassManager",
    accLink: "https://github.com/ser-veresta/PassManager/blob/main/README.md",
    link: "https://pass-manager-01.netlify.app/",
  },
  {
    name: "Shortyy",
    tags: ["ReactJs", "MongoDb", "Express", "Material-UI"],
    img: shortyy,
    desc: `This is more than just shorter links, Build your brand's recognition and get detailed insights on how your links are performing.`,
    gitLink: "https://github.com/ser-veresta/url-shortener",
    accLink: "https://github.com/ser-veresta/url-shortener/blob/prod/README.md",
    link: "https://url-shortener-01.netlify.app/",
  },
  {
    name: "Book Archive",
    tags: ["MaterialUI", "ReactJs", "GraphQl", "Apollo", "MongoDb"],
    img: BookArchive,
    desc: `Simple Storage of data about your favorite books using GraphQl.`,
    gitLink: "https://github.com/ser-veresta/BookArchive",
    link: "https://book-archive-02.netlify.app/",
  },
  {
    name: "Vidy",
    tags: ["ReactJs", "SocketIo", "Materila-UI"],
    img: vidy,
    desc: "Video chat application",
    gitLink: "https://github.com/ser-veresta/vidy",
    link: "https://vidy.netlify.app/",
  },
];
