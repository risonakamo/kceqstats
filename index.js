window.onload=main;

var _apiAllEquip;
var _apiEquip;
var eqlist;

function main()
{
    getEquipData(()=>{
        eqlist=new _eqList;

        var piechart=new Chart(document.querySelector(".pie"),
        {
            type:"pie",
            data:genTypeDataset()
        });
    });
}

//load apiallequip and apiequip
//callback takes no arguments
function getEquipData(callback)
{
    var complete=0;
    var r=new XMLHttpRequest();

    r.open("GET","data/api-equip.json");

    r.onreadystatechange=()=>{
        if (r.readyState==4)
        {
            _apiAllEquip=JSON.parse(r.response);
            complete++;
            if (complete==2)
            {
                callback();
            }
        }
    }

    r.send();

    var r2=new XMLHttpRequest();

    r2.open("GET","data/player-equip.json");

    r2.onreadystatechange=()=>{
        if (r2.readyState==4)
        {
            _apiEquip=JSON.parse(r2.response);
            complete++;
            if (complete==2)
            {
                callback();
            }
        }
    }

    r2.send();
}