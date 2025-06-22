function ImageBlock({ image, text }) {
  return (
    <div
      className={`flex-1 h-full transform skew-x-[10deg] cursor-pointer mx-[0.125em] transition-all duration-300 bg-no-repeat bg-cover bg-center border-[1px] border-pink-500 relative hover:flex-[5] `}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <p className="absolute bottom-0 left-0 p-3 bg-black bg-opacity-60 transform -rotate-90 origin-top-left transition-all duration-300 uppercase whitespace-nowrap hover:bg-transparent hover:border hover:border-solid hover:border-blue-500 hover:text-[#ff2600] hover:rotate-0">
        {text}
      </p>
    </div>
  );
}
export default ImageBlock;
