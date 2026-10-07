## Flow of Project 


Dashboard sending data to the AppoinmentList


AppoinmentList passes appoinment to AppoinmentCard


ApooinmentCard receives it and display the data.


## Delete working flow
Dashboard
   ↓
onDelete={deleteAppointment}
   ↓
AppointmentList
   ↓
AppointmentCard
   ↓
onDelete()   And then dashboard change the state.


## Add Appoinment Flow
User
 ↓
AppointmentForm
 ↓
handleSubmit()
 ↓
onAddAppointment()
 ↓
Dashboard.addAppointment()
 ↓
setAppointments()
 ↓
appointments changes
 ↓
React re-renders
 ↓
AppointmentList
 ↓
AppointmentCard
 ↓
New appointment appears


## Props Concept

Dashboard -> AppoinmentList -> AppoinmentCard
