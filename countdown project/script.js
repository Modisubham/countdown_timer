const endDate ="16 July 2023 12:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs =document.querySelectorAll("input")

function clock()
{
    const end =new Date(endDate)
    const now =new Date()
    const diff=(end-now)/1000; //to make in sec
    if(diff<0)
    {
        return;
    }
    inputs[0].value=Math.floor(diff/3600/24); //days
    inputs[1].value=Math.floor((diff/3600)%24);//hours
    inputs[2].value=Math.floor((diff/60)%60);//min
    inputs[3].value=Math.floor((diff)%60);
}
clock()

setInterval(
    () => {
        clock()
    },
    1000
)