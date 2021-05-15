import React,{useEffect,useState} from "react";
import "./css/style.css";
const Tempapp = ()=>{
    const [search,setsearch]=useState("Bangalore");
    const [city,setcity]=useState(null);

    const currDate=new Date().toLocaleDateString();
    var d=["SUN","MON","TUE","WED","THU","FRI","Sat"];
    var month=["Jan","Feb","March","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
    let currentime=new Date();
    let currday=d[currentime.getDay()];
    let currdate=currentime.getDate();
    let currmonth=month[currentime.getMonth()];
    let hour=currentime.getHours();
    let minute=currentime.getMinutes();

    let per="AM";
    if(hour>11){
        per="PM"
        if(hour>12)hour-=12;
    }
    if(minute<10){
        minute="0"+minute;
    }

        const fetchapi =()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ef12e9802e626118768c030e1c02d42a`
            const response=fetch(url)
            .then((response)=>response.json())
            .then((data)=>setcity(data));

        };


    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="text"
                className="inputField"
                placeholder="Search..."
                    onChange={(event)=>{
                        setsearch(event.target.value)


                    }}
                    
                    
                />
                <button className="btn" onClick={fetchapi}><i class="fas fa-search"></i></button>
                   
            </div>
            
            
            {
                !city || city.cod=="404"?(
                    <h1 id="error">Sorry No Data Found !</h1>
                ):(
                    <div>

            <div className="info">
            <div id="whitebox">
            <div id="bluebox">
            <h2><i class="fas fa-cloud-sun"></i>{" "}{hour}:{minute} {per}</h2>
                <h2>{currday},{currdate} {currmonth}</h2><br></br>
                </div>
                <br></br>
                 <h1> {city.main.temp}°C</h1>


                <h3>Min : {city.main.temp_min}°C | Max: {city.main.temp_max}°C</h3><br></br>
                <h1 className="location">

<i class="fa fa-street-view"> </i>{" "}{city.name},{city.sys.country}
</h1>
                </div>
            </div>
        

            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
        </div>

                )
            }
            </div>
        
        </>
    )
}
export default Tempapp;