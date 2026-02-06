import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & Purpose
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a dedicated baby sitting and elderly care services platform
              focused on supporting families with safe, reliable, and compassionate care.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to connect families with trained and trustworthy caregivers,
              ensuring comfort, dignity, and peace of mind—right at home.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Trusted & verified caregivers</li>
              <li>✔ Child-safe and elderly-friendly care</li>
              <li>✔ Flexible booking & support</li>
              <li>✔ Care with respect and compassion</li>
            </ul>
          </div>

          {/* Image */}
          <div>
            <Image src="https://i.ibb.co/PGwWRsJw/Gemini-Generated-Image-h7crtth7crtth7cr.png" alt="About"
              width={600} height={700}
              className="w-full rounded-lg shadow"
            />
            {/* <img src="https://i.ibb.co/PGwWRsJw/Gemini-Generated-Image-h7crtth7crtth7cr.png" alt="" /> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
