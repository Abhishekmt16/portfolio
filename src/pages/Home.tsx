import Layout from "../components/Layout";
import About from "../components/About";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>

      {/* HERO */}
      <div className="flex flex-col items-center text-center mt-16">

        <h1 className="text-5xl font-bold">ABHISHEK M T</h1>

        <p className="mt-4 text-gray-400 text-lg max-w-xl">
          Backend developer focused on building secure, scalable applications and clean system design
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/projects" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">
            View Projects
          </Link>

          <Link to="/resume" className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Resume
          </Link>
        </div>

      </div>

      {/* ABOUT */}
      <div className="mt-20">
        <About />
      </div>

      {/* SKILLS */}
      <div className="mt-20">
        <Skills />
      </div>

    </Layout>
  );
}