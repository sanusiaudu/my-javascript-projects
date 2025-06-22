import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    

    useEffect(() => {
        const updateTime = () => {
        let current = new Date();
        let dayName = current.getDay();
        let month = current.getMonth();
        let year = current.getFullYear();
        let day = current.getDate();
        let hour = current.getHours();
        let min = current.getMinutes();
        let sec = current.getSeconds();

        let am_pm = hour >= 12 ? 'PM' : 'AM';
        if (hour === 0) hour = 12;
        if (hour > 12) hour -= 12;

        hour = hour < 10 ? '0' + hour : hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;

        let currentTime = `${hour}:${min}:${sec} ${am_pm}`;

        let months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let currentDay = `${week[dayName]}, ${months[month]} ${day}, ${year}`;

        setTime(currentTime);
        setDate(currentDay);
    };

    // Call updateTime every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

    return (
        <div>
            <div className="text-4xl font-semibold tracking-[3px] border-8 border-solid border-[#8aa4c1] bg-[#f0f4f8] text-[#2b3e50] rounded-xl m-5 font-serif p-4 flex justify-center items-center">
                <p >{date}</p>
            </div>
            <div className="text-4xl font-semibold tracking-[3px] border-8 border-solid border-[#8aa4c1] bg-[#f0f4f8] text-[#2b3e50] rounded-xl m-5 font-serif p-4  flex justify-center items-center">
                <p > {time}</p>
            </div>

        </div>
    );
}

export default DigitalClock;