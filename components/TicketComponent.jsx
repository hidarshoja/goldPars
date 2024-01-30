
import Marquee from "react-fast-marquee";
  const newsItems = [
    {id:1, key: "قیمت طلا امروز" , price :"2,300,000" },
    {id:2, key: "قیمت طلا فروش " , price :"2,300,000" },
    {id:3, key: "قیمت طلا خرید " , price :"2,320,000" },
    {id:4,  key: "قیمت سکه تمام " , price :"23,320,000" },
    {id:5,  key: "قیمت سکه طرح قدیم   " , price :"25,320,000" },
    {id:6,  key: "قیمت نیم  سکه " , price :"15,320,000" },
    {id:7,  key: "قیمت ربع  سکه " , price :"9,320,000" },
    {id:8,  key: "قیمت سکه طرح قدیم   " , price :"25,320,000" },
    {id:9,  key: "قیمت طلا  دیروز " , price :"15,320,000" },
    {id:10,  key: "قیمت طلا  جهانی " , price :"9,320,000" },
  ];
  

  

export default function TicketComponent() {
  return (
    <div className="mt-[80px] py-3 bg-yellow-500 ">
        <Marquee autoFill={true}>
          {newsItems.map(news=>(
            <p key={news?.id} className="px-2">
              <span>
              {news?.key}
              </span>
              <span>
              {news?.price}

              </span>
            </p>
          ))}
        </Marquee>
    </div>
  )
}

  
  
  
  