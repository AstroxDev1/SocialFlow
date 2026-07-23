type Media = {
  id: number;
  type: string;
  size: number;
};


type MediaStatsProps = {
  media: Media[];
};


function formatSize(bytes:number){

  if(bytes < 1024){
    return `${bytes} B`;
  }


  if(bytes < 1024 * 1024){

    return `${(
      bytes / 1024
    ).toFixed(1)} KB`;

  }


  return `${(
    bytes / 1024 / 1024
  ).toFixed(2)} MB`;

}



export default function MediaStats({
  media,
}: MediaStatsProps){


  const total =
    media.length;


  const images =
    media.filter(
      item => item.type === "Imagem"
    ).length;



  const videos =
    media.filter(
      item => item.type === "Vídeo"
    ).length;



  const storage =
    media.reduce(
      (acc,item)=>
        acc + item.size,
      0
    );



  const cards = [

    {
      title:"Arquivos",
      value: total,
      icon:"📁",
    },


    {
      title:"Imagens",
      value: images,
      icon:"🖼️",
    },


    {
      title:"Vídeos",
      value: videos,
      icon:"🎥",
    },


    {
      title:"Espaço usado",
      value: formatSize(storage),
      icon:"💾",
    },

  ];



  return (

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
      "
    >

      {cards.map(card=>(

        <div

          key={card.title}

          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-5
            transition
            hover:border-blue-500
          "

        >

          <div className="
            text-3xl
          ">
            {card.icon}
          </div>


          <p className="
            mt-4
            text-sm
            text-slate-400
          ">
            {card.title}
          </p>


          <h3 className="
            mt-1
            text-3xl
            font-bold
            text-white
          ">
            {card.value}
          </h3>


        </div>

      ))}

    </div>

  );

}