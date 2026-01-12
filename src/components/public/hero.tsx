import Image from "next/image";
import { Button } from "../ui/button";
import heroImage from "../../../public/doctor-hero.png";

const Hero = () => {
  return (
    <section className="flex justify-center items-center gap-10">
      <article className="flex flex-col gap-3 max-w-2xl items-center sm:items-start">
        <h2 className="font-bold text-4xl lg:text-5xl text-black max-w-xl text-center sm:text-start">
          Encontre os melhores profissionais em um único local!
        </h2>

        <p className="text-base text-gray-600 text-center sm:text-start">
          Nós somos uma plataforma para profissionais da saúde com foco em
          agilizar seu atendimento de forma simplificada e organizada.
        </p>

        <Button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer w-fit">
          Profissionais disponíveis
        </Button>
      </article>

      <div className="hidden lg:block">
        <Image
          src={heroImage}
          alt="Profissional da área da saúde"
          className="object-cover"
          width={340}
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
