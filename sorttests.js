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
            res[id]={count:1,name:_apiAllEquip[id].api_name};
        }
    }

    return res;
}