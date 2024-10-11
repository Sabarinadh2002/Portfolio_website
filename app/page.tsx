import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Hero from "@/components/hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex
      justify-center items-center flex-col 
      mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav 
        navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProject />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
