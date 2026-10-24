import Image from "next/image";
import { Heart, ShieldCheck, Clock, UserRoundCheck } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300" id="about-mission">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-teal-200/40 dark:bg-teal-900/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image Content with decorative elements */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.02]">
              <Image
                src="https://i.ibb.co.com/2YqnpX4M/hero-greatercare-large2.jpg"
                alt="Caregiver tending to elderly woman"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl flex items-center gap-4 animate-bounce z-20">
              <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-full text-teal-600 dark:text-teal-400">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">10k+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Families Served</p>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 p-4 rounded-xl shadow-lg border border-teal-100 dark:border-teal-900 z-20 hidden md:block">
              <p className="text-teal-600 text-sm font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Trusted Care
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold text-sm mb-6 tracking-wide uppercase">
              About Our Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
              Our Mission to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Transform Care</span>
            </h2>

            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              <p>
                At CareNest, we believe that every family deserves access to compassionate, reliable care. We are a dedicated platform bridging the gap between families in need and professional caregivers for both children and the elderly.
              </p>
              <p>
                Our mission is to <strong>empower families</strong> by connecting them with vetted, trustworthy professionals, ensuring that your loved ones receive the dignity, comfort, and attention they deserve—right in the sanctuary of their own home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Verified Experts</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Rigorous background checks and training validation for all staff.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <UserRoundCheck className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Compassionate Care</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">We prioritize empathy alongside medical and childcare skills.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Flexible Support</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">From hourly babysitting to 24/7 elderly care, we adapt to you.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Peace of Mind</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Rest easy knowing your loved ones are in capable, loving hands.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
