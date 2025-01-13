import {
  SKILLS,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_OWNER_FULLNAME,
  RESUME_INTRODUCTION,
} from "@/lib/constant/constantHomePage";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col items-center">
      <main className="container py-16">
        <section className="flex flex-col items-center justify-center text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/profile-image.png"
              alt="Juan Sánchez Satorres"
              width={300}
              height={300}
              className="rounded-full shadow-3d-deep"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-primary">I’m</span>
              <span className="text-main"> {PORTFOLIO_OWNER_FULLNAME}</span>
            </h1>
            <p className="mt-4 text-textSecondary">{RESUME_INTRODUCTION}</p>

            <div className="mt-6 flex space-x-4 justify-center">
              <a
                href={GITHUB_URL}
                className="btn flex items-center space-x-2 shadow-3d-soft hover:shadow-3d-deep"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
              <a
                href={LINKEDIN_URL}
                className="btn flex items-center space-x-2 shadow-3d-soft hover:shadow-3d-deep"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16 flex flex-col items-center">
          <h2 className="heading-primary text-center animate-fadeIn">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-5xl">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="card shadow-3d-soft hover:shadow-3d-deep hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-xl text-main font-bold">{skill.title}</h3>
                <p className="text-textSecondary mt-2">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
