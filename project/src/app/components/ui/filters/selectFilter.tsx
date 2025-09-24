import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

export interface FilterOption {
  value: string;
  label: string;
}

export interface SelectFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  placeholder?: string;
  width?: string;
  allowClear?: boolean;
  clearLabel?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function SelectFilter({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select...",
  allowClear = true,
  clearLabel = "All",
  className = "",
  icon
}: SelectFilterProps) {
  const handleValueChange = (newValue: string) => {
    if (newValue === "none" && allowClear) {
      onChange("");
    } else {
      onChange(newValue);
    }
  };

  return (
    <Select value={value || "none"} onValueChange={handleValueChange}>
      <SelectTrigger className={`w-full md:w-48 ${className}`}>
        {icon && icon}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {allowClear && (
          <SelectItem value="none">{clearLabel}</SelectItem>
        )}
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}