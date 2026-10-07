import { appoinments, type Appoinment } from "../Data/appoinments";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getAppoinments = async () : Promise<Appoinment[]>  => {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error("Failed to fetch appoinments");
    }

    const users = await response.json();

    const appoinments : Appoinment[] = users.map(
        (user : {
            id:number;
            name:string;
            username:string;
        }) => ({

            id:user.id,
            patientName:user.name,
            doctorName:`Dr.${user.username}`,
            time:"11.00AM",
            type:"Consultation",
            status:"Pending"
        })
    )   

    return appoinments;
}   


export const createAppoinment = async(
    appoinment:Omit<Appoinment,"id">
): Promise<Appoinment> => {
    const response = await fetch(API_URL , {
        method : "POST",

        headers : {
            "Content-Type" : "application/json",
        },

        body : JSON.stringify(appoinment),
    })

    if(!response.ok) {
        throw new Error("failed to create appoinment")
    }

    const data = await response.json();

    return {
        ...appoinment,
        id:data.id
    }
}