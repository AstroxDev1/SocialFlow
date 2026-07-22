import type { LucideIcon } from "lucide-react";

import {
  TrendingUp,
} from "lucide-react";


interface Props {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description: string;
  trend?: string;
}



export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
  trend = "0%",
}: Props) {



return (

<div

className="

rounded-2xl

border

border-slate-800

bg-[#121722]

p-6


transition-all

duration-300


hover:-translate-y-1

hover:border-blue-500/40

hover:shadow-xl

"

>



<div

className="
flex

items-start

justify-between

"

>



<div>


<p

className="
text-sm

text-slate-500

"

>

{title}

</p>




<h2

className="
mt-2

text-3xl

font-bold

"

>

{value}

</h2>




<div

className="
mt-3

flex

items-center

gap-2

text-sm

text-emerald-400

"

>

<TrendingUp size={16} />

<span>{trend}</span>

<span className="text-slate-500">
  vs período anterior
</span>


</div>



</div>





<div

className="

flex

h-12

w-12

items-center

justify-center


rounded-xl

bg-blue-500/10

text-blue-400

"

>

<Icon size={24}/>


</div>



</div>





<p

className="
mt-5

text-sm

text-slate-400

"

>

{description}

</p>



</div>

)

}