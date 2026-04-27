export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4">

      <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
  ABHISHEK M T
</h1>

      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Java Backend Developer | Spring Boot | Problem Solver
      </p>

      <p className="mt-3 text-gray-500 max-w-xl">
          Backend developer focused on building secure, scalable applications and clean system design.
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300 hover:scale-105">
        View Projects
      </button>

        <a href="/resume.pdf" target="_blank" className="mr-4 underline">
        View Resume
        </a>
        <br></br>
        <a href="/resume.pdf" download className="underline">
        Download Resume
        </a>

    </section>
  );
}