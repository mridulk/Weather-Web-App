window.addEventListener('load',()=> {

    let lat;
    let long;
    let temperaturedescription=document.querySelector(".temperature-description");
    let temperaturedegree=document.querySelector(".temperature-degree");
    let locationtimezone=document.querySelector(".location-timezone");
    let degreesection=document.getElementsByTagName("span");
    const wholesection=document.getElementsByClassName("temperature");
    const temperaturedegreecf=document.querySelector(".temperature-degreecf");
    const day1=document.getElementsByClassName("icon1");
    let dayy1=document.getElementsByClassName("day1");
    let dayy2=document.getElementsByClassName("day2");
    let dayy3=document.getElementsByClassName("day3");
    let dayy4=document.getElementsByClassName("day4");
    let dayy5=document.getElementsByClassName("day5");
    let dayy6=document.getElementsByClassName("day6");
    
    
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            //console.log(position);
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";
            const api=`${proxy}https://api.darksky.net/forecast/c748d1dd1faaecfab7f8afdf2cce7765/${lat},${long}`;
            fetch(api)
             .then(response=>{
            return response.json();
            })
            .then(dataa =>{
            console.log(dataa);
            const{temperature,icon}=dataa.currently;
            temperaturedegree.textContent=temperature;
            temperaturedescription.textContent=dataa.hourly.summary;
            locationtimezone.textContent=dataa.timezone;
            setIcons(icon,document.querySelector(".icon")); 
            var icon1=dataa.daily.data[0].icon;
            setIcons(icon1,document.querySelector(".icon1"));
            var icon2=dataa.daily.data[1].icon;
            setIcons(icon2,document.querySelector(".icon2"));
            var icon3=dataa.daily.data[2].icon;
            setIcons(icon3,document.querySelector(".icon3"));
            var icon4=dataa.daily.data[3].icon;
            setIcons(icon4,document.querySelector(".icon4"));
            var icon5=dataa.daily.data[4].icon;
            setIcons(icon5,document.querySelector(".icon5"));
            var icon5=dataa.daily.data[5].icon;
            setIcons(icon5,document.querySelector(".icon6"));
            console.log(temperaturedegreecf.textContent); 
            console.log(temperaturedegree.textContent);
            if(temperaturedegreecf.textContent=="F")
            {
                temperaturedegree.textContent=(temperaturedegree.textContent-32)*0.5;
                temperaturedegreecf.textContent="C";
            }   

            });
            var j = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
            var d = new Date();
            var day=(j[d.getDay() - 1]);
            console.log(day);
            var fal=0;
            var con;
            for (i=0;i<7;i++)
            {
                if(j[i]==day)
                {
                    fal=1
                    con=i;
                    break;
                }
               
            }
            if(con!=(j.length-1))
            {
            dayy1.textContent=j[con+1];
            }
            console.log(j[con+1])

            
        });
        
        
    }
    function setIcons(icon,iconID){
        const skycons=new Skycons({color:"white"});
        const currentIcon =icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }
});
