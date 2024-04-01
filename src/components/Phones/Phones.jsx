import axios from "axios";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
const Phones = () => {
  const [Phones, setPhones] = useState([]);
  const [loading,setLoading]= useState(true);

  useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //    .then(res => res.json())
    //    .then(data => setPhones(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => setPhones(data.data.data));
      setLoading(false);
  }, []);
  return (
    <div>
    {loading&&<CirclesWithBar
    height="100"
    width="100"
    color="#4fa94d"
    outerCircleColor="#4fa94d"
    innerCircleColor="#4fa94d"
    barColor="#4fa94d"
    ariaLabel="circles-with-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />}
      <h1 className="text-3xl">Phones : {Phones.length}</h1>
    </div>
  );
};

export default Phones;
