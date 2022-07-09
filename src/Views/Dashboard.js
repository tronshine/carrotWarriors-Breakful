import React, { Component }  from 'react';
import MonthCalendar from "../Components/MonthCalendar";
import EventCalendar from "../Components/EventCalendar";
import { useSelector } from "react-redux";
import TimeStamps from "../Components/TimeStamps";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(selectedDate);

  return (
    <>
    {
      isLoggedIn ? (
          <>

            <div className="calendar-wrapper">

              <div className='dashboardRow'>
                <MonthCalendar/>
                <TimeStamps />
              </div>

            </div>
          </>
      ) : (<h1>You are not logged in</h1>)
    }

    
    
    </>
  );
};

export default Dashboard;
