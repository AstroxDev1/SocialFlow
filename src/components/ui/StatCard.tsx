import type { ReactNode } from "react";

import Card from "./Card";


type StatCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
};


export default function StatCard({

  title,

  value,

  icon,

  color = "bg-blue-500",

}: StatCardProps) {


  return (

    <Card>

      <div className="flex items-center justify-between">


        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>


          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>


        </div>



        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-xl

            ${color}
          `}
        >

          {icon}


        </div>


      </div>


    </Card>

  );

}