import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};

interface FilterDropdownProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export const FilterDropdown = ({
  label,
  value,
  options,
  onChange,
}: FilterDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () =>
      document.removeEventListener("mousedown", handler);
  }, []);

  const selected =
    options.find(o => o.value === value)?.label ||
    label;

  return (
    <div
      ref={ref}
      className="relative w-full sm:w-auto"
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          h-11
          min-w-[150px]
          px-4
          rounded-xl
          border
          border-[#e5e7eb]
          bg-white
          flex
          items-center
          justify-between
          gap-3
          hover:border-[#00bbff]
          transition-all
          shadow-sm
        "
      >
        <span className="text-sm font-medium">
          {selected}
        </span>

        <svg
          className={`w-4 h-4 transition ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute
            top-full
            mt-2
            w-full
            bg-white
            rounded-xl
            border
            border-[#e5e7eb]
            shadow-lg
            z-50
            overflow-hidden
          "
        >
          <button
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="
              w-full
              px-4
              py-3
              text-left
              text-sm
              hover:bg-[#197996] 
              hover:text-white
              transition-colors duration-300 ease-in-out
            "
          >
            All
          </button>

          {options.map(option => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="
                w-full
                px-4
                py-3
                text-left
                text-xs
                hover:bg-[#197996] 
                hover:text-white
                transition-colors duration-300 ease-in-out
              "
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};