const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex flex-row justify-center rounded-full items-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red gap-2 text-white border-coral-red">
      {label}
      <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5 " />
    </button>
  );
};

export default Button;
