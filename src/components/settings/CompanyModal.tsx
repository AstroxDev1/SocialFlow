import {
  useEffect,
  useState
} from "react";

import api from "../../services/api";


type Company = {
  id?: number;
  name: string;
  niche: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  linkedin: string;
  website: string;
  phone: string;
};


type Props = {
  onClose: () => void;
};



export default function CompanyModal({
  onClose
}: Props) {


  const [company,setCompany] =
    useState<Company>({
      name:"",
      niche:"",
      instagram:"",
      facebook:"",
      tiktok:"",
      linkedin:"",
      website:"",
      phone:"",
    });



  useEffect(()=>{

    async function loadCompany(){

      try{

        const response =
          await api.get("/company");


        if(response.data){

          setCompany(response.data);

        }


      }catch(error){

        console.error(
          "Erro ao buscar empresa:",
          error
        );

      }

    }


    loadCompany();


  },[]);





  function handleChange(
    field:keyof Company,
    value:string
  ){

    setCompany(old=>({
      ...old,
      [field]:value,
    }));

  }





  async function handleSave(){


    try{


      await api.put(
        "/company",
        company
      );


      alert(
        "Empresa salva com sucesso!"
      );


      onClose();



    }catch(error){

      console.error(
        "Erro ao salvar empresa:",
        error
      );


      alert(
        "Erro ao salvar empresa."
      );

    }

  }





  return (

    <div className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/70
    ">


      <div className="
        w-full
        max-w-xl
        rounded-2xl
        bg-slate-900
        border
        border-slate-800
        p-6
      ">


        <h2 className="
          text-2xl
          font-bold
          text-white
        ">
          Empresa
        </h2>



        <div className="
          mt-6
          grid
          grid-cols-2
          gap-4
        ">


          {[
            ["name","Nome da empresa"],
            ["niche","Nicho"],
            ["instagram","Instagram"],
            ["facebook","Facebook"],
            ["tiktok","TikTok"],
            ["linkedin","LinkedIn"],
            ["website","Site"],
            ["phone","Telefone"],
          ].map(([field,label])=>(


            <input

              key={field}

              value={
                company[field as keyof Company] || ""
              }

              onChange={(e)=>
                handleChange(
                  field as keyof Company,
                  e.target.value
                )
              }

              placeholder={label}

              className="
                rounded-lg
                bg-slate-800
                px-4
                py-3
                text-white
                outline-none
              "

            />


          ))}



        </div>




        <div className="
          mt-6
          flex
          justify-end
          gap-3
        ">


          <button

            onClick={onClose}

            className="
              rounded-lg
              bg-slate-700
              px-4
              py-2
              text-white
            "

          >
            Cancelar

          </button>




          <button

            onClick={handleSave}

            className="
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-white
            "

          >
            Salvar

          </button>



        </div>



      </div>


    </div>

  );

}