import { useState, useEffect, useId } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import { sanitizeSearch } from "../../utils/sanitize"
import { IoClose } from "react-icons/io5"

const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#999] shrink-0">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
    </svg>
)

interface SearchBarProps {
    onSearch: (value: string) => void
    placeholder: string
    debounceMs?: number
    externalValue?: string
    className?: string
}

export const SearchBar = ({ onSearch, placeholder = "Search...", debounceMs = 400, externalValue, className = "" }: SearchBarProps) => {
    const id = useId()
    const [inputValue, setInputValue] = useState(externalValue ?? "")
    const debouncedValue = useDebounce(inputValue, debounceMs)

    useEffect(() => {
        onSearch(sanitizeSearch(debouncedValue))
    }, [debouncedValue])

    useEffect(() => {
        if (externalValue !== undefined) setInputValue(externalValue)
    }, [externalValue])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleClear = () => {
        setInputValue("")
        onSearch("")
    }

    const isSearching = inputValue !== debouncedValue

    return (
        <div
            className={`flex-1 bg-[#f3f3f5] rounded-[10px] px-4 py-3 flex items-center gap-2.5 
        transition-shadow focus-within:shadow-[0_0_0_2px_#197996] ${className}`}
        >
            {/* Loading spinner while debounce is pending, else search icon */}
            {isSearching ? (
                <span className="w-4 h-4 border-2 border-[#197996] border-t-transparent rounded-full animate-spin shrink-0" />
            ) : (
                <SearchIcon />
                // or: <IconSearch /> — yung existing mo
            )}

            <input
                id={id}
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                autoComplete="off"
                spellCheck={false}
                maxLength={100}                    // secondary length guard
                aria-label={placeholder}
                className="border-none bg-transparent flex-1 text-[13px] text-[#111] outline-none placeholder:text-[#999]"
            />

            {/* Clear button — lumalabas lang may laman */}
            {inputValue && (
                <button
                    onClick={handleClear}
                    aria-label="Clear search"
                    className="text-[#999] hover:text-[#555] transition-colors shrink-0"
                >
                    <IoClose size={16} />
                </button>
            )}
        </div>
    )
}

