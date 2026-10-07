import AppoinmentCard from "./AppoinmentCard";
import type { Appoinment } from "../Data/appoinments";

interface AppoinmentListProps {
    appoinments : Appoinment[];
    onDelete: (id:number) => void;
    onComplete:(id:number) => void;
    onEdit:(appoinment : Appoinment) => void;
}


function AppoinmentList ({appoinments,onDelete,onComplete,onEdit} : AppoinmentListProps) {
    return (
        <div>
            {
                appoinments.map((appoinment)=> (
                    <AppoinmentCard
                        key={appoinment.id}
                        appoinment={appoinment}
                        onDelete={onDelete}
                        onComplete={onComplete}
                        onEdit={onEdit}
                        />
                ))}
        </div>
    );
}

export default AppoinmentList;