import { useEffect, useState } from "react";
import type { Appoinment } from "../Data/appoinments";

interface AppointmentFormProps {
  onAddAppointment: (
    patientName: string,
    doctorName: string,
    time: string,
    // type:string
  ) => void;

  onUpdateAppoinment:(
    id:number,
    patientName:string,
    doctorName:string,
    time:string
  )=>void;

  editingAppoinment : Appoinment | null;
}

function AppointmentForm({
  onAddAppointment,onUpdateAppoinment, editingAppoinment
}: AppointmentFormProps) {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [time, setTime] = useState("");
//   const [type, setType] = useState("");

    useEffect(() => {
        if(editingAppoinment) {
            setPatientName(editingAppoinment.patientName);
            setDoctorName(editingAppoinment.doctorName);
            setTime(editingAppoinment.time)
        }
    },[editingAppoinment]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !patientName.trim() ||
      !doctorName.trim() ||
      !time 
    //   !type
    ) {
      return;
    }

    if(editingAppoinment) {
        onUpdateAppoinment(
            editingAppoinment.id,
            patientName,
            doctorName,
            time
        )
    } else {
        onAddAppointment(
            patientName,
            doctorName,
            time
        )
    }

    onAddAppointment(
      patientName,
      doctorName,
      time
    );

    setPatientName("");
    setDoctorName("");
    setTime("");
    // setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="patientName">
          Patient Name
        </label>

        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(event) =>
            setPatientName(event.target.value)
          }
          placeholder="Enter Patient Name"
        />
      </div>

      <div>
        <label htmlFor="doctorName">
          Doctor Name
        </label>

        <input
          id="doctorName"
          type="text"
          value={doctorName}
          onChange={(event) =>
            setDoctorName(event.target.value)
          }
          placeholder="Enter Doctor Name"
        />
      </div>

      <div>
        <label htmlFor="time">
          Time
        </label>

        <input
          id="time"
          type="time"
          value={time}
          onChange={(event) =>
            setTime(event.target.value)
          }
        />
      </div>

      {/* <div>
        <label htmlFor="type">
          Type
        </label>

        <input
          id="type"
          type="text"
          value={type}
          onChange={(event) =>
            setTime(event.target.value)
          }
          placeholder="Enter Type"
        />
      </div> */}

      <button type="submit">
        {editingAppoinment ? "Save Changes" : "Add Appoinment"}
        {/* Add Appointment */}
      </button>
    </form>
  );
}

export default AppointmentForm;