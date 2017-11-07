class _dataLoader
{
    constructor(dataready)
    {
        this.dataready=dataready;
        this.loadCount=0;

        this.loadjson("player-equip.json","playereq");
        this.loadjson("api-equip.json","apieq");
    }

    //load in data from given file name, set it to this object
    //with the name given by label
    loadjson(filename,label)
    {
        var r=new XMLHttpRequest();
        r.open("GET",filename);

        r.onreadystatechange=()=>{
            if (r.readyState==4)
            {
                this.waitLoad(JSON.parse(r.response),label);
            }
        };

        r.send();
    }

    //callback for loadjson. once 2 files have loaded
    //via loadjson the dataready callback will execute
    waitLoad(data,label)
    {
        this.loadCount++;

        this[label]=data;

        if (this.loadCount>=2)
        {
            this.dataready();
        }
    }
}