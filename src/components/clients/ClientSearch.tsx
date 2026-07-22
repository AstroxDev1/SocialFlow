import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ClientSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquisar clientes..."
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-800
          bg-[#121722]
          pl-11
          pr-11
          text-sm
          text-white
          outline-none
          transition
          placeholder:text-slate-500
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
        "
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-md
            p-1
            text-slate-500
            transition
            hover:bg-slate-700
            hover:text-white
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}