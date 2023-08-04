import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-1">
        <div>
          <h5 className="my-3 text-2xl font-bold border-b-4 border-green">Education</h5>
          <div className="">
            <h5 className="my-2 text-md ">
              Bachelor of Technology from Galgotias University with 8.59 CGPA
            </h5>
            <p className="my-3 text-2xl font-bold border-b-4 border-green">Experience</p>
            <p className="font-semibold">
              MINDFIRE SOLUTIONS(Senior Software Engineer)
            </p>
            <ul>
              <li>
                - Developing and maintaining robust data collection code from
                various platforms, including Google Analytics, Google Search
                Console, Adobe, and other relevant sources.
              </li>
              <li>
                - Collaborated closely with SEO specialists and stakeholders to
                understand client requirements and gather data effectively,
                resulting in improved SEO characteristics.
              </li>
              <li>
                - Implemented data collection pipelines using APIs and data
                connectors, ensuring seamless extraction of data from diverse
                sources.
              </li>
              <li>
                - Developed and maintained production-ready code for efficient
                and reliable SEO data collection processes.
              </li>
              <li>
                - Adept at understanding client's specific needs and
                requirements, collaborating to create tailored software features
                or enhancements that exceed expectations.
              </li>
            </ul>
            <p className="font-semibold my-2">
              DJT CORPORATION & INVESTMENTS(Software Engineer)
            </p>
            <ul>
              <li>
                - Collaborated with a medium-sized, focused team using
                Agile/Scrum principles to develop E-commerce applications and
                platform features
              </li>
              <li>
                - Collaborated closely with the team to design and architect the
                Kafka integration, considering the specific requirements and
                business needs of the organization.
              </li>
              <li>
                - Utilized Python and Django REST framework to architect and
                implement robust and scalable web services and RESTful APIs for
                seamless data communication
              </li>
              <li>
                - Implemented API Gateway like Nginx Ingress Controller for
                traffic management.
              </li>
              <li>
                - Experience in deploying projects using Heroku and leveraging
                web services such as Amazon Web Services (AWS) EC2 and AWS S3
                for seamless and scalable project deployment and storage.
                enhancements.
              </li>
            </ul>
            <p className="font-semibold my-2">MOXTAIN(Software Engineer)</p>
            <ul>
              <li>
                - Implemented multi-tenant architecture with the team to offer
                personalized trekking experiences to B2B clients on our
                platform.
              </li>
              <li>
                - Developed Django web application using MVC architecture.
              </li>
              <li>
                - Built admin control console using Python, Django, and React.js
                for B2B customers, and developed scalable RESTful APIs using
                Django and Django REST Framework (DRF).
              </li>
              <li>
                - Developed Next.js websites with Bootstrap, integrating Google
                and Facebook authentication using NextAuth.
              </li>
            </ul>
          </div>
        </div>
        {/* <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Senior Software Developer
            </h5>
            <p className="font-semibold">MINDFIRE SOLUTIONS</p>
            <ul>
              <li>
                - Developed and maintained robust code for data collection from
                various sources, including Google Analytics, Google Search
                Console, Adobe and other relevant platforms.
              </li>
              <li>- Collaborated with SEO specialists and stakeholders to understand client requirements and
gather data effectively for improving SEO characteristics.</li>
              <li>- Implemented data collection pipelines using APIs and data connectors to extract data from different sources.</li>
              <li>- Developed and maintained production-ready code for SEO data collection processes.</li>
              <li>- Collaborated closely with clients to understand their specific needs and requirements for new software features or
enhancements.</li>
              
            </ul>
          </div>
        </div> */}
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold border-b-4 border-green ">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        {/* <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
