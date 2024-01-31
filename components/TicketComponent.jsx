
import Marquee from "react-fast-marquee";
import axios from "axios";
import { useState ,useEffect } from "react";

  const newsItems = [
    {id:1, key: "قیمت طلا امروز" , price :2300000},
    {id:2, key: "قیمت طلا فروش " , price :2300000},
    {id:3, key: "قیمت طلا خرید " , price :2320000},
    {id:4,  key: "قیمت سکه تمام " , price :23320000},
    {id:5,  key: "قیمت سکه طرح قدیم   " , price :25320000},
    {id:6,  key: "قیمت نیم  سکه " , price :15320000},
    {id:7,  key: "قیمت ربع  سکه " , price :9320000 },
    {id:8,  key: "قیمت سکه طرح قدیم   " , price :25320000},
    {id:9,  key: "قیمت طلا  دیروز " , price :15320000},
    {id:10,  key: "قیمت طلا  جهانی " , price :9320000},
  ];
  

  

export default function TicketComponent() {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setData(response.data);
      console.log("مقدار تیکت زیر منو" , response.data);
      //data = response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-[80px] py-3 bg-yellow-500 ">
        <Marquee autoFill={true}>
          {newsItems.map(news=>(
            <p key={news?.id} className="px-3">
              <span>
              {news?.key} :
              </span>
              <span>
              {new Intl.NumberFormat('fa-IR').format(news?.price)}
              </span>
            </p>
          ))}
        </Marquee>
    </div>
  )
}

  
  
  
  