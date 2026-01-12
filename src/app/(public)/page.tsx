import Header from "@/components/public/header";
import Hero from "@/components/public/hero";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container mx-auto mt-20 px-4 xl:px-5 min-h-[100dvh-80px]">
        <Hero />
      </main>
    </>
  );
}
