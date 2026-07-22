interface Props {
  status: string;
}

export default function ClientStatus({
  status,
}: Props) {
  const isActive =
    status.toLowerCase() === "ativo";

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold

        ${
          isActive
            ? "bg-emerald-500/15 text-emerald-400"
            : "bg-rose-500/15 text-rose-400"
        }
      `}
    >
      <span
        className={`
          h-2
          w-2
          rounded-full

          ${
            isActive
              ? "bg-emerald-400"
              : "bg-rose-400"
          }
        `}
      />

      {isActive ? "Ativo" : "Inativo"}
    </span>
  );
}