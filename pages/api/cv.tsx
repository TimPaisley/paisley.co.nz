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

  const response = `${title("TIM PAISLEY")}

📞  (+64) 027 557 1462
📧  tepaisley@gmail.com
🌍  Wellington + New Zealand
 
ABOUT ME

Kia ora, I'm a software developer and designer based in Wellington, New Zealand. I'm interested in web design and development, video game development, UX, and technical leadership. I'm looking for a job that will push me to excel, teach me new things, and allow me to be creative.

I consider myself a technical generalist - I'm passionate, quick to pick up new skills, and have a wide range of knowledge from development to design and everything in between. In my spare time I enjoy trying out new web frameworks, having a go at 3D modelling, or trying to figure out how to build a home media server.

In a professional setting, I'm interested in stepping into more responsibility, improving my leadership skills, and understanding how to build better teams. I'm a lead working on a large programme of work that is pivotal to the way our organisation exists in the technical space. We're working with a technical stack that includes Next.js, Tailwind, Vercel, GitHub, AWS, Pulumi.

${heading("KEY SKILLS")}

• Front-end development using modern web frameworks like React.js
• UI design using tools like Adobe Suite, Tailwind and Figma
• Agile methodology and team routines
• Regular experience with Stuff and NZ Herald daily quizzes, expert on math and science
• Leadership and team management

${heading("ACTIVITIES AND INTERESTS")}

• Coding
• Video games (playing and making them)
• Dancing
• Cooking
• Hummus

${heading("PROFESSIONAL EXPERIENCE")}

${subheading("November 2022 - Present")}
${subtitle("WELLINGTON CITY COUNCIL - Technical Lead")}

• Managing work for a technical team of eight developers, running a Kanban board, ensuring the team can deliver to tight deadlines and complex requirements
• Working with project managers, stakeholders, and governance to communicate technical concepts, manage scope, and guide delivery of services
• Meeting with staff from all over the organisation to understand their work, identify opportunities and deliver effective solutions
• Researching the latest technical tools and processes, building proof of concept applications, and providing recommendations on different approaches
• Working in a hands-on capacity alongside the developers contributing code, reviews, pull requests, and guidance

${subheading("August 2018 - November 2022")}
${subtitle("WELLINGTON CITY COUNCIL - Digital Solutions Analyst")}

• Worked independently or in a small group of developers from around the organisation on a wide range of projects, such as building dashboards, data visualisations, internal tools to improve productivity, and modern web forms
• Built a component library and templates to help development teams work consistently and using best practices
• Helped expand the team as requirements grew

${subheading("July 2016 - August 2018")}
${subtitle("NEC NEW ZEALAND LIMITED - Software Developer")}

• Developed one of the first digital city models in New Zealand working alongside Auckland, Wellington and Christchurch city councils
• Worked in a development team to create a piece of software that helped councils visualise and communicate complex geographic data
• Helped the team grow from four members to over 30 in the space of a year

${heading("EDUCATION")}

${subtitle("Victoria University of Wellington")}
BSc. June 2016
${subheading("With an outside major in Media Design")}

${italic(
  "I can provide a PDF version of this CV, a full academic record, and more references on request."
)}

`;

  res.status(200).send(response);
}
