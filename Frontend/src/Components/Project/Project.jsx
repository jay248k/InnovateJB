import { useEffect } from "react";
import hero from "../../assets/Project.png";

const Project = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-[#f8f9fa]">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#e6f4ee" }}>
            A showcase of real-world applications built with secure, scalable, and modern technologies.
          </p>
        </div>
      </section>

      {/* ================= PROJECT LIST ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-10">

          {/* Card Style */}
          {[
            {
              title: "💳 Digital Banking Platform",
              items: [
                "Implemented account management, fund transfers, and loan services",
                "Designed dynamic passbook and transaction history views",
                "Created secure admin dashboards for monitoring accounts, FDs, and loans",
                "Added mobile-to-mobile money transfers with secure authentication",
              ],
            },
            {
              title: "📰 Financial News Dashboard",
              items: [
                "Users can view financial news and filter articles by category",
                "Admins can add news with photo, title, description, and author",
                "Secure admin access to view and delete deployed articles",
              ],
            },
            {
              title: "📸 Instagram Clone",
              items: [
                "Login/Signup, Profile Management, password encryption using bcrypt",
                "Post creation, Likes, Comments, Follow/Unfollow system",
                "Stories, Direct Messaging, Block/Unblock features",
                "Cloudinary integration for image uploads",
                "Search, Explore, and Saved Posts functionality",
              ],
            },
            {
              title: "💼 Job Portal Platform",
              items: [
                "Candidate: Secure login, job browsing, filtering, application tracking",
                "Company / Recruiter: Post jobs, manage listings, filter candidates",
              ],
            },
            {
              title: "🌱 Fresh-Farm Platform",
              items: [
                "Farmer: Add, update, delete products with quantity and price",
                "Consumer: Buy directly from farmers, cart system, profile with address",
              ],
            },
            {
              title: "🍽️ Food & Restaurant Platform",
              items: [
                "Restaurant: Manage branches, products, receive orders",
                "Consumer: Cart, place orders, city-based restaurant filtering",
              ],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#1f7a4d" }}
              >
                {project.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2" style={{ color: "#1e293b" }}>
                {project.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>


    </div>
  );
};

export default Project;
