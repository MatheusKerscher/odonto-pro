import Footer from "@/components/footer";
import CardClinic from "@/components/public/cardClinic";
import Header from "@/components/public/header";
import Hero from "@/components/public/hero";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container mx-auto mt-20 px-4 xl:px-5 min-h-[100dvh-80px]">
        <Hero />

        <section className="my-10">
          <h3 className="text-center text-xl md:text-2xl font-semibold">
            Clínicas
          </h3>

          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardClinic />
            <CardClinic />
            <CardClinic />
            <CardClinic />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
