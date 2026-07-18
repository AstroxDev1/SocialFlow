import type { ChangeEvent } from "react";

type Schedule = {
  id: number;
  title: string;
  description: string;
  date: string;
  platform: string;
  status: string;
  client: {
    companyName: string;
  } | null;
};

type ScheduleFormProps = {
  schedule: Schedule;
  onChange: (schedule: Schedule) => void;
  onSave: () => void;
  onCancel: () => void;
};

export default function ScheduleForm({
  schedule,
  onChange,
  onSave,
  onCancel,
}: ScheduleFormProps) {
  function updateField<K extends keyof Schedule>(
    field: K,
    value: Schedule[K]
  ) {
    onChange({
      ...schedule,
      [field]: value,
    });
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-xl font-semibold text-white">
        {schedule.id === 0 ? "Novo Agendamento" : "Editar Agendamento"}
      </h2>

      <input
        value={schedule.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateField("title", e.target.value)
        }
        className="mb-3 w-full rounded-lg bg-slate-800 p-3 text-white"
        placeholder="Título"
      />

      <textarea
        value={schedule.description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          updateField("description", e.target.value)
        }
        className="mb-3 w-full rounded-lg bg-slate-800 p-3 text-white"
        placeholder="Descrição"
        rows={4}
      />

      <input
        type="datetime-local"
        value={schedule.date ? schedule.date.slice(0, 16) : ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateField("date", e.target.value)
        }
        className="mb-3 w-full rounded-lg bg-slate-800 p-3 text-white"
      />

      <input
        value={schedule.platform}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateField("platform", e.target.value)
        }
        className="mb-5 w-full rounded-lg bg-slate-800 p-3 text-white"
        placeholder="Plataforma"
      />

      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-600"
        >
          Cancelar
        </button>

        <button
          onClick={onSave}
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          💾 Salvar
        </button>
      </div>
    </div>
  );
}