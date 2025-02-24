import Button from "./Button";

const Hero: React.FC = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to HealthFirstPriority</h1>
        <p className="text-lg text-gray-600">Your health is our priority.</p>
        <Button label="Get Started" />
      </section>
    );
  };
  
  export default Hero;
  