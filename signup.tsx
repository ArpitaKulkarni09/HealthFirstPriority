import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignUpForm";
import { Head } from "next/document";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up - HFP</title>
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}