import React from "react";
import Button from "@/components/Button";

const SignupForm: React.FC = () => {
  return (
    <div className="w-96 p-10 bg-white shadow-2xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">Sign Up</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="p-3 border rounded-xl focus:ring-2 focus:ring-primary" />
        <input type="text" placeholder="Last Name" className="p-3 border rounded-xl focus:ring-2 focus:ring-primary" />
      </div>
      <input type="text" placeholder="Date of Birth (DD/MM/YYYY)" className="w-full p-3 my-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <input type="text" placeholder="Gender" className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <input type="text" placeholder="+91(IND) Mobile Number" className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <input type="password" placeholder="Create Password" className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <input type="password" placeholder="Confirm Password" className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <label className="text-sm flex items-center mb-4">
        <input type="checkbox" className="mr-2" /> Receive relevant offers and promotional emails.
      </label>
      <Button label="Sign Up" />
      <div className="text-center my-6 text-gray-500">Or</div>
      <Button label="Sign up with Google" variant="secondary" />
    </div>
  );
};

export default SignupForm;