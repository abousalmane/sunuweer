const jours=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const moisGreg=["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
const moisHeg=["Mouharram",	"Safar", "Rabii al awal", "Rabii ath-thani", "Joumada al oula",
            "Joumada ath-thania",	"Rajab", "Chaabane", "Ramadan", "Chawwal", "Dhou al qi`da", "Dhou al-hijja"];
const  hegYear=1442;

var monthNum=1;  
let firstDay= new Date('2020-09-17T19:05:00'); /* the first day of the current muslim month
                                   setting times to 19h 05Min will permit to make the day switch after the twilight */

let firstDayIndex = firstDay.getDay()%6 +1;
let prevLastDay = 29;
let lastDay = prevLastDay === 29 ? 30 :29;

// let lastDayInGreg=  firstDay.addDays(lastDay-1)

let currentDay= datediff(firstDay, new Date());
function datediff(first, second){
    return Math.ceil((second - first)/(1000*60*60*24));
}

/* Date.prototype.addDays = function(days){
    var date = new Date(this.valueOf());
    date.setDate(date.getDate()+days);
    return date;
}
*/
function fillDays(){
    let days= "";
    let month=document.querySelector(".month ul li:nth-child(3)");
    month.innerHTML=`${currentDay}<br/>${moisHeg[monthNum]}<br/>${hegYear}`
    for(let i=firstDayIndex-1;i>0;i--){
      days+=  `<li class="prev-date">${prevLastDay - i+1}</li>`;
    }
    for (let i = 1; i <= lastDay; i++) {
        if (
          i === currentDay) {
          days += `<li><span class="active">${i}</span></li>`;
        } else {
          days += `<li>${i}</li>`;
        }
      }

document.querySelector(".days").innerHTML=days;
}

document.querySelector(".prev").addEventListener("click",()=>{
  firstDay.setDate(firstDay.getDate()-prevLastDay);
  firstDayIndex=firstDay.getDay()%6+1;
  lastDay = prevLastDay;
  prevLastDay= lastDay === 29 ? 30 :29;
  monthNum--;

fillDays()
});
document.querySelector(".next").addEventListener("click",()=>{
  firstDay.setDate(firstDay.getDate()+lastDay);
  firstDayIndex=firstDay.getDay()%6+1;
  prevLastDay = lastDay;
  lastDay= lastDay === 29 ? 30: 29;
  monthNum++;

fillDays()
  });




fillDays()