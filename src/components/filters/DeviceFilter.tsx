
import { useState } from "react";
import { HardDrive, CalendarIcon, ChevronDown } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

const DeviceFilter = () => {
  const [device, setDevice] = useState<string>("camera-1");
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="flex items-center flex-wrap gap-4 p-4 mb-6 led-card animate-fade-in">
      <div className="flex items-center">
        <Select value={device} onValueChange={setDevice}>
          <SelectTrigger className="w-[200px] bg-muted">
            <div className="flex items-center gap-2">
              <HardDrive size={16} />
              <SelectValue placeholder="Selecione o dispositivo" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Câmeras</SelectLabel>
              <SelectItem value="camera-1">Câmera 1 - Entrada</SelectItem>
              <SelectItem value="camera-2">Câmera 2 - Corredor</SelectItem>
              <SelectItem value="camera-3">Câmera 3 - Loja</SelectItem>
              <SelectItem value="camera-4">Câmera 4 - Estacionamento</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center">
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
