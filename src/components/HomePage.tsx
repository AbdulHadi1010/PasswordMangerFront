import Wrapper from "./Helper/Wrapper";
import { FiLogIn } from "react-icons/fi";
import { GrDocumentStore, GrInsecure } from "react-icons/gr";

function Homepage() {
  return (
    <div className=" text-white w-full h-[500px] ">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center w-full pt-20 bg-slate-900 h-full">
        <div className="max-w-[800px] flex flex-col justify-center mx-auto  h-full">
          <div className="flex flex-col justify-center items-center">
            {/* Headline */}
            <h1 className="text-4xl font-bold mb-4 text-green-400">
              GuardianKey Password Protector
            </h1>
            {/* Subheadline */}
            <p className="text-gray-200 text-xl max-w-lg">
              Protect your digital life with our advanced password manager where you can store, and manage passwords for all your accounts.{" "}
              {/*Take control of your security and defend
              against unauthorized access with GuardianKey Password Protector */}
            </p>
            {/* Call-to-Action (CTA) button */}
            <button className="cursor-pointer w-[180px] px-6 py-3 text-xl mt-8 bg-blue-600 text-white rounded-full">
              <a href="/signup">Get Started</a>
            </button>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="w-full px-4 py-16 bg-gray-800">
        <Wrapper>
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
            How It Works
          </h2>
          <div className="text-xl mx-auto space-y-4 flex flex-col gap-5 items-center">
            <div>
              <FiLogIn size={35} /> <p>Sign up for an account.</p>
            </div>
            <div>
              <GrDocumentStore size={35} />
              <p> Store your passwords securely.</p>
            </div>
            <div>
              <GrInsecure size={35} /> <p> Access your passwords anytime.</p>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}

export default Homepage;
