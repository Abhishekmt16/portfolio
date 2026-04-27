export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Secure E-Commerce Application
      </h1>

    <p className="text-blue-400 text-sm mb-4">
      ⚡ Full-stack system with backend-driven security logic and AI-powered risk analysis
    </p>
      {/* IMPACT */}
      <p className="text-green-400 text-sm mb-6">
         Designed adaptive authentication system reducing fraud risk by introducing multi-level verification based on transaction behavior.
      </p>

      {/* PROBLEM */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
        <p className="text-gray-400">
          Traditional e-commerce platforms lack adaptive security. All users follow the same authentication flow,
          making systems vulnerable to fraud and unauthorized access.
        </p>
      </div>

      {/* SOLUTION */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Solution</h2>
        <p className="text-gray-400">
          Implemented a risk-based authentication system where transaction behavior determines the security level:
          low-risk → direct checkout, medium-risk → OTP verification, high-risk → biometric authentication.
        </p>
        <p className="text-gray-400 mt-2">
        Designed a microservice-style architecture integrating Spring Boot backend with a Python-based AI service via REST APIs.
      </p>
      </div>

      {/* TECH STACK */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Technologies</h2>
        <p className="text-gray-400">
          Java • Spring Boot • MySQL • React • Tailwind • Flask
        </p>
      </div>

      {/* ARCHITECTURE */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Architecture</h2>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">

          {/* IMAGE */}
          <img
            src="/images/architecture.png"
            alt="System Architecture"
            className="w-full h-30 object-contain rounded-lg"
          />

          {/* DESCRIPTION */}
          <p className="text-xs text-gray-500 mt-2 text-center">
            Backend → AI Service → Database interaction
          </p>

        </div>

        {/* FLOW TEXT */}
        <p className="mt-4 text-sm text-gray-300">
          User → React Frontend → Spring Boot APIs → Risk Engine →
          <span className="text-green-400"> Low Risk</span> /
          <span className="text-yellow-400"> OTP</span> /
          <span className="text-red-400"> Biometric</span> → MySQL
        </p>
      </div>

      {/* API DESIGN */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">API Design</h2>
        <p className="text-gray-400 text-sm">
          Built RESTful APIs for authentication, product management, cart operations, and order processing with secure backend validation.
        </p>
      </div>

      {/* FEATURES */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="text-gray-400 list-disc pl-5 space-y-1">
          <li>User authentication with OTP</li>
          <li>Biometric verification for high-risk transactions</li>
          <li>Cart, Orders, Checkout system</li>
          <li>Risk-based fraud detection</li>
          <li>RESTful API design for scalable backend</li>
          <li>Integrated external Python microservice using REST communication</li>
        </ul>
      </div>

      {/* FLOW */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Transaction Flow</h2>

        <div className="space-y-2 text-sm">
          <p className="text-green-400">🟢 Low Risk → Direct order placement</p>
          <p className="text-yellow-400">🟡 Medium Risk → OTP verification</p>
          <p className="text-red-400">🔴 High Risk → Biometric authentication</p>
        </div>
      </div>

      {/* GITHUB */}
      <div className="flex gap-4 mb-10">
        <a href="https://github.com/Abhishekmt18/secure-ecommerce-backend" target="_blank" rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition hover:scale-105">
          Backend
        </a>

        <a href="https://github.com/Abhishekmt16/ecommerce-frontend" target="_blank" rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition hover:scale-105">
          Frontend
        </a>

        <a href="https://github.com/Abhishekmt16/ai-biometric-service" target="_blank" rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition hover:scale-105">
          AI Service
        </a>
      </div>

      {/* SCREENSHOTS */}
      <h2 className="text-xl font-semibold mb-4">Screenshots</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {[
          { title: "Login Page", src: "/images/login.png" },
          { title: "Products Page", src: "/images/products.png" },
          { title: "Cart Page", src: "/images/cart.png" },
          { title: "OTP Verification", src: "/images/otp.png" },
          { title: "Biometric Authentication", src: "/images/biometric.png" },
          { title: "Orders Page", src: "/images/orders.png" },
        ].map((img, i) => (
          <div key={i}>

            {/* TITLE */}
            <p className="text-sm text-gray-300 mb-1 font-medium">
              {img.title}
            </p>

            {/* DESCRIPTION (NEW 🔥) */}
            <p className="text-xs text-gray-500 mb-2">
              {img.title === "Login Page" && "User logs into the system using credentials"}
              {img.title === "Products Page" && "Browse products and add items to cart"}
              {img.title === "Cart Page" && "Manage items before checkout"}
              {img.title === "OTP Verification" && "Triggered for medium-risk transactions"}
              {img.title === "Biometric Authentication" && "Triggered for high-risk transactions"}
              {img.title === "Orders Page" && "View order history and details"}
            </p>

            {/* IMAGE */}
            <img
              src={img.src}
              className="w-full h-56 object-contain bg-gray-900 p-2 rounded-lg hover:scale-105 transition"
            />

          </div>
        ))}
      
            </div>
{/* WHY THIS PROJECT */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Why This Project Matters</h2>

        <ul className="text-gray-400 list-disc pl-5 space-y-1">
          <li>Demonstrates real-world backend architecture</li>
          <li>Implements microservice communication (Java + Python)</li>
          <li>Shows adaptive security workflows used in production systems</li>
          <li>Strong focus on API design and system design</li>
        </ul>
      </div>
    </div>
  );
}