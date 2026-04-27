import Layout from "../components/Layout";

export default function Resume() {
  return (
    <Layout>

      <h1 className="text-3xl font-bold mb-6">Resume</h1>

      <div className="flex gap-4 mb-6">
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          download
          className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg">
        <iframe
          src="/resume.pdf"
          className="w-full h-[600px] rounded"
        ></iframe>
      </div>

    </Layout>
  );
}