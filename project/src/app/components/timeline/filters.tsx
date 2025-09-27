import { Button } from "../ui/button";

interface FiltersProps {
  value: string[];
  onChange?: (value: string[]) => void;
}

export default function Filters({
  className,
  children,
  value, // default = all selected
  onChange,
  ...props
}: FiltersProps & React.ComponentProps<"div">) {
  const options = ["job", "project", "education"];

  const handleSelectAll = () => {
    if (!onChange) return;
    // Always reset to all options
    onChange(options);
  };

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onChange) return;
    const target = e.currentTarget.value;

    let newValue: string[];

    if (value.includes(target)) {
      // Deselect only if more than 1 is currently selected
      if (value.length > 1) {
        newValue = value.filter((v) => v !== target);
      } else {
        // If only 1 is left, keep it (don’t allow empty)
        newValue = value;
      }
    } else {
      // Add the new option
      newValue = [...value, target];
    }

    onChange(newValue);
  };

  return (
    <div
      className={`flex flex-wrap mx-10 gap-5 my-10 ${className}`}
      {...props}
    >
      <div>
        <Button
          variant={value.length === options.length ? "selected" : "outline"}
          onClick={handleSelectAll}
        >
          All
        </Button>
      </div>
      {options.map((opt) => (
        <div key={opt}>
          <Button
            variant={value.includes(opt) ? "selected" : "outline"}
            value={opt}
            onClick={handleToggle}
          >
            {opt === "job"
              ? "Work"
              : opt === "project"
              ? "Projects"
              : "Education"}
          </Button>
        </div>
      ))}
      {children}
    </div>
  );
}
