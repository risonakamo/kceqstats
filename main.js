window.onload=main;

function main()
{
    var pc=new Chart(document.querySelector(".pie"),{
        type:"pie",
        data:{
            datasets:[{
                data:[1,2,3]
            }],
            labels:["bob","jull","nop"]
        }
    });

    // loadTestJson("api-equip.json",(res)=>{
    //     console.log(res);
    // });
}

function loadTestJson(filename,callback)
{
    var r=new XMLHttpRequest();

    r.open("GET",filename);

    r.onreadystatechange=()=>{
        if (r.readyState==4)
        {
            callback(JSON.parse(r.response));
        }
    };

    r.send();
}