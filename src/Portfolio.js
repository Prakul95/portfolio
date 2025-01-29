import React from "react";
import { Card, CardContent } from "../src/components/ui/card";
// import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt, FaGoogle } from "react-icons/fa";

const projects = [
  {
    name: "Project 1",
    description: "Description of project 1.",
    link: "https://github.com/yourgithub/project1",
  },
  {
    name: "Project 2",
    description: "Description of project 2.",
    link: "https://github.com/yourgithub/project2",
  },
];

const colabLinks = [
  {
    name: "Colab Notebook 1",
    link: "https://colab.research.google.com/drive/your-notebook-id",
  },
  {
    name: "Colab Notebook 2",
    link: "https://colab.research.google.com/drive/your-notebook-id",
  },
];

export default function Portfolio() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Prakul's Portfolio</h1>
        <p className="text-gray-600">Full Stack Infrastructure Developer</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-blue-600 hover:underline"
        >
          View Resume <FaExternalLinkAlt className="ml-2" />
        </a>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-blue-600 hover:underline"
                >
                  GitHub <FaGithub className="ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Colab Notebooks</h2>
        <ul className="mt-4 space-y-2">
          {colabLinks.map((colab, index) => (
            <li key={index}>
              <a
                href={colab.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                {colab.name} <FaGoogle className="ml-2" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
