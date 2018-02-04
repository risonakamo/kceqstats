class _dataControl
{
    constructor()
    {
        this.echart=document.querySelector(".pie");
    }

    chartConvert(data)
    {
        return {
            type:"pie",
            data:{
                datasets:[{
                    data:Object.values(data)
                }],
                labels:Object.keys(data)
            }
        };
    }
}