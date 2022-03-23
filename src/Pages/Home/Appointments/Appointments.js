import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';
import Navigation from '../Shared/Navigation/Navigation';

const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppoinments date={date}></AvailableAppoinments>
        </div>
    );
};

export default Appointments;