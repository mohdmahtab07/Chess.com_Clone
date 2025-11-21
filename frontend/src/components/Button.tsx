const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-[#81B64C] text-2xl font-bold cursor-pointer py-4 px-5 rounded-lg shadow-[0_4px_0_#333]/60 shadow-[#4b933b] w-full active:scale-[99%] transition duration-100 hover:bg-[#8bc552]"
    >
      {children}
    </button>
  );
};

export default Button;
