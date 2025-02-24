import React from "react";
import Button from "@/components/Button";

const LoginForm: React.FC = () => {
  return (
    <div className="w-96 p-10 bg-white shadow-2xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">Log In</h2>
      <input type="email" placeholder="Email ID" className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-xl focus:ring-2 focus:ring-primary" />
      <div className="flex items-center justify-between text-sm mb-4">
        <label>
          <input type="checkbox" className="mr-2" /> Remember me
        </label>
        <a href="#" className="text-blue-600">Forgot password?</a>
      </div>
      <Button label="Log In" />
      <div className="text-center my-6 text-gray-500">Or</div>
      <Button label="Log in with Google" variant="secondary" />
      <Button label="Use Corporate Email" variant="secondary" />
    </div>
  );
};

export default LoginForm;