import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import img from "../public/img.jpg";
import { Button, ImageContainer, PageLink, Square, Triangle } from "../styles/style";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  console.log(process.env.USER_ID);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_oxjvv77", process.env.TEMPLATE_ID, e.target, process.env.USER_ID).then(
      (res) => console.log(res.text),
      (err) => console.log(err.text)
    );

    e.target.reset();
  };

  const handleScroll = () => setOffsetY(Math.round(window.pageYOffset));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* NavBar */}

      <header
        className={
          offsetY > 10
            ? "transition duration-200 ease-in-out fixed z-20 bg-gray-50 w-full shadow-md"
            : "transition duration-200 bg-gray-50 ease-in-out w-full shadow-0"
        }
      >
        <div className="flex items-center min-h-16">
          <h1 className="flex-grow ml-6 font-semibold text-3xl">Gopal</h1>
          <nav className="hidden md:block">
            <ul className="mr-10 flex gap-10 font-semibold">
              <li>
                <Link href="#about" passHref>
                  <PageLink>About</PageLink>
                </Link>
              </li>
              <li>
                <Link href="#skills" passHref>
                  <PageLink>Skills</PageLink>
                </Link>
              </li>
              <li>
                <Link href="#project" passHref>
                  <PageLink>Projects</PageLink>
                </Link>
              </li>
              <li>
                <Link href="#contact" passHref>
                  <PageLink>Contact</PageLink>
                </Link>
              </li>
            </ul>
          </nav>
          <Button className="mr-10 hidden md:inline-block">
            Resume <i className="fas fa-download"></i>
          </Button>
          <Button onClick={() => setIsOpen((i) => !i)} className="mr-4 h-4/6 border-none md:hidden">
            <i className="fas fa-bars"></i>
          </Button>
        </div>
        <nav
          style={{ display: isOpen ? "block" : "none" }}
          className="md:hidden transition duration-300 ease-in-out m-auto w-max text-center mt-2"
        >
          <ul className="flex flex-col gap-2 font-semibold">
            <li>
              <Link href="#about" passHref>
                <PageLink>About</PageLink>
              </Link>
            </li>
            <li>
              <Link href="#skills" passHref>
                <PageLink>Skills</PageLink>
              </Link>
            </li>
            <li>
              <Link href="#project" passHref>
                <PageLink>Projects</PageLink>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <PageLink>Contact</PageLink>
              </Link>
            </li>
          </ul>
          <Button className="mt-2 mb-5">
            Resume <i className="fas fa-download"></i>
          </Button>
        </nav>
      </header>

      {offsetY > 10 && <div id="about" className="min-h-16 w-full"></div>}

      {/* About Section */}
      <div className="w-11/12 m-auto">
        <section
          style={{ opacity: offsetY > 80 ? -0.0028 * offsetY + 1 : 1 }}
          className="grid md:grid-cols-1 lg:grid-cols-11 min-h-4/5"
        >
          <div className="lg:col-span-5 flex justify-center order-3 lg:order-1 items-center -mt-20 md:-mt-12 lg:mt-0">
            <div className="space-y-6 space-x-5">
              <h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold">Gopal Subramaniyan.V.R</h1>
              <p className="xl:text-xl lg:text-lg font-semibold">I am a Full Stack Developer</p>
              <Button>get in touch</Button>
            </div>
          </div>
          <div className="hidden order-2 lg:block">
            <div className="w-full h-full flex justify-center items-end">
              <svg
                className="animate-bounce transition-opacity duration-150 ease-in-out opacity-100 h-20 w-16"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 10 20 1"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-3 lg:right-12 relative">
            <div className="w-9/12 md:w-full h-full relative transform scale-75 lg:scale-90 xl:scale-100 -mt-12 md:mt-0">
              <ImageContainer>
                <Image src={img} layout="fill" objectFit="cover" alt="Gopal Subramaniyan.v.r" />
              </ImageContainer>

              <Square
                t="calc(50% - 20px)"
                l="calc(50% + 120px)"
                className="w-60 h-60 bg-primary-main"
                r="25deg"
              ></Square>
              <Square
                className="w-20 h-20 bg-secondary-main"
                t="calc(50% + 120px)"
                l="calc(50% + 160px)"
                r={offsetY > 10 ? `${75 + offsetY * 0.2}deg` : "75deg"}
              ></Square>
              <Triangle
                t="calc(50% - 110px)"
                l="calc(50% + 160px)"
                r={offsetY > 10 ? `${145 - offsetY * 0.1}deg` : "145deg"}
              >
                <Square className="bg-secondary-main" type="triangle"></Square>
              </Triangle>
            </div>
          </div>
        </section>

        {/* Skills Section */}

        <h1 id="skills" className="xl:text-6xl lg:text-5xl text-4xl font-semibold text-center my-10">
          Skills
        </h1>
        <section className="grid lg:grid-cols-2 xl:gap-24 lg:gap-18 min-h-4/5">
          <div className="hidden lg:block">
            <div className="w-full h-full relative">
              <Triangle s="5" t="calc(50% + 9rem)" l="calc(50% - 12rem)" r="225deg">
                <Square className="bg-primary-main" type="triangle"></Square>
              </Triangle>
              <Square
                className="w-40 h-40 bg-secondary-main"
                t="calc(50% - 4rem)"
                l="calc(50% - 2rem)"
                r={offsetY * 0.2 > 106 && offsetY * 0.2 < 195 ? `${offsetY * 0.2 - 106}deg` : "0deg"}
              ></Square>
              <Square
                className="w-16 h-16 bg-secondary-main"
                t="calc(50% + 8rem)"
                l="calc(50%)"
                r={offsetY * 0.2 > 106 && offsetY * 0.2 < 195 ? `${25 + offsetY * 0.2 - 106}deg` : "25deg"}
              ></Square>
              <Square
                className="w-20 h-5 bg-secondary-main"
                t="50%"
                l="calc(50% - 11rem)"
                r={offsetY * 0.2 > 106 && offsetY * 0.2 < 195 ? `${25 - offsetY * 0.2 + 106}deg` : "25deg"}
                br="25px"
              >
                <Square className="w-5 h-20 bg-secondary-main" top="40%" l="50%" r="0deg" br="25px"></Square>
              </Square>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 xl:mr-8 mb-8">
            <div className="shadow-xl rounded-md border-2 border-primary-main flex flex-col p-4">
              <h1 className="xl:text-2xl lg:text-xl text-lg font-semibold">Programming Languages</h1>
              <ul className="list-disc p-2 ml-4">
                <li className="font-medium">Javascript</li>
                <li className="font-medium">Python</li>
                <li className="font-medium">C++</li>
                <li className="font-medium">C#</li>
              </ul>
            </div>
            <div className="shadow-xl rounded-md border-2 border-primary-main flex flex-col p-4">
              <h1 className="xl:text-2xl lg:text-xl text-lg font-semibold">Web Front-End</h1>
              <ul className="list-disc p-2 ml-4">
                <li className="font-medium">Html</li>
                <li className="font-medium">CSS</li>
                <li className="font-medium">React</li>
                <li className="font-medium">Next Js</li>
                <li className="font-medium">Bootstrap</li>
                <li className="font-medium">Tailwind CSS</li>
                <li className="font-medium">Material-ui</li>
              </ul>
            </div>
            <div className="shadow-xl rounded-md border-2 border-primary-main flex flex-col p-4">
              <h1 className="xl:text-2xl lg:text-xl text-lg font-semibold">Web Back-End</h1>
              <ul className="list-disc p-2 ml-4">
                <li className="font-medium">Node JS(Express)</li>
              </ul>
            </div>
            <div className="shadow-xl rounded-md border-2 border-primary-main flex flex-col p-4">
              <h1 className="txl:text-2xl lg:text-xl text-lg font-semibold">Databases</h1>
              <ul className="list-disc p-2 ml-4">
                <li className="font-medium">MongoDb</li>
              </ul>
            </div>
            <div className="shadow-xl rounded-md border-2 border-primary-main flex flex-col p-4">
              <h1 className="xl:text-2xl lg:text-xl text-lg font-semibold">Other Tools</h1>
              <ul className="list-disc p-2 ml-4">
                <li className="font-medium">Git</li>
                <li className="font-medium">GitHub</li>
                <li className="font-medium">VScode</li>
                <li className="font-medium">Atom</li>
                <li className="font-medium">Notion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}

        <h1 id="project" className="xl:text-6xl lg:text-5xl text-4xl font-semibold text-center my-10">
          Projects
        </h1>
        <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-rows-2 gap-28 w-11/12 m-auto">
          <div className="shadow-xl rounded-md border-2 border-primary-main flex flex-col p-4">
            <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold">.Tune</h1>
            <p className="xl:text-xl lg:text-lg font-semibold ml-10 mt-4">Music Streaming App</p>
            <div className="w-11/12 h-40 m-auto rounded-md mt-8 bg-gray-400"></div>
            <p className="font-semibold mt-4">
              Isn&rsquo;t it all about the tune App to stream music and make a list of you favorite music so you can
              enjoy it later.
            </p>
          </div>
        </section>

        {/* Contact Seection */}

        <h1 id="contact" className="xl:text-6xl lg:text-5xl text-4xl font-semibold text-center my-10">
          Contact Me
        </h1>
        <section className="pb-10">
          <form
            onSubmit={sendEmail}
            autoComplete="off"
            className="flex xl:w-1/3 lg:w-1/2 md:w-9/12 m-auto flex-col justify-start items-start p-16 shadow rounded-md border-2 border-primary-main"
          >
            <label htmlFor="name" className="font-semibold text-xl mt-4">
              Name:
            </label>
            <input
              id="name"
              name="name"
              className="w-full h-8 p-2 border-2 rounded focus:border-primary-main focus:outline-none"
              type="text"
              placeholder="Enter your name.."
            />
            <label htmlFor="email" className="font-semibold text-xl mt-4">
              Email:
            </label>
            <input
              id="email"
              name="email"
              className="w-full h-8 p-2 border-2 rounded focus:border-primary-main focus:outline-none"
              type="text"
              placeholder="Enter your email.."
            />
            <label htmlFor="message" className="font-semibold text-xl mt-4">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-24 p-2 border-2 rounded focus:border-primary-main focus:outline-none"
              type="text"
              placeholder="what do you want to say.."
            />
            <Button className="m-auto mt-8 md:w-2/5" type="submit">
              contact me
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}
