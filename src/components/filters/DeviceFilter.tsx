
import { useState } from "react";
import { HardDrive, CalendarIcon, Check, ChevronDown } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const devices = [
  { value: "camera-1", label: "Câmera 1 - Entrada" },
  { value: "camera-2", label: "Câmera 2 - Corredor" },
  { value: "camera-3", label: "Câmera 3 - Loja" },
  { value: "camera-4", label: "Câmera 4 - Estacionamento" },
  { value: "todos", label: "Todos os dispositivos" }
];

const DeviceFilter = () => {
  const [selectedDevices, setSelectedDevices] = useState<string[]>(["todos"]);
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const toggleDevice = (value: string) => {
    setSelectedDevices((current) => {
      if (value === "todos") {
        return ["todos"];
      }
      
      const withoutAll = current.filter(item => item !== "todos");
      
      if (current.includes(value)) {
        const result = withoutAll.filter(item => item !== value);
        return result.length ? result : ["todos"];
      } else {
        return [...withoutAll, value];
      }
    });
  };

  const getSelectedLabels = () => {
    if (selectedDevices.includes("todos")) return "Todos os dispositivos";
    return `${selectedDevices.length} dispositivo(s) selecionado(s)`;
  };

  return (
    <div className="flex items-center flex-wrap gap-4 p-4 mb-6 led-card animate-fade-in">
      <div className="flex flex-col gap-1">
        <div className="text-xs text-white/70 mb-1">Dispositivos</div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="w-[250px] justify-between bg-muted"
            >
              <div className="flex items-center gap-2">
                <HardDrive size={16} />
                <span className="truncate">{getSelectedLabels()}</span>
              </div>
              <div className="ml-2">
                {selectedDevices.length > 0 && !selectedDevices.includes("todos") && (
                  <Badge variant="secondary" className="mr-1 rounded-sm px-1 font-normal">
                    {selectedDevices.length}
                  </Badge>
                )}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Buscar dispositivo..." />
              <CommandEmpty>Nenhum dispositivo encontrado.</CommandEmpty>
              <CommandGroup>
                {devices.map((device) => (
                  <CommandItem
                    key={device.value}
                    onSelect={() => toggleDevice(device.value)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{device.label}</span>
                      {selectedDevices.includes(device.value) && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-xs text-white/70 mb-1">Data</div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[200px] justify-start text-left font-normal bg-muted",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione a data</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => date && setDate(date)}
              initialFocus
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <Button className="ml-auto bg-led-gradient-1 hover:opacity-90 transition-opacity">
        Aplicar Filtros
      </Button>
    </div>
  );
};

export default DeviceFilter;
