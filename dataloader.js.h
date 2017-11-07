//ONLY PURPOSE of the dataloder: get the data and hold
//on to it.

class _dataLoader
{
    //constructor takes for callback when all data is loaded
    _dataLoader(function dataready());

    int maxeq;

    //async loaded data
    object playereq; //loaded player equipment data
    object apieq; //loaded all api equipment data

    //transformed data
    /*transformed data, externally set
    {int ids:string name,int count,int type,int locked}*/
    object ideq;
    /*{int type:int count}*/
    object typeeq; //count of types
    /*{count,free}*/
    object counteq;

  private:
    int loadCount;

    //function called when data load completes
    function dataready;

    //load data to object
    async-void loadjson(string filename,string label);
    //wait for certain number of completed loads from loadjson
    void waitLoad(object data,string label);
    void dataTransform();
}