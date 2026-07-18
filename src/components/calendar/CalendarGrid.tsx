import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import type { EventInput, EventClickArg } from "@fullcalendar/core";

import api from "../../services/api";
import EventModal from "./EventModal";
import ScheduleForm from "../schedules/ScheduleForm";

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

export default function CalendarGrid() {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [selectedSchedule, setSelectedSchedule] =
    useState<Schedule | null>(null);

  const [creating, setCreating] = useState(false);

  const [newSchedule, setNewSchedule] = useState<Schedule>({
    id: 0,
    title: "",
    description: "",
    date: new Date().toISOString().slice(0, 16),
    platform: "",
    status: "PENDENTE",
    client: null,
  });

  useEffect(() => {
  async function loadSchedules() {
    try {
      const response = await api.get<Schedule[]>("/schedules");

      const calendarEvents: EventInput[] = response.data.map((schedule) => ({
        id: String(schedule.id),
        title: schedule.title,
        start: schedule.date,
        extendedProps: {
          schedule,
        },
      }));

      setEvents(calendarEvents);
    } catch (error) {
      console.error("Erro ao carregar calendário:", error);
    }
  }

  loadSchedules();
}, []);



  async function handleCreate() {
    try {
      const response = await api.post("/schedules", {
        title: newSchedule.title,
        description: newSchedule.description,
        date: newSchedule.date,
        platform: newSchedule.platform,
        clientId: null,
      });

      const created = response.data;

      setEvents((old) => [
        ...old,
        {
          id: String(created.id),
          title: created.title,
          start: created.date,
          extendedProps: {
            schedule: created,
          },
        },
      ]);

      setCreating(false);

      setNewSchedule({
        id: 0,
        title: "",
        description: "",
        date: new Date().toISOString().slice(0, 16),
        platform: "",
        status: "PENDENTE",
        client: null,
      });

      alert("Agendamento criado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar agendamento.");
    }
  }

  function handleEventClick(info: EventClickArg) {
    const schedule = info.event.extendedProps.schedule as Schedule;
    setSelectedSchedule(schedule);
  }

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Deseja realmente excluir este agendamento?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/schedules/${id}`);

      setEvents((oldEvents) =>
        oldEvents.filter((event) => event.id !== String(id))
      );

      setSelectedSchedule(null);

      alert("Agendamento excluído!");
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir.");
    }
  }

  async function handleUpdate(schedule: Schedule) {
    try {
      const response = await api.put(`/schedules/${schedule.id}`, {
        title: schedule.title,
        description: schedule.description,
        date: schedule.date,
        platform: schedule.platform,
      });

      const updatedSchedule = response.data;

      setEvents((oldEvents) =>
        oldEvents.map((event) =>
          event.id === String(updatedSchedule.id)
            ? {
                ...event,
                title: updatedSchedule.title,
                start: updatedSchedule.date,
                extendedProps: {
                  schedule: updatedSchedule,
                },
              }
            : event
        )
      );

      setSelectedSchedule(null);

      alert("Agendamento atualizado!");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar.");
    }
  }

   return (
    <>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">

        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setCreating(true)}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            + Novo Agendamento
          </button>
        </div>

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale={ptBrLocale}
          height="auto"
          events={events}
          eventColor="#2563eb"
          eventClick={handleEventClick}
        />
      </div>

      <EventModal
        schedule={selectedSchedule}
        onClose={() => setSelectedSchedule(null)}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />

      {creating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <ScheduleForm
              schedule={newSchedule}
              onChange={setNewSchedule}
              onSave={handleCreate}
              onCancel={() => {
                setCreating(false);

                setNewSchedule({
                  id: 0,
                  title: "",
                  description: "",
                  date: new Date().toISOString().slice(0, 16),
                  platform: "",
                  status: "PENDENTE",
                  client: null,
                });
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}