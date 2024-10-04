import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const PORTFOLIO_OWNER_FULLNAME = "Juan Sánchez Satorres";
export const RESUME_INTRODUCTION =
  "I am a passionate Full-Stack Web Developer with a strong background in Industrial Engineering and a drive for creating efficient, scalable web applications.";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="flex flex-col items-center justify-center text-center">
          {/* Imagen redonda centrada con borde */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/profile-image.png"
              alt="Juan Sánchez Satorres"
              width={300}
              height={300}
              className="rounded-full border-4 border-gray-500"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              I’m {PORTFOLIO_OWNER_FULLNAME}
            </h1>
            <p className="mt-4 text-gray-400">{RESUME_INTRODUCTION}</p>

            <div className="mt-6 flex space-x-4 justify-center">
              <a
                href="https://github.com/tu-usuario"
                className="bg-stone-950 px-4 py-2 rounded-full flex items-center"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tu-usuario"
                className="bg-blue-700 px-4 py-2 rounded-full flex items-center"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Nueva sección de habilidades */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Full-Stack Development</h3>
              <p className="text-gray-400">
                Experienced in building web applications using technologies like
                Next.js, React.js, and Node.js. Focused on scalability and
                performance optimization.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Backend Architecture</h3>
              <p className="text-gray-400">
                Proficient in creating robust backend solutions with Node.js,
                Express, and MongoDB, ensuring efficient data handling and
                smooth server operations.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Industrial Engineering</h3>
              <p className="text-gray-400">
                Background in Technical Industrial Engineering, specializing in
                product design, process optimization, and technical project
                management.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Frontend Optimization</h3>
              <p className="text-gray-400">
                Expert in creating responsive and high-performance user
                interfaces with React.js, Redux, and MaterialUI, delivering
                seamless user experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Project Management</h3>
              <p className="text-gray-400">
                Skilled in managing full project lifecycles from design to
                implementation, particularly in engineering and software
                development projects.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Process Optimization</h3>
              <p className="text-gray-400">
                Led the development of air handling units, improving technical
                processes and ensuring adherence to industry standards.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
