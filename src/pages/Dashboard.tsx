import { useEffect, useState } from "react";

import Header from "../components/Header";
import AppointmentList from "../components/AppoinmentList";
import AppointmentForm from "../components/AppoinmentForm";

import Toast from "../components/Toast";

import {
  createAppoinment,
  getAppoinments,
} from "../services/appoinmentService";

import type { Appoinment } from "../Data/appoinments";

function Dashboard() {
  const [appointments, setAppointments] =
    useState<Appoinment[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [editingAppointment, setEditingAppointment] =
    useState<Appoinment | null>(null);

    const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAppoinments();

        setAppointments(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);


  const addAppointment = async (
    patientName: string,
    doctorName: string,
    time: string
  ) => {
    try {
      const newAppointment = await createAppoinment({
        patientName,
        doctorName,
        time,
        type: "Follow-up",
        status: "Pending",
      });

      setAppointments((currentAppointments) => [
        ...currentAppointments,
        newAppointment,
      ]);

      setToastMessage("Appoinment Added Succedfully!")

      setTimeout(() => {
        setToastMessage("");
      },3000)
    } catch (error) {
      console.error(error);
    }
  };

  const editAppointment = (
    appointment: Appoinment
  ) => {
    setEditingAppointment(appointment);
  };


  const updateAppointment = (
    id: number,
    patientName: string,
    doctorName: string,
    time: string
  ) => {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              patientName,
              doctorName,
              time,
            }
          : appointment
      )
    );

    setEditingAppointment(null);

    setToastMessage("Appoinment Updated Succesfully!");

    setTimeout(() => {
        setToastMessage("");
    },3000)
  };


  const deleteAppointment = (id: number) => {
    setAppointments((currentAppointments) =>
      currentAppointments.filter(
        (appointment) => appointment.id !== id
      )
    );

    setToastMessage("Appoinment Deleted Succesfully!")

    setTimeout(() => {
        setToastMessage("");
    },3000)
  };


  const completeAppointment = (id: number) => {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status: "Completed",
            }
          : appointment
      )
    );

    setToastMessage("Appoinment Mark as Completed");

    setTimeout(() => {
        setToastMessage("");
    },3000)
  };

  if (loading) {
    return <p>Loading appointments...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Header />

        {toastMessage && <Toast message={toastMessage} />}
      <main>
        <h2>Today's Appointments</h2>

        <AppointmentForm
          onAddAppointment={addAppointment}
          onUpdateAppoinment={updateAppointment}
          editingAppoinment={editingAppointment}
        />

        <AppointmentList
          appoinments={appointments}
          onDelete={deleteAppointment}
          onComplete={completeAppointment}
          onEdit={editAppointment}
        />
      </main>
    </div>
  );
}

export default Dashboard;