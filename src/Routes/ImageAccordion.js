import ImageBlock from "../components/ImageBlock";

function ImageAccordion() {
  return (
    <div className=" bg-white h-screen flex justify-center items-center hover:[&_.img]:skew-x-0 ">
      <div className="w-11/12 h-[80vh] flex ">
        <ImageBlock image="/img/lion.jpg" text={"gfg 1"} />
        <ImageBlock image="/img/tiger.jpg" text={"gfg 2"} />
        <ImageBlock image="/img/cheetah.jpg" text={"gfg 3"} />
        <ImageBlock image="/img/leopard.jpg" text={"gfg 4"} />
        <ImageBlock image="/img/mountain-lion.jpg" text={"gfg 5"} />
      </div>
    </div>
  );
}
export default ImageAccordion;
