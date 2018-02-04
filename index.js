window.onload=main;

var _apiAllEquip;
var _apiEquip;

function main()
{
    var r=new XMLHttpRequest();

    r.open("GET","data/api-equip.json");

    r.onreadystatechange=()=>{
        if (r.readyState==4)
        {
            _apiAllEquip=JSON.parse(r.response);
        }
    }

    r.send();

    var r2=new XMLHttpRequest();

    r2.open("GET","data/player-equip.json");

    r2.onreadystatechange=()=>{
        if (r2.readyState==4)
        {
            _apiEquip=JSON.parse(r2.response);
        }
    }

    r2.send();
}