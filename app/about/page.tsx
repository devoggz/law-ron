// app/about/page.tsx
"use client";
import Image from "next/image";

export default function AboutPage() {
  const aboutSections = [
    {
      title: "More flexibility",
      description:
        "We are small and nimble, so we innovate faster. Fewer layers mean we adapt quickly and easily to your changing needs. A bonus is it makes us efficient too.",
    },
    {
      title: "More availability",
      description:
        "You get our BigLaw skills and more personal and focused attention, no matter your size or budget. Plus, our lawyers are not just good lawyers, they are good people too, so we know you will enjoy working with us.",
    },
    {
      title: "More simplicity",
      description:
        "We pride ourselves on making things simple and clear. The more clarity you have and the less you have to worry about, the better.",
    },
    {
      title: "More commitment",
      description:
        "In our firm, you are a partner in the sense that we are collaborative and dedicated. We go all the way and take our time to understand your goals, needs and concerns.",
    },
    {
      title: "More diversity",
      description:
        "We love the diversity in and out of our firm. We respect and value the differences between our people and we think it is good for business–yours and ours.",
    },
    {
      title: "More value",
      description:
        "Sometimes size does matter: being smaller means lower overheads, which translates to more economic benefits to you.",
    },
  ];

  return (
    <section className="w-full ">
      {/* HERO SECTION */}
      <div className="relative w-full h-[20vh] lg:h-[20vh] overflow-hidden">
        <Image
          src="/images/nairobi.jpg"
          alt="About RONN Law"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Who We Are
            </h1>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg lg:text-xl text-primary font-regular leading-relaxed">
            We are a Kenya-based law firm with top-rated and forward-thinking
            lawyers who can help you with creative legal strategies. We work
            with private clients, start-ups, medium-sized businesses, large
            local and multinational companies. When you work with us, you get
            more than just good lawyers.
          </p>
        </div>
      </div>

      {/* THE "MORE" SECTION */}
      <div className=" py-12">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in delivering more value in every aspect of our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutSections.map((section, index) => (
              <div
                key={section.title}
                className="bg-white p-8 border border-teal-200 hover:border-orange transition-all  duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                    <span className="text-white font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-gray-700 transition-colors duration-200">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 font-regular leading-relaxed text-sm">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OPTIONAL: Office Image Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden shadow-xl">
          <Image
            src="/images/nairobi.jpg"
            alt="RONN Law Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-white/90 max-w-2xl">
              Every case, every client, every time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
