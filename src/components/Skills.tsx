export default function Skills() {
  return (
    <section className="space-y-8">

      <h2 className="text-3xl font-bold">Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Backend */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="font-semibold mb-2">Backend</h3>
          <p className="text-gray-400 text-sm">
            Java, Spring Boot, REST APIs, JPA/Hibernate
          </p>
        </div>

        {/* Frontend */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="font-semibold mb-2">Frontend</h3>
          <p className="text-gray-400 text-sm">
            React, JavaScript, HTML, CSS
          </p>
        </div>

        {/* Database */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="font-semibold mb-2">Database</h3>
          <p className="text-gray-400 text-sm">
            MySQL
          </p>
        </div>

        {/* Tools */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="font-semibold mb-2">Tools & Others</h3>
          <p className="text-gray-400 text-sm">
            Git, Maven, Postman
          </p>
        </div>

      </div>

    </section>
  );
}