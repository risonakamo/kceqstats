class _eqList
{
    constructor()
    {
        this.eqList=document.querySelector(".eq-list");

        //convert equipment type int to class name of type this.classes[type-1]
        this.classes=["dd-gun","ca-gun","bb-gun","sec-gun","torp","fighter","dive","tbomber","recon","seaplane","radar","sanshiki","ap","repair","antiair","green","depth","sonar","boiler","boat","gyro","subscout","torparmour","light","barrel","akashi","starshell","command","airwrench","aacontroller","wug","lookout","taitei","onigiri","oilbarrel","tank","landbomber","interceptor","jet1","jet2","airparts","subsonar","fighterseaplane","landbomber2"];
        this.classColours=["#df4848","#e12f2f","#c22222","#cebd00","#20659b","#63c473","#f36d6d","#599fd6","#edb404","#8fcc99","#e89a35","#547d5c","#902828","#b2b2b2","#66cc77","#3cc052","#7eccd8","#5fadbb","#fdc24c","#9aa55d","#6aff83","#71d4e4","#9a7faf","#e66713","#a2a2a2","#b09d7f","#ff9b00","#c8aaff","#cda269","#899a4d","#ff3636","#bfeb9f","#8fcc99","#2c3a3b","#67cba4","#67cba4","#3eaf11","#3b951c","#3b951c","#3b951c","#428358","#9fbce2","#8bc595","#95e5a2"];

        this.genItems(sortTypeAndName());
    }

    genItems(data)
    {
        var eqListHtml="";
        var section;
        var firstItem;
        for (var x in data)
        {
            section=`<div class="type-contain t${x}">`;
            firstItem=1;

            for (var y in data[x])
            {
                section+=this.genEqItem(data[x][y],x,firstItem);
                firstItem=0;
            }

            section+="</div>";
            eqListHtml+=section;
        }

        this.eqList.innerHTML=eqListHtml;
    }

    genEqItem(data,type,img=0)
    {
        var imgString="";
        if (img)
        {
            imgString=`<img src="equipment/${type}.png">`;
        }

        //html from eqlist-gen
        return `<div class="eq-item"><div class="icon">${imgString}</div><div class="amount">${data.count}</div><div class="name">${data.name}</div></div>`;
    }
}