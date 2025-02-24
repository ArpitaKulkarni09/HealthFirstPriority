import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>HealthFirst Priority</title>
        <meta name="description" content="HealthFirst Login & Signup" />
      </Head>
      <Navbar />
      <main className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-secondary gap-8 p-6">
        <LoginForm />
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}