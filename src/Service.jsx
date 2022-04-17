import React from "react";
import Card from "./Card";
import CardData from "./CardData";
import serverFunctions from "./apiFunctions/callServer"

const Service = () => {

  const [data , setData] = React.useState([]);
  React.useEffect(() => {
  const fetchData = async () => {
    const response = await serverFunctions.getData();
    if(response === "error" || response === "NoData"){
      return setData(CardData);
    }
    setData(response);
  }
  fetchData();
}, []);


  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {data.map((value, index) => {
                return <Card key={index} imgsrc={value.imgsrc} title={value.title} text={value.text} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
