interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {
    return (
      <button
        onClick={onClick}
        className={`w-full py-3 px-4 rounded-xl font-medium transition border ${
          variant === "primary"
            ? "bg-primary text-white border-primary hover:bg-blue-700"
            : "bg-secondary text-gray-900 border borderColor hover:bg-gray-300"
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  