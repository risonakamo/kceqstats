class _eqList
{
    constructor()
    {
        this.eqList=document.querySelector(".eq-list");

        this.genItems(sortTypeAndName());
    }

    genItems(data)
    {
        var eqListHtml="";
        var section;
        var firstItem;
        for (var x in data)
        {
            section=`<div class="type-contain ${this.typeToClass(x)}">`;
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

    //convert equipment type int to class name of type
    typeToClass(type)
    {
        switch (type)
        {
            case "5":
            return "torp";

            case "1":
            return "dd-gun";
            break;
        }

        return "";
    }
}