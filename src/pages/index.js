import Image from "next/image";
import { Inter } from "next/font/google";

import RealtimeInfo from '../components/RealtimeInfo'; // Импорт созданного компонента


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full lg:flex font-mono text-sm items-center justify-between">
        <div className="relative text-center">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo_inch2.png"
            alt="INCH2 Logo"
            width={192}
            height={192}
            priority
          />
          <p className="mt-2">
            <code className="font-bold">INCH2</code> &nbsp;(Square Inch)
          </p>
          <p className="text-lg mt-4">
            Invest in Real Estate, Earn with Airbnb. Own a piece of the property with INCH2 tokens.
          </p>
        </div>
      </div>

      <RealtimeInfo />

      <section className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4">How INCH2 Works</h2>
        
        {/* Introduction */}
        <p className="text-md max-w-4xl mx-auto mb-4">
          INCH2 is revolutionizing property investment by integrating real estate with the digital world of tokens. 
          Here's how our unique business model operates:
        </p>

        {/* Step 1 - Token Representation */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">1. Token Representation</h3>
          <Image src="/diagrams/diagram_1.png" alt="Token Representation Diagram" width={600} height={300} />
          <p className="text-md max-w-4xl mx-auto">
            Each INCH2 token represents a tangible equity stake in our real estate properties. 
            These properties are meticulously selected for Airbnb rentals.
          </p>
        </div>

        {/* Step 2 - Dividend Distribution */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">2. Dividend Distribution</h3>
          <Image src="/diagrams/diagram_2.png" alt="Dividend Distribution Diagram" width={600} height={300} />
          <p className="text-md max-w-4xl mx-auto">
            Profits from Airbnb rentals are converted into dividends and distributed among token holders. 
            Your share is proportional to the number of tokens you own.
          </p>
        </div>

        {/* Step 3 - Market Dynamics */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">3. Market Dynamics</h3>
          <Image src="/diagrams/diagram_3.png" alt="Market Dynamics Diagram" width={600} height={300} />
          <p className="text-md max-w-4xl mx-auto">
            The value of INCH2 tokens can fluctuate based on market trends and rental income. 
            This offers a dynamic investment opportunity in the real estate market.
          </p>
        </div>

        {/* Future Opportunities */}
        <div>
          <h3 className="text-xl font-semibold">Future Opportunities</h3>
          <p className="text-md max-w-4xl mx-auto">
            With plans to expand our property portfolio, early investors have the potential to reap significant benefits 
            as we acquire more high-value Airbnb locations.
          </p>
        </div>
      </section>
      
    </main>
  );
}