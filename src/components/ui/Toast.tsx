import { useEffect } from "react";


type ToastProps = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};


export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {


  useEffect(() => {

    const timer = setTimeout(() => {

      onClose();

    }, 3000);


    return () => clearTimeout(timer);

  }, [onClose]);




  return (

    <div
      className={`
        fixed
        right-6
        top-6
        z-[100]

        rounded-xl

        px-5
        py-4

        shadow-2xl

        text-white

        ${
          type === "success"
            ? "bg-green-600"
            : "bg-red-600"
        }
      `}
    >

      {message}

    </div>

  );

}