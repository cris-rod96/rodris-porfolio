import { DotIcon } from "@icons/DotIcon"
import { useEffect, useState } from "react"

const AvailabilityStatus = () => {
  const [isAvailable,setIsAvailable] = useState(false)

  const updateStatus = () => {
    const now = new Date()
    const formatter = Intl.DateTimeFormat("en-US", {
      timeZone: "America/Guayaquil",
      hour12: false,
      hour: "numeric"
    })

    const hour = Number(formatter.format(now))
    console.log(hour)
    setIsAvailable(hour > 7 && hour < 18)
  }

  useEffect(() => {
    updateStatus()
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval)
  },[])
  return (
    <div className="flex flex-row items-start justify-between">

      <picture className="aspect-square w-32 h-32 relative overflow-hidden rounded-md border-2 border-gray-500/20 shadow-md shadow-gray-500/20">
      <img src="/images/me.webp" alt="Foto de perfil de Cristhian Rodríguez" className={`absolute w-full h-full object-cover ${isAvailable ? "grayscale-0" : "grayscale"}`} />
      </picture>

      <div className={`flex items-center gap-1 px-5 py-2 font-bold rounded-md border ${isAvailable ? "bg-green-600/10 text-green-400 border-green-400" : "bg-red-600/5 text-red-400 border-red-400"}`} title="Disponible de 08:00 - 18:00">
        <DotIcon/>
        <span>{isAvailable ? "Conectado" : "Desconectado"}</span>
      </div>
    </div>
  )
}

export default AvailabilityStatus
