
export default function Projects() {
  return (
    <section className="space-y-6">
 <div className="bg-gray-900/70 backdrop-blur p-6 rounded-2xl shadow-xl border border-gray-800">

  <h2 className="text-3xl font-bold">Secure E-Commerce Application</h2>

  {/* Problem */}
  <div>
    <h3 className="font-semibold text-xl">Problem Statement</h3>
    <p className="text-gray-400">
      Traditional e-commerce systems lack adaptive security. This project introduces
      risk-based authentication using OTP and biometric verification.
    </p>
  </div>
<div className="h-px bg-gray-800 my-8"></div>
  {/* Tech */}
  <div>
    <h3 className="font-semibold text-xl">Technologies Used</h3>
    <p className="text-gray-400">
      Java, Spring Boot, MySQL, React, Tailwind, Flask
    </p>
  </div>
<div className="h-px bg-gray-800 my-8"></div>
  {/* Features */}
  <div>
    <h3 className="font-semibold text-xl">Features</h3>
    <ul className="list-disc ml-6 text-gray-400">
      <li>User authentication with OTP</li>
      <li>Biometric verification for high-risk transactions</li>
      <li>Cart, Orders, Checkout system</li>
      <li>Risk-based fraud detection</li>
    </ul>
  </div>
<div className="mt-8 space-y-4">
<div className="h-px bg-gray-800 my-8"></div>
  <h3 className="text-xl font-semibold">Transaction Flow</h3>

  <ul className="text-gray-400 space-y-2 text-sm">
    <li>🟢 Low Risk → Direct order placement</li>
    <li>🟡 Medium Risk → OTP verification required</li>
    <li>🔴 High Risk → Biometric authentication required</li>
  </ul>

  <div className="h-px bg-gray-800 my-8"></div>
<div className="mt-6">
  <h3 className="text-xl font-semibold mb-3">Architecture</h3>

  <div className="flex flex-wrap items-center gap-3 text-sm">

    <span className="bg-gray-800 px-3 py-1 rounded">Spring Boot APIs(Backend)</span>
    <span>→</span>

    <span className="bg-gray-800 px-3 py-1 rounded">React (Frontend)</span>
    <span>→</span>

    <span className="bg-gray-800 px-3 py-1 rounded">AI Biometric Service</span>
    <span>→</span>

    <span className="bg-gray-800 px-3 py-1 rounded">MySQL</span>

  </div>
  <div className="h-px bg-gray-800 my-8"></div>
</div>

</div>
  {/* Repo Links */}
<div className="flex gap-4 flex-wrap mb-6">

  <a 
    href="https://github.com/Abhishekmt18/secure-ecommerce-backend" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
  >
    Backend Repo
  </a>

  <a 
    href="https://github.com/Abhishekmt16/ecommerce-frontend" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
  >
    Frontend Repo
  </a>

  <a 
    href="https://github.com/Abhishekmt16/ai-biometric-service" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
  >
    AI Service
  </a>

</div>
<div className="h-px bg-gray-800 my-8"></div>
{/* Screenshots */}
<div className="grid md:grid-cols-2 gap-6 mt-6">

  <div className="bg-gray-900 rounded-lg p-3 hover:scale-[1.02] transition duration-300">
    <p className="text-sm text-gray-400 mb-2">Login Page</p>
    <img 
      src="/images/login.png" 
      className="w-full h-56 object-contain hover:scale-105 transition duration-300" 
    />
  </div>

  <div className="bg-gray-900 rounded-lg p-3 hover:scale-[1.02] transition duration-300">
    <p className="text-sm text-gray-400 mb-2">Products Page</p>
    <img 
      src="/images/products.png" 
      className="w-full h-56 object-contain hover:scale-105 transition duration-300" 
    />
  </div>

  <div className="bg-gray-900 rounded-lg p-3 hover:scale-[1.02] transition duration-300">
    <p className="text-sm text-gray-400 mb-2">Cart Page</p>
    <img 
      src="/images/cart.png" 
      className="w-full h-56 object-contain hover:scale-105 transition duration-300" 
    />
  </div>

<div className="bg-gray-900 rounded-lg p-3 hover:scale-[1.02] transition duration-300">
    <p className="text-sm text-gray-400 mb-2">Checkout (Low Risk)</p>
    <img 
      src="/images/checkout.png" 
      className="w-full h-56 object-contain hover:scale-105 transition duration-300" 
    />
  </div>

  <div className="bg-gray-900 rounded-lg p-3 hover:scale-[1.02] transition duration-300">
    <p className="text-sm text-gray-400 mb-2">Checkout (Medium Risk + OTP Verification)</p>
    <img 
      src="/images/otp.png" 
      className="w-full h-56 object-contain hover:scale-105 transition duration-300" 
    />
  </div>

  <div className="bg-gray-900 rounded-lg p-3 hover:scale-[1.02] transition duration-300">
    <p className="text-sm text-gray-400 mb-2">High Risk → Biometric Authentication</p>
    <img 
      src="/images/biometric.png" 
      className="w-full h-56 object-contain hover:scale-105 transition duration-300" 
    />
  </div>

  <div className="bg-gray-900 rounded-lg p-3 hover:scale-[1.02] transition duration-300">
    <p className="text-sm text-gray-400 mb-2">Orders Page</p>
    <img 
      src="/images/orders.png" 
      className="w-full h-56 object-contain hover:scale-105 transition duration-300" 
    />
  </div>

</div>
</div>
</section>
  );
}