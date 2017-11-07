window.onload=premain;

var dataloader;

function premain()
{
    // var pc=new Chart(document.querySelector(".pie"),{
    //     type:"pie",
    //     data:{
    //         datasets:[{
    //             data:[1,2,3]
    //         }],
    //         labels:["bob","jull","nop"]
    //     }
    // });

    dataloader=new _dataLoader(main);
}

function main()
{
    console.log(dataloader.playereq);
    console.log(dataloader.apieq);
}