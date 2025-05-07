
import { useState } from "react";
import { HardDrive, CalendarIcon, Check, ChevronDown, CalendarRange } from "lucide-react";
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
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { DateRange } from "react-day-picker";
import { useFilters } from "@/contexts/FilterContext";

const devices = [
  { value: "camera-1", label: "Câmera 1 - Entrada" },
  { value: "camera-2", label: "Câmera 2 - Corredor" },
  { value: "camera-3", label: "Câmera 3 - Loja" },
  { value: "camera-4", label: "Câmera 4 - Estacionamento" },
  { value: "todos", label: "Todos os dispositivos" }
];

const DeviceFilter = () => {
  const {
    selectedDevices, 
    setSelectedDevices,
    date, 
    setDate,
    dateRange, 
    setDateRange,
    dateFilterType, 
    setDateFilterType,
    applyFilters
  } = useFilters();
  
  const [openDevicePopover, setOpenDevicePopover] = useState(false);

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
  
  const getDateDisplayText = () => {
    if (dateFilterType === "single") {
      return date ? format(date, "PPP", { locale: ptBR }) : "Selecione a data";
    } else {
      if (dateRange.from) {
        if (dateRange.to) {
          return `${format(dateRange.from, "dd/MM/yyyy")} até ${format(dateRange.to, "dd/MM/yyyy")}`;
        }
        return `A partir de ${format(dateRange.from, "dd/MM/yyyy")}`;
      }
      return "Selecione o intervalo";
    }
  };
  
  const handleApplyFilters = () => {
    // Simulando a aplicação dos filtros
    const dateInfo = dateFilterType === "single" 
      ? format(date, "dd/MM/yyyy") 
      : dateRange.from 
        ? dateRange.to 
          ? `${format(dateRange.from, "dd/MM/yyyy")} até ${format(dateRange.to, "dd/MM/yyyy")}`
          : `A partir de ${format(dateRange.from, "dd/MM/yyyy")}` 
        : "Sem data selecionada";
        
    toast({
      title: "Filtros aplicados",
      description: `Dispositivos: ${getSelectedLabels()}. Período: ${dateInfo}`,
    });
    
    // Chama o método para aplicar os filtros no contexto
    applyFilters();
  };

  return (
    <div className="flex items-center flex-wrap gap-4 p-4 mb-6 led-card animate-fade-in">
      <div className="flex flex-col gap-1">
        <div className="text-xs text-white/70 mb-1">Dispositivos</div>
        <Popover open={openDevicePopover} onOpenChange={setOpenDevicePopover}>
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
          <PopoverContent className="w-[250px] p-0 bg-popover" align="start">
            <Command className="bg-popover">
              <CommandInput placeholder="Buscar dispositivo..." />
              <CommandList>
                <CommandEmpty>Nenhum dispositivo encontrado.</CommandEmpty>
                <CommandGroup>
                  {devices.map((device) => (
                    <CommandItem
                      key={device.value}
                      onSelect={() => {
                        toggleDevice(device.value);
                        setOpenDevicePopover(false);
                      }}
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
              </CommandList>
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
                "w-[250px] justify-start text-left font-normal bg-muted",
                !date && !dateRange.from && "text-muted-foreground"
              )}
            >
              {dateFilterType === "single" ? (
                <CalendarIcon className="mr-2 h-4 w-4" />
              ) : (
                <CalendarRange className="mr-2 h-4 w-4" />
              )}
              {getDateDisplayText()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-popover" align="start">
            <Tabs 
              defaultValue="single" 
              value={dateFilterType} 
              onValueChange={(value) => setDateFilterType(value as "single" | "range")}
              className="p-2"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="single">Data única</TabsTrigger>
                <TabsTrigger value="range">Intervalo</TabsTrigger>
              </TabsList>
              <TabsContent value="single" className="mt-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  initialFocus
                  locale={ptBR}
                  className="pointer-events-auto"
                />
              </TabsContent>
              <TabsContent value="range" className="mt-2">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  initialFocus
                  locale={ptBR}
                  className="pointer-events-auto"
                />
              </TabsContent>
            </Tabs>
          </PopoverContent>
        </Popover>
      </div>
      
      <Button 
        className="ml-auto bg-led-gradient-1 hover:opacity-90 transition-opacity"
        onClick={handleApplyFilters}
      >
        Aplicar Filtros
      </Button>
    </div>
  );
};

export default DeviceFilter;
