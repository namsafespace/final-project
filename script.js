//This script responds to a button click 
document.getElementById("btn").onclick=function()
{
    document.getElementById("output").innerText="Welcome to our website🎊🎉";
};

//Counter animation on page load window.onload=function()
{const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{
        counter.innerText="0";
        const updatecount=()=>{}
            const target=+counter.getAttribute("data-target");
            const count=+counter.innerText;
            const speed=20;//Lower is faster

            const increment=Math.ceil(target/100);//Step value
            if(count<target){
                counter.innerText=count+increment;
                setTimeout(updateCount,speed);
            }else{counter.innerText=target;//Ensure it finishes at exact target}
        };
        updateCount();
    });
};