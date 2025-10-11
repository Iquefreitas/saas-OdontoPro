import {
    Card,
    CardContent,
} from "@/components/ui/card"
import fotoImg from "../../../../public/foto1.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Prisma } from "@prisma/client";
import { PremiumCardBadge } from "./premium-badge";

type UserWithSubscription = Prisma.UserGetPayload<{
    include:{
        subscription: true,
    }
}>

interface ProfessionalsProps {
    professionals: UserWithSubscription[]
}

export function Professionals({ professionals }: ProfessionalsProps) {
    return (
        <section className="bg-gray-50 py-8">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8">

                {/* título responsivo */}
                <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 font-bold 
          text-transparent bg-clip-text bg-gradient-to-r
          from-emerald-600 via-emerald-400 to-green-600 animate-gradient-smooth">
                    Clínicas disponíveis
                </h2>

                {/* grid responsivo */}
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {professionals.map((clinic) => (
                        <Card
                            className="overflow-hidden p-0 hover:shadow-lg duration-300 rounded-xl"
                            key={clinic.id}
                        >
                            <CardContent className="p-0">
                                <div className="relative h-40 sm:h-48">
                                    <Image
                                        src={clinic.image ?? fotoImg}
                                        alt="Foto da clínica"
                                        fill
                                        className="object-cover"
                                    />

                                    {clinic?.subscription?.status === "active" && clinic?.subscription?.plan === "PROFESSIONAL" && <PremiumCardBadge/>}

                                </div>

                                <div className="p-3 sm:p-4 space-y-3 min-h-[160px] sm:space-y-4 flex flex-col justify-between">
                                    {/* nome + status */}
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="font-semibold text-base sm:text-lg leading-tight">
                                                {clinic.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                                                {clinic.address ?? "Endereço não informado.."}
                                            </p>
                                        </div>  
                                    </div>

                                    {/* botão responsivo */}
                                    <Link
                                        href={`/clinica/${clinic.id}`}
                                        target="_blank"
                                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex 
                                        items-center justify-center py-2 sm:py-2.5 rounded-md 
                                        text-sm sm:text-base font-medium"
                                    >
                                        Agendar horário
                                        <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>
            </div>
        </section>
    );
}
