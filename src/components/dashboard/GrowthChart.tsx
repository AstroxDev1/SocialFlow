import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [

{
name:"Jan",
value:20,
},

{
name:"Fev",
value:35,
},

{
name:"Mar",
value:28,
},

{
name:"Abr",
value:55,
},

{
name:"Mai",
value:70,
},

{
name:"Jun",
value:90,
},

];



export default function GrowthChart(){


return (

<div

className="
rounded-2xl

border

border-slate-800

bg-[#121722]

p-6

"

>


<div className="mb-6">


<h2 className="
text-lg
font-semibold
">

Crescimento

</h2>


<p className="
text-sm
text-slate-500
">

Desempenho dos últimos meses

</p>


</div>





<div

className="
h-[300px]

w-full

"

>


<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart
data={data}
>


<CartesianGrid
strokeDasharray="3 3"
/>



<XAxis
dataKey="name"
/>


<YAxis
/>


<Tooltip
contentStyle={{
background:"#121722",
border:"1px solid #1e293b",
borderRadius:"12px"
}}
/>



<Line

type="monotone"

dataKey="value"

stroke="#3b82f6"

strokeWidth={3}

dot={{
r:5
}}

/>



</LineChart>


</ResponsiveContainer>



</div>


</div>

)

}