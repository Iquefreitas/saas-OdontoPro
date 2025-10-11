import { Header } from "./_components/header"
import { Hero } from "@/app/(public)/_components/hero"
import { Professionals } from "./_components/professionals"
import { Footer } from "./_components/footer"
import Services from "../(panel)/dashboard/services/page"
import { getProfessionals } from "./_data-access/get-professionals"

export const revalidate = 120;

export default async function Home() {

  const professionals = await getProfessionals();
  
  return (
    <div>
      <Header />
      <div>
        <Hero />
        <Professionals professionals={professionals || []} />
        <Footer />
      </div>

    </div>
  )

}

