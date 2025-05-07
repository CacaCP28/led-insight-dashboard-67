
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

// Define an interface for the stats data
export interface StatsData {
  totalVisitors: {
    value: string;
    trend: { value: number; isPositive: boolean };
  };
  totalContacts: {
    value: string;
    trend: { value: number; isPositive: boolean };
  };
  averageTime: {
    value: string;
    trend: { value: number; isPositive: boolean };
  };
}

// Base stats data
const baseStats: StatsData = {
  totalVisitors: {
    value: "1,248",
    trend: { value: 12, isPositive: true }
  },
  totalContacts: {
    value: "532",
    trend: { value: 8, isPositive: true }
  },
  averageTime: {
    value: "14 min",
    trend: { value: 5, isPositive: false }
  }
};

// Alternative stats data for different dates
const alternativeStats = {
  "2025-05-06": {
    totalVisitors: {
      value: "1,356",
      trend: { value: 15, isPositive: true }
    },
    totalContacts: {
      value: "612",
      trend: { value: 10, isPositive: true }
    },
    averageTime: {
      value: "12 min",
      trend: { value: 8, isPositive: true }
    }
  },
  "2025-05-05": {
    totalVisitors: {
      value: "1,105",
      trend: { value: 7, isPositive: false }
    },
    totalContacts: {
      value: "498",
      trend: { value: 3, isPositive: false }
    },
    averageTime: {
      value: "16 min",
      trend: { value: 2, isPositive: true }
    }
  },
  "2025-05-04": {
    totalVisitors: {
      value: "967",
      trend: { value: 5, isPositive: false }
    },
    totalContacts: {
      value: "452",
      trend: { value: 6, isPositive: false }
    },
    averageTime: {
      value: "18 min",
      trend: { value: 9, isPositive: true }
    }
  }
};

// Range stats data
const rangeStats = {
  "week": {
    totalVisitors: {
      value: "8,642",
      trend: { value: 11, isPositive: true }
    },
    totalContacts: {
      value: "3,785",
      trend: { value: 7, isPositive: true }
    },
    averageTime: {
      value: "15 min",
      trend: { value: 4, isPositive: true }
    }
  },
  "partial": {
    totalVisitors: {
      value: "5,327",
      trend: { value: 9, isPositive: true }
    },
    totalContacts: {
      value: "2,134",
      trend: { value: 5, isPositive: true }
    },
    averageTime: {
      value: "13 min",
      trend: { value: 3, isPositive: false }
    }
  }
};

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
  currentStats: StatsData;
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
  
  // Calculate the current stats based on filters
  const currentStats = React.useMemo(() => {
    if (dateFilterType === "single") {
      const dateKey = format(date, "yyyy-MM-dd");
      return alternativeStats[dateKey] || baseStats;
    } else if (dateFilterType === "range") {
      if (dateRange.from && dateRange.to) {
        // Full range selected
        return rangeStats.week;
      } else if (dateRange.from) {
        // Partial range (only from date)
        return rangeStats.partial;
      }
    }
    return baseStats;
  }, [date, dateRange, dateFilterType, filtersApplied]);

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
        applyFilters,
        currentStats
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
