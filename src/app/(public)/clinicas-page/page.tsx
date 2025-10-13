
import { Professionals } from "../_components/professionals"
import { getProfessionals } from "../_data-access/get-professionals"

export default async function ClinicsPage() {
  // busca os profissionais do banco
  const professionals = await getProfessionals()

  return (
    <main className="w-full h-auto">
      <section className="relative bg-green-50 min-h-screen py-30 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none **z-0** overflow-hidden">
          <div className="absolute top-10 left-1/4 w-36 h-36 bg-emerald-200 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-16 w-48 h-48 bg-green-100 rounded-full opacity-20 animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-emerald-300/30 rounded-full blur-2xl"></div>
        </div>
        <div className="relative z-index">
          <Professionals professionals={professionals} />
        </div>
      </section>
    </main>
  )
}
