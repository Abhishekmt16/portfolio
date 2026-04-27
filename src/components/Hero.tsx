import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4 pt-32 pb-20">

      <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        ABHISHEK M T
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-400">
        Java Backend Developer | Spring Boot | Problem Solver
      </p>

      <p className="mt-3 text-gray-500 max-w-xl">
        Backend developer focused on building secure, scalable applications and clean system design.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <Link
          to="/projects"
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          View Projects
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          Resume
        </a>
      </div>

          <div className="flex justify-center gap-4 mt-6">

        <a
          href="mailto:abhishekmt.16@gmail.com"
          className="border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white hover:text-black transition"
        >
          Email
        </a>

        <a
          href="https://github.com/Abhishekmt16"
          target="_blank"
          className="border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/abhishek--mt"
          target="_blank"
          className="border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}