import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import cardImage from "../../../public/foto1.png";
import { ArrowRight } from "lucide-react";

const CardClinic = () => {
  return (
    <Card className="pt-0 overflow-hidden gap-2">
      <CardHeader className="p-0">
        <div className="relative h-44 w-full">
          <Image
            src={cardImage}
            alt="Foto da clínica"
            className="object-cover"
            fill
          />
        </div>
      </CardHeader>

      <CardContent className="">
        <div className="flex justify-between">
          <h4 className="font-semibold">Lucas Felipe</h4>
          <span className="bg-emerald-500 rounded-full w-2.5 h-2.5"></span>
        </div>

        <p className="text-sm text-gray-500">
          Rua x, centro, Campo Grande - MS
        </p>
      </CardContent>

      <CardFooter>
        <Link
          href="#"
          className="bg-emerald-500 hover:bg-emerald-600 text-white py-1 rounded w-full flex justify-center gap-1"
        >
          Agendar horário
          <ArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardClinic;
