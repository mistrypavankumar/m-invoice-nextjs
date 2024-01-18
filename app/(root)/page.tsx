import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto h-[80vh]">
        <div className="md:w-1/2 mt-5 md:mt-0 flex flex-col justify-center align-center gap-y-2">
          <h1 className="text-primaryDarkBlue text-4xl md:text-5xl font-bold">
            Simplest to Generate
          </h1>
          <h1 className="text-green-500 font-bold text-4xl md:text-5xl">
            GST E-Invoicing
          </h1>

          <p className="mt-11 text-xl md:text-2xl text-gray-500">
            Issue GST sales invoices in seconds and download them with just one
            click from your phone or laptop
          </p>
        </div>
        <div className="flex justify-center align-center">
          <img className="w-full" src={"/assets/invoice-img.svg"} alt="" />
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </>
  );
}
