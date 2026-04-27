import Layout from "../components/Layout";
import About from "../components/About";
import Skills from "../components/Skills";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>

      {/* HERO */}
      <Hero />

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