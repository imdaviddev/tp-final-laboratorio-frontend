import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Package {
  id: number
  name: string
  description: string
}

const packages: Package[] = [
  { id: 1, name: "Paquete A", description: "Contiene artículos frágiles. Manipular con cuidado." },
  { id: 2, name: "Paquete B", description: "Paquete urgente. Entrega prioritaria." },
  { id: 3, name: "Paquete C", description: "Contiene documentos confidenciales." },
  { id: 4, name: "Paquete D", description: "Artículos electrónicos. Mantener seco." },
  { id: 5, name: "Paquete E", description: "Productos perecederos. Mantener refrigerado." },
  { id: 6, name: "Paquete F", description: "Materiales peligrosos. Seguir protocolos de seguridad." },
  { id: 7, name: "Paquete G", description: "Artículos de gran valor. Requiere firma." },
  { id: 8, name: "Paquete H", description: "Contiene muestras médicas. Manipular con precaución." },
  { id: 9, name: "Paquete I", description: "Equipo deportivo. Tamaño grande." },
  { id: 10, name: "Paquete J", description: "Artículos de colección. Tratar con cuidado." },
]

function PackagePopover({ pkg }: { pkg: Package }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {pkg.name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{pkg.name}</h4>
            <p className="text-sm text-red-500">{pkg.description}</p>
          </div>
          <div className="flex justify-center">
            <Button 
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={() => {
                console.log(`Escanear QR para ${pkg.name}`)
                setIsOpen(false)
              }}
            >
              Escanear QR
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function Component() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Lista de Paquetes</h2>
      <ScrollArea className="h-[400px]">
        <div className="space-y-2">
          {packages.map((pkg) => (
            <PackagePopover key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}