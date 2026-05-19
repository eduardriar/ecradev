type ToggleOption<T extends string> = {
    label: string;
    value: T;
};

type ToggleProps<T extends string> = {
    options: [ToggleOption<T>, ToggleOption<T>];
    value: T;
    onChange: (value: T) => void;
    ariaLabel?: string;
};

export default function Toggle<T extends string>({
    options,
    value,
    onChange,
    ariaLabel,
}: ToggleProps<T>) {
    return (
        <div
            role="radiogroup"
            aria-label={ariaLabel}
            className="inline-flex items-center rounded-full border border-border bg-background p-1 font-mono text-sm"
        >
            {options.map((option) => {
                const isActive = option.value === value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        onClick={() => onChange(option.value)}
                        className={`rounded-full px-3 py-1 transition-colors ${
                            isActive
                                ? "bg-foreground text-background"
                                : "text-foreground/70 hover:text-foreground"
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
