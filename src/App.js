import React from "react";
import { FaGithub, FaExternalLinkAlt, FaGoogle } from "react-icons/fa";
import "./App.css";

const professionalExperience = [
  {comapany:"Amazon.com",
    role:"",
    responsibility: [{},{},{}],
    from: "",
    to:"",

  },
  {comapany:"Amazon.com",
    role:"",
    responsibility: [{},{},{}],
    from: "",
    to:"",

  },
  {comapany:"Amazon.com",
    role:"",
    responsibility: [{},{},{}],
    from: "",
    to:"",

  }
]
const projects = [
  {
    name: "Java TicTacToe app",
    description: "Developed a real-time multiplayer Tic-Tac-Toe application in Java, enabling seamless gameplay with an in-game reset feature for users to restart matches dynamically.",
    link: "https://github.com/Prakul95/tictactoe",
  },
  {
    name: "Login Demo using JWT tokens",
    description: "Developed a PostgreSQL-backed authentication system in Go, implementing secure user authentication with JWT tokens. Integrated caching for efficient session management, storing JWT tokens in cache upon login and invalidating them upon logout to enhance security and performance.",
    link: "https://github.com/Prakul95/JwtLoginDemo",
  },
];

const colabLinks = [
  {
    name: "EDA for Detecting malicious URLs based on Lexical analysis",
    link: "https://colab.research.google.com/drive/1ZVdehyTnivuTLBdU84GmhN53u6J1qT4n?authuser=1#scrollTo=mimc4ie8RtFI",
    description: "Conducted Exploratory Data Analysis (EDA) on URL lexical features to classify URLs as spam or benign, leveraging statistical insights and pattern recognition to identify key indicators of malicious links.",
  },
  {
    name: "Model Fitting for Detecting malicious URLs based on Lexical analysis",
    link: "https://colab.research.google.com/drive/1YHyqzm5_-VpPfTqnTvJTgZ1DisUZP2G5?authuser=1",
    description: "Developed and optimized a predictive model for detecting malicious URLs using lexical analysis, leveraging key URL features to enhance classification accuracy and threat detection."
  },
  {
    name: "Tree Data analysis",
    link: "https://colab.research.google.com/drive/1Nzd_RX76qawJ0uQS9XzrIYrTxuxPUQu2?authuser=1#scrollTo=f3ms_eG0pk5n",
    description: "Comprehensive Exploratory Data Analysis (EDA) on the Tree dataset, uncovering patterns, relationships, and insights through statistical summaries, visualizations, and correlation analysis.",
  },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Prakul's Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">Full Stack Infrastructure Developer</p>
      </header>
      {/* <section className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {professionalExperience.map((work, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-6 bg-white text-center">
              <h3 className="text-xl font-medium text-gray-800">{work.comapany}</h3>
              <p className="text-gray-600 mt-2">{work.from}</p>
              <a
                href={work.role}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-blue-600 hover:underline text-lg"
              >
                GitHub <FaGithub className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section> */}
      <section className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Resume</h2>
        <a
          href="https://drive.google.com/file/d/1I9k9O0pgC0ciR0_qV8i298RN2uWHClef/view?usp=sharing"
          download="../public/PRAKUL_resume_FS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-blue-600 hover:underline text-lg"
        >
          View Resume <FaExternalLinkAlt className="ml-2" />
        </a>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-6 bg-white text-center">
              <h3 className="text-xl font-medium text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-blue-600 hover:underline text-lg"
              >
                GitHub Link <FaGithub className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold">Colab Notebooks</h2>
        <ul className="mt-6 space-y-4">
          {colabLinks.map((colab, index) => (
            <li key={index}>
              <a
                href={colab.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline text-lg"
              >
                
                {colab.name} <FaGoogle className="ml-2" />
              </a>
              <p className="inline-flex items-center ml-4 text-gray-600">
              <h4>Description:</h4>
              {colab.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
