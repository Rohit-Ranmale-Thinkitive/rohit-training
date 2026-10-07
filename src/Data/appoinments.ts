export interface Appoinment {
    id : number;
    patientName  : string;
    doctorName : string;
    time : string;
    type : string;
    status: "Confirmed" | "Pending" | "Completed";
}

export const appoinments : Appoinment[] = [
    {
        id: 1,
        patientName: "Rohit Sharma",
        doctorName: "Dr.Mahesh Patil",
        time: "10.30AM",
        type: "Follow-up",
        status: "Confirmed"
    },
    {
        id: 2,
        patientName: "Virat Kohli",
        doctorName: "Dr.Rohit Ranmale",
        time: "4.30PM",
        type: "Health Check",
        status: "Pending"
    },
    {
        id: 3,
        patientName: "MS Dhnoni",
        doctorName: "Dr. Sandip Rane"  ,
        time: "3.30PM",
        type: "General Consultation",
        status: "Confirmed"
    },

];

