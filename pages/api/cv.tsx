import type { NextApiRequest, NextApiResponse } from "next";
import chalk from "chalk";

const title = chalk.blue.underline.bold;
const subtitle = chalk.blue.bold;

const heading = chalk.red.bold;
const subheading = chalk.grey;

const italic = chalk.italic;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const agent = req.headers["user-agent"];
  const isCurl = agent?.includes("curl");

  if (!isCurl) {
    res.redirect("/");
  }

  const response = chalk.reset(
    title("\nTIM PAISLEY\n"),
    "\n",
    "📞  (+64) 027 557 1462\n",
    "📧  tepaisley@gmail.com\n",
    "🌍  Wellington, New Zealand\n",
    "\n",
    heading("ABOUT ME\n"),
    "\n",
    "Kia ora, I'm a software developer and designer based in Wellington, New Zealand. I'm interested in web design and development, video game development, UX, and technical leadership. I'm looking for a job that will push me to excel, teach me new things, and allow me to be creative.\n",
    "\n",
    "I consider myself a technical generalist - I'm passionate, quick to pick up new skills, and have a wide range of knowledge from development to design and everything in between. In my spare time I enjoy trying out new web frameworks, having a go at 3D modelling, or trying to figure out how to build a home media server.\n",
    "\n",
    "In a professional setting, I'm interested in stepping into more responsibility, improving my leadership skills, and understanding how to build better teams. I'm a lead working on a large programme of work that is pivotal to the way our organisation exists in the technical space. We're working with a technical stack that includes Next.js, Tailwind, Vercel, GitHub, AWS, Pulumi.\n",
    "\n",
    heading("KEY SKILLS\n"),
    "\n",
    "• Front-end development using modern web frameworks like React.js\n",
    "• UI design using tools like Adobe Suite, Tailwind and Figma\n",
    "• Agile methodology and team routines\n",
    "• Regular experience with Stuff and NZ Herald daily quizzes, expert on math and science\n",
    "• Leadership and team management\n",
    "\n",
    heading("ACTIVITIES AND INTERESTS\n"),
    "\n",
    "• Coding\n",
    "• Video games (playing and making them)\n",
    "• Dancing\n",
    "• Cooking\n",
    "• Hummus\n",
    "\n",
    heading("PROFESSIONAL EXPERIENCE\n"),
    "\n",
    subheading("November 2022 - Present\n"),
    subtitle("WELLINGTON CITY COUNCIL - Technical Lead\n"),
    "\n",
    "• Managing work for a technical team of eight developers, running a Kanban board, ensuring the team can deliver to tight deadlines and complex requirements\n",
    "• Working with project managers, stakeholders, and governance to communicate technical concepts, manage scope, and guide delivery of services\n",
    "• Meeting with staff from all over the organisation to understand their work, identify opportunities and deliver effective solutions\n",
    "• Researching the latest technical tools and processes, building proof of concept applications, and providing recommendations on different approaches\n",
    "• Working in a hands-on capacity alongside the developers contributing code, reviews, pull requests, and guidance\n",
    "\n",
    subheading("August 2018 - November 2022\n"),
    subtitle("WELLINGTON CITY COUNCIL - Digital Solutions Analyst\n"),
    "\n",
    "• Worked independently or in a small group of developers from around the organisation on a wide range of projects, such as building dashboards, data visualisations, internal tools to improve productivity, and modern web forms\n",
    "• Built a component library and templates to help development teams work consistently and using best practices\n",
    "• Helped expand the team as requirements grew\n",
    "\n",
    subheading("July 2016 - August 2018\n"),
    subtitle("NEC NEW ZEALAND LIMITED - Software Developer\n"),
    "\n",
    "• Developed one of the first digital city models in New Zealand working alongside Auckland, Wellington and Christchurch city councils\n",
    "• Worked in a development team to create a piece of software that helped councils visualise and communicate complex geographic data\n",
    "• Helped the team grow from four members to over 30 in the space of a year\n",
    "\n",
    heading("EDUCATION\n"),
    "\n",
    subtitle("Victoria University of Wellington\n"),
    "BSc. June 2016\n",
    subheading("With an outside major in Media Design\n"),
    "\n",
    italic(
      "I can provide a PDF version of this CV, a full academic record, and more references on request.\n"
    ),
    "\n"
  );
  res.status(200).send(response);
}
