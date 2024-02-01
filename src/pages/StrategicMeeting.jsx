import React, { useState, useEffect } from 'react';
import { Calendar } from 'antd';
import companyService from '../services/company.service';

const StrategicMeeting = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [meeting, SetMeeting] = useState(false);

  const handleSelect = (value) => {
    setSelectedDay(value.toDate());
    //console.log('Selected day:', value.toDate());
  };

  const handleDate = async () => {
    SetMeeting((prevMeeting) => !prevMeeting);
  }

  useEffect(() => {
    const meetingRequest = async () => {
    if(meeting) {
        const body = {meeting: selectedDay.toDateString()}
        await companyService.postMeeting(body)
    } else {
        await companyService.deleteMeeting();
    }
  }

  meetingRequest();
}, [meeting])

return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Strategic Meeting</h1>
  
      <p className="mb-2 md:mb-4">
        Hello valued customer! Our strategic analysis page provides information about the valuable services we offer to guide investment banks in the IPO process for unicorn companies.
      </p>
  
      <p className="mb-2 md:mb-4">
        On our strategic analysis page, you can access detailed information about Clusterwords Analysis, Ratings Analysis, Most Frequent Words Analysis, and other analysis types to gain insights that will help us better understand your business.
      </p>
  
      <p className="mb-2 md:mb-4">
        If you would like to request a detailed meeting or get more information, please arrange your appointment. We are eager to serve you better!
      </p>
  
      {meeting && <h2 className='text-xl md:text-2xl'>Your next strategic meeting: {selectedDay.toDateString()}</h2>}
  
      <div className="mb-4">
        <Calendar onSelect={handleSelect} />
      </div>
  
      <button onClick={handleDate} className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-full md:w-auto">
        {meeting ? <p>Cancel meeting</p> : <p>Request Meeting</p>}
      </button>
    </div>
  );
  
};

export default StrategicMeeting;
