import About from "@/Components/Shared/About/About";
import Banner from "@/Components/Shared/Header/Banner";
import Services from "@/Components/Shared/ServicesSections/Services";
import Testimonials from "@/Components/Testimonials";



export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Testimonials></Testimonials>
    </div>
  );
}
