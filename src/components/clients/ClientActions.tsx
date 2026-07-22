import { useEffect, useRef, useState } from "react";
import {
  MoreVertical,
  Pencil,
  CalendarPlus,
  Trash2,
} from "lucide-react";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
  onSchedule?: () => void;
}

export default function ClientActions({
  onEdit,
  onDelete,
  onSchedule,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="
          rounded-lg
          p-2
          text-slate-400
          transition
          hover:bg-slate-800
          hover:text-white
        "
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-2
            w-52
            overflow-hidden
            rounded-xl
            border
            border-slate-800
            bg-[#121722]
            shadow-2xl
          "
        >
          <button
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
            className="
              flex
              w-full
              items-center
              gap-3
              px-4
              py-3
              text-sm
              text-white
              transition
              hover:bg-slate-800
            "
          >
            <Pencil size={16} />
            Editar
          </button>

          {onSchedule && (
            <button
              onClick={() => {
                setOpen(false);
                onSchedule();
              }}
              className="
                flex
                w-full
                items-center
                gap-3
                px-4
                py-3
                text-sm
                text-white
                transition
                hover:bg-slate-800
              "
            >
              <CalendarPlus size={16} />
              Agendar post
            </button>
          )}

          <button
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
            className="
              flex
              w-full
              items-center
              gap-3
              px-4
              py-3
              text-sm
              text-rose-400
              transition
              hover:bg-rose-500/10
            "
          >
            <Trash2 size={16} />
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}