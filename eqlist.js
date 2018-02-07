class _eqList
{
    constructor()
    {
        this.eqList=document.querySelector(".eq-list");

        //convert equipment type int to class name of type this.classes[type-1]
        this.classes=["dd-gun","ca-gun","bb-gun","sec-gun","torp","fighter","dive","tbomber","recon","seaplane","radar","sanshiki","ap","repair","antiair","green","depth","sonar","boiler","boat","gyro","subscout","torparmour","light","barrel","akashi","starshell","command","airwrench","aacontroller","wug","lookout","taitei","onigiri","oilbarrel","tank","landbomber","interceptor","jet1","jet2","airparts","subsonar","fighterseaplane","landbomber2"];

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