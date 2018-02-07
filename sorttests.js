function sortTypes()
{
    var type;
    var res={};
    for (var x in _apiEquip)
    {
        type=_apiAllEquip[_apiEquip[x].api_slotitem_id].api_type[3];

        if (res[type])
        {
            res[type]++;
        }

        else
        {
            res[type]=1;
        }
    }

    return res;
}

function sortName()
{
    var res={};
    var id;
    for (var x in _apiEquip)
    {
        id=_apiEquip[x].api_slotitem_id;

        if (res[id])
        {
            res[id].count++;
        }

        else
        {
            res[id]={count:1,name:_apiAllEquip[id].api_name,type:_apiAllEquip[id].api_type[3]};
        }
    }

    return res;
}

function sortTypeAndName()
{
    var res={};
    var id,type;
    for (var x in _apiEquip)
    {
        id=_apiEquip[x].api_slotitem_id;
        type=_apiAllEquip[id].api_type[3];

        if (res[type])
        {
            if (res[type][id])
            {
                res[type][id].count++;
            }

            else
            {
                res[type][id]={count:1,name:_apiAllEquip[id].api_name};
            }
        }

        else
        {
            res[type]={};
            res[type][id]={count:1,name:_apiAllEquip[id].api_name};
        }
    }

    return res;
}

function genTypeDataset()
{
    var data=sortTypes();
    var datasetdata=[];
    var labels=[];
    var colours=[];

    for (var x in data)
    {
        datasetdata.push(data[x]);
        labels.push(eqlist.classes[x-1]);
        colours.push(eqlist.classColours[x-1]);
    }

    return {datasets:[{data:datasetdata,backgroundColor:colours,borderColor:colours}],labels:labels};
}