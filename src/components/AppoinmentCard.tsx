import type { Appoinment } from "../Data/appoinments";

interface AppoinmentCardProps{
    appoinment :  Appoinment;
    onDelete:(id:number) => void;
    onComplete:(id:number)=> void;
    onEdit:(appoinment : Appoinment) => void;
}

function AppoinmentCard ( {appoinment,onDelete,onComplete,onEdit} : AppoinmentCardProps) {
    return (
        <div>
            <h3> {appoinment.patientName} </h3>
            <p> Doctor : {appoinment.doctorName} </p>
            <p> Time : {appoinment.time} </p>
            <p> Type: {appoinment.type}</p>
            <p> Status : {appoinment.status} </p>

            <button onClick={() => onComplete(appoinment.id)}>
                Mark as Completed
            </button>

            <button onClick={() => onEdit(appoinment)}>
                Edit
            </button>

            <button onClick={() => onDelete(appoinment.id)}>
                Delete
            </button>
        </div>
    )

}

export default AppoinmentCard;