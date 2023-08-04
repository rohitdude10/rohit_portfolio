import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

const About = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="my-3 text-base font-medium">
        I am a Software Engineer with over 4 years of expertise
        in the field. My skill set encompasses the development of robust data
        collection code from diverse platforms, optimizing SEO characteristics,
        and building data pipelines using APIs and connectors. Proficient in
        Python, Django REST framework, and Next.js, I specialize in creating
        scalable web services and RESTful APIs. Additionally, I am well-versed
        in deploying projects on platforms like Heroku and AWS, ensuring
        seamless deployment and storage. Alongside these technical capabilities,
        my collaborative expertise extends to working closely with SEO
        specialists and stakeholders, enabling me to understand client
        requirements and implement multi-tenant architectures that deliver
        personalized user experiences. I am thrilled to present this portfolio,
        which highlights my notable achievements and contributions in the realm
        of software engineering.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
