import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
   const chartConfig = {
    type: "line",
    height: 540,
    series: [
      {
        name: "Sales",
        data: [20, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#ffd700"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#ffd700",
            fontSize: "16px",
            fontFamily: "vazir",
            fontWeight: 400,
          },
        },
        categories: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند"
        ],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            // Check if the value is not 0 and is a number before formatting
            if (value !== 0 && !isNaN(value)) {
              return formatUniqueLabel(value);
            } else {
              return "";
            }
          },
          style: {
            colors: "#ffd700",
            fontSize: "16px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#ffd700",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  export default function ChartComponent() {
    return (
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center bg-color1"
        >
          <div className="w-max rounded-lg  p-5 text-white mr-2 bg-color1">
            <Square3Stack3DIcon className="h-8 w-8 text-yellow-500" />
          </div>
          <div>
           
            <Typography
              variant="small"
              className="max-w-sm text-base font-normal px-3 md:px-0  text-color2 py-3"
            >
              با مشاهده نوسان قیمت یک ماه طلا می تواین در تصیم گیری شما کمک کنیم 
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0" style={{ backgroundColor: "#004225" }}>
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }

  let counter = 100; // Set the initial counter value
  const labelMap = {};
  
  function formatUniqueLabel(value) {
    const formattedValue = (value / 1);
    if (!labelMap[formattedValue]) {
      labelMap[formattedValue] = true;
      return counter + "M";
    } else {
      counter -= 100; // Decrease by 100 each time
      if (counter < 2300) {
        counter = 2900; // Reset the counter when it goes below the minimum
      }
      return counter + "M";
    }
  }