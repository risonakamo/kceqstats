//ONLY PURPOSE of the dataloder: get the data and hold
//on to it.

class _dataLoader
{
    //constructor takes for callback when all data is loaded
    _dataLoader(function dataready());

private:
    int loadCount;

    //async loaded data
    object playereq;
    object apieq;

    //load data to object
    async-void loadjson(string filename,string label);
    //wait for certain number of completed loads from loadjson
    void waitLoad(object data,string label);
}