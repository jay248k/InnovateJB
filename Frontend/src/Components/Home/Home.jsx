import { useEffect } from "react";
import hero from "../../assets/Home.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-[#f8f9fa]">

      {/* ================= HERO SECTION ================= */}
      <section
  className="relative h-screen flex items-center justify-center text-center"
  style={{
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-4xl px-6 text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
      Innovate. Secure. Transform.
    </h1>

    <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
      JB IT Services delivers secure, scalable, and innovative digital
      solutions including web development, e-commerce platforms, and
      enterprise-grade backend systems.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-7 py-3 rounded-lg font-semibold shadow-lg transition">
        Get Free Consultation
      </button>

      <button className="border-2 border-white text-white px-7 py-3 rounded-lg hover:bg-white hover:text-[#0f766e] transition">
        View Portfolio
      </button>
    </div>
  </div>
</section>


      <hr className="border-0 h-[1px] bg-[#a7d7c5] w-full my-6" />

      {/* ================= SERVICES ================= */}
      <section className="py-14 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Website Development",
              "E-commerce Solutions",
              "Custom Web Applications",
              "Backend API Development",
              "UI/UX Design",
              "Website Maintenance",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#1f7a4d]">
                  {service}
                </h3>
                <p className="text-[#64748b]">
                  High-quality, secure, and scalable solutions tailored to your business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-[1px] bg-[#a7d7c5] w-full my-6" />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Modern Technology",
              "Secure Development",
              "Affordable Pricing",
              "On-Time Delivery",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl hover:border-[#1f7a4d] hover:bg-[#e6f4ee] transition"
              >
                <p className="font-semibold text-[#1e293b]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-[1px] bg-[#a7d7c5] w-full my-6" />

      {/* ================= PROJECTS ================= */}
      <section className="py-14 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">
            Our Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "E-commerce Website",
              "Business Website",
              "Admin Dashboard",
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#1f7a4d] mb-2">
                  {project}
                </h3>
                <p className="text-[#64748b]">
                  A professional and scalable solution built with modern technologies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-[1px] bg-[#a7d7c5] w-full my-6" />

      {/* ================= TECH STACK ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-8">
            Technologies We Use
          </h2>

          <div className="flex flex-wrap justify-center gap-6 font-medium text-[#1e293b]">
            {["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border rounded-lg hover:bg-[#e6f4ee] hover:border-[#1f7a4d] transition"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <hr className="border-0 h-[1px] bg-[#a7d7c5] w-full my-6" />

      

    </div>
  );
};

export default Home;
