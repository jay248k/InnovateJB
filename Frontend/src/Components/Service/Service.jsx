import hero from "../../assets/Service.png";

const Service = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}> {/* Dark White */}

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        </div>
      </section>

      {/* ================= E-COMMERCE ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#1e293b' }}>
            🛒 E-Commerce Website Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Basic */}
            <div
              className="p-8 rounded-xl shadow hover:shadow-lg transition"
              style={{ backgroundColor: '#e6f4ee' }} // Light Green
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>Basic E-Commerce</h3>
              <p className="font-bold text-lg mb-4" style={{ color: '#1f7a4d' }}>₹25,000 – ₹40,000</p>
              <ul className="space-y-2" style={{ color: '#64748b' }}>
                <li>✔ 5–10 Products</li>
                <li>✔ Cart & Checkout</li>
                <li>✔ COD Payment</li>
                <li>✔ Admin Panel</li>
                <li>✔ Template-based Design</li>
              </ul>
              <p className="mt-4 text-sm" style={{ color: '#64748b' }}>👉 Best for small shops & startups</p>
            </div>

            {/* Standard */}
            <div
              className="p-8 rounded-xl shadow-lg border-2 transition hover:border-[#145a32]"
              style={{ backgroundColor: '#e6f4ee', borderColor: '#1f7a4d' }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>Standard E-Commerce</h3>
              <p className="font-bold text-lg mb-4" style={{ color: '#1f7a4d' }}>₹50,000 – ₹80,000</p>
              <ul className="space-y-2" style={{ color: '#64748b' }}>
                <li>✔ Unlimited Products</li>
                <li>✔ User Login / Signup</li>
                <li>✔ Online Payments</li>
                <li>✔ Order Management</li>
                <li>✔ Admin Dashboard</li>
                <li>✔ Mobile Responsive</li>
                <li>✔ SEO Basics</li>
              </ul>
              <p className="mt-4 text-sm" style={{ color: '#64748b' }}>👉 Most demanded for growing businesses</p>
            </div>

            {/* Advanced */}
            <div
              className="p-8 rounded-xl shadow hover:shadow-lg transition"
              style={{ backgroundColor: '#e6f4ee' }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>Advanced / Custom</h3>
              <p className="font-bold text-lg mb-4" style={{ color: '#1f7a4d' }}>₹1,00,000 – ₹3,00,000+</p>
              <ul className="space-y-2" style={{ color: '#64748b' }}>
                <li>✔ Custom UI/UX</li>
                <li>✔ Multi-Vendor</li>
                <li>✔ GST Invoices</li>
                <li>✔ Coupons & Offers</li>
                <li>✔ Inventory Management</li>
                <li>✔ API-based Backend (Node.js)</li>
              </ul>
              <p className="mt-4 text-sm" style={{ color: '#64748b' }}>👉 For large brands & startups</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OTHER WEBSITES ================= */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>🧾 Business / Company Website</h2>
            <p className="font-semibold" style={{ color: '#1f7a4d' }}>₹8,000 – ₹40,000</p>
            <ul className="mt-3 space-y-2" style={{ color: '#64748b' }}>
              <li>✔ Responsive Design</li>
              <li>✔ Contact Form</li>
              <li>✔ CMS / Blog</li>
              <li>✔ SEO Optimization</li>
              <li>✔ Fast Loading</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>🎓 Portfolio / Personal Website</h2>
            <p className="font-semibold" style={{ color: '#1f7a4d' }}>₹5,000 – ₹10,000</p>
            <ul className="mt-3 space-y-2" style={{ color: '#64748b' }}>
              <li>✔ Students</li>
              <li>✔ Freelancers</li>
              <li>✔ Creators</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= WEB APPS ================= */}
      <section className="py-20" style={{ backgroundColor: '#e6f4ee' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1e293b' }}>🧠 Web Apps / Custom Software</h2>
          <p className="font-semibold mb-6" style={{ color: '#1f7a4d' }}>₹60,000 – ₹5,00,000+</p>
          <p style={{ color: '#64748b' }}>CRM • ERP • Booking Systems • Admin Dashboards • Custom APIs</p>
        </div>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="py-20" style={{ backgroundColor: '#1f7a4d', color: 'white' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">🔁 Maintenance & Support</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div style={{ backgroundColor: '#e6f4ee', color: '#1e293b' }} className="p-6 rounded-lg">
              Hosting & Server: ₹1,000 – ₹3,000 / month
            </div>
            <div style={{ backgroundColor: '#e6f4ee', color: '#1e293b' }} className="p-6 rounded-lg">
              Bug Fixes: ₹1,000 – ₹2,000 / month
            </div>
            <div style={{ backgroundColor: '#e6f4ee', color: '#1e293b' }} className="p-6 rounded-lg">
              Content Updates: ₹1,000 – ₹2,500 / month
            </div>
            <div style={{ backgroundColor: '#e6f4ee', color: '#1e293b' }} className="p-6 rounded-lg">
              Security & Backups: ₹1,000 / month
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service;
