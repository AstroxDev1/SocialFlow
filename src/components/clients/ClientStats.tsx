import {
  Users,
  UserCheck,
  UserX,
  Tags,
} from "lucide-react";

interface Props {
  total: number;
  active: number;
  inactive: number;
  niches: number;
}

const cards = (
  total: number,
  active: number,
  inactive: number,
  niches: number
) => [
  {
    title: "Clientes",
    value: total,
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Ativos",
    value: active,
    icon: UserCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Inativos",
    value: inactive,
    icon: UserX,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    title: "Nichos",
    value: niches,
    icon: Tags,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

export default function ClientStats({
  total,
  active,
  inactive,
  niches,
}: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards(total, active, inactive, niches).map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-[#121722]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-xl
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {card.value}
                </h2>
              </div>

              <div
                className={`
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  ${card.bg}
                  ${card.color}
                `}
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}