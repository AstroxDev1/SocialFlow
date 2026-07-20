import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


const data = [
  { name: "Seg", alcance: 1200 },
  { name: "Ter", alcance: 1800 },
  { name: "Qua", alcance: 1400 },
  { name: "Qui", alcance: 2600 },
  { name: "Sex", alcance: 3100 },
  { name: "Sáb", alcance: 2800 },
  { name: "Dom", alcance: 3600 },
];



export default function PerformanceChart() {


  return (

    <div className="h-[360px]">


      <ResponsiveContainer
        width="100%"
        height="100%"
      >


        <LineChart data={data}>


          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="5 5"
          />



          <XAxis

            dataKey="name"

            stroke="#64748b"

            tickLine={false}

            axisLine={false}

          />



          <YAxis

            stroke="#64748b"

            tickLine={false}

            axisLine={false}

          />





          <Tooltip

            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              color: "#fff",
            }}

          />






          <Line

            type="monotone"

            dataKey="alcance"

            stroke="#2563eb"

            strokeWidth={3}

            dot={{
              r: 5,
            }}

            activeDot={{
              r: 7,
            }}

          />



        </LineChart>


      </ResponsiveContainer>


    </div>

  );

}