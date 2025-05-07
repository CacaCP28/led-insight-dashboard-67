
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DateRange } from "react-day-picker";

type FilterContextType = {
  selectedDevices: string[];
  setSelectedDevices: React.Dispatch<React.SetStateAction<string[]>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  dateRange: DateRange;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>;
  dateFilterType: "single" | "range";
  setDateFilterType: React.Dispatch<React.SetStateAction<"single" | "range">>;
  filtersApplied: boolean;
  applyFilters: () => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [selectedDevices, setSelectedDevices] = useState<string[]>(["todos"]);
  const [date, setDate] = useState<Date>(new Date());
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: undefined
  });
  const [dateFilterType, setDateFilterType] = useState<"single" | "range">("single");
  const [filtersApplied, setFiltersApplied] = useState<boolean>(false);

  const applyFilters = () => {
    setFiltersApplied(prev => !prev); // Toggle state to trigger re-renders
  };

  return (
    <FilterContext.Provider
      value={{
        selectedDevices,
        setSelectedDevices,
        date,
        setDate,
        dateRange,
        setDateRange,
        dateFilterType,
        setDateFilterType,
        filtersApplied,
        applyFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
