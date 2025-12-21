import hero from "../../assets/About.png";

const AboutUs = () => {
  return (
    <div className="pt-14 md:pt-16">

      {/* ================= ABOUT HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#e6f4ee" }}>
            Building modern, secure, and scalable digital solutions for businesses worldwide.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#1f7a4d" }}
              >
                Who We Are
              </h2>

              <p className="mb-4 leading-relaxed" style={{ color: "#1e293b" }}>
                We are a dedicated team of developers and designers passionate about building modern,
                secure, and scalable digital solutions. Our focus is on creating high-quality websites,
                e-commerce platforms, and custom web applications that help businesses grow online.
              </p>

              <p className="mb-4 leading-relaxed" style={{ color: "#1e293b" }}>
                We specialize in Node.js, React, modern UI/UX design, and secure backend development,
                ensuring fast performance and a smooth user experience. From small business websites
                to full-scale e-commerce systems, we deliver solutions that are reliable, affordable,
                and future-ready.
              </p>

              <p className="leading-relaxed" style={{ color: "#1e293b" }}>
                Our mission is simple: turn ideas into powerful digital products while maintaining
                transparency, quality, and long-term support for our clients.
              </p>
            </div>

            {/* Core Values */}
            <div
              className="p-8 rounded-xl shadow"
              style={{ backgroundColor: "#e6f4ee" }}
            >
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: "#145a32" }}
              >
                Our Core Values
              </h3>

              <ul className="space-y-4" style={{ color: "#1e293b" }}>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1f7a4d" }}></span>
                  Quality & Performance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1f7a4d" }}></span>
                  Security & Scalability
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1f7a4d" }}></span>
                  Transparency & Trust
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1f7a4d" }}></span>
                  Long-Term Client Support
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
