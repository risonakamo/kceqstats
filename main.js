window.onload=premain;

var dataloader;
var datacontrol;

function premain()
{
    dataloader=new _dataLoader(main);
    datacontrol=new _dataControl;
}

function main()
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

    var pc=new Chart(datacontrol.echart,datacontrol.chartConvert(dataloader.typeeq));
}