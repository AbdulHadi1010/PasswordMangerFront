import { FiLogIn } from "react-icons/fi";
import { BsDatabaseCheck } from "react-icons/bs";
import { AiOutlineUnlock} from "react-icons/ai";

function Homepage() {
  return (
    <div className=" text-white w-full h-[500px] ">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center w-full pt-10 bg-slate-900 h-screen flex justify-center items-center">
        <div className="max-w-[800px] flex flex-col justify-center items-center mx-auto">
          <div className="flex flex-col justify-center items-center">
            {/* Headline */}
            <h1 className="text-4xl font-bold mb-6 text-green-400">
              GuardianKey Password Protector
            </h1>
            {/* Subheadline */}
            <p className="text-gray-200 text-xl mx-3 max-w-lg">
              Protect your digital life with our advanced password manager where you can store, and manage passwords for all your accounts.{" "}
              {/*Take control of your security and defend
              against unauthorized access with GuardianKey Password Protector */}
            </p>
            {/* Call-to-Action (CTA) button */}
            <button className="cursor-pointer w-[180px] px-6 py-3 text-xl mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              <a href="/signup">Get Started</a>
            </button>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="w-full flex justify-center py-28 bg-gray-800">
  <div className="max-w-lg mx-auto ">
    <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
      How It Works
    </h2>
    <div className="text-xl space-y-8 sm:ml-8">
      <div className="flex items-center gap-10">
        <FiLogIn size={35} color="white" />
        <p>Join and create your account.</p>
      </div>
      <div className="flex items-center gap-10">
        <BsDatabaseCheck size={35} color="white" />
        <p>Store your passwords securely.</p>
      </div>
      <div className="flex items-center gap-10">
        <AiOutlineUnlock size={35} color="white" />
        <p>Access your passwords anytime.</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Homepage;
