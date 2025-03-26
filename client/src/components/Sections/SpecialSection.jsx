import { Sparkle } from "lucide-react";
import ReviewCard from "../ReviewCard";

const SpecialSection = () => {
  return (
    <section className="relative w-full bg-white text-[#5C3D2E] border-t-2 border-[#5C3D2E]">
      {/* ★ Decorative stars */}
      

      <div className="flex flex-col items-center justify-start h-full pt-16 space-y-2 px-4 pb-10">
      <Sparkle className="absolute top-8 left-100 w-6 h-6 text-[#5C3D2E]" />
      <Sparkle className="absolute top-16 left-84 w-8 h-8 text-[#5C3D2E]" />
      <Sparkle className="absolute top-32 right-86 w-7 h-7 text-[#5C3D2E]" />
        <h1 className="text-4xl font-bold">REVIEWS</h1>
        <p className="text-base italic">
          What can we say? We're obsessed with Sandwiches
        </p>

        {/*Review Cards */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-5 mb-60 items-start">
        <ReviewCard
            name="Alex"
            date="2/13/23"
            source="Google"
            rating={"Incredible food! Incredible service! Cuban sandwich was absolutely phenomenal. Black beans and plantains were also lusciously naughty!!!"}
        />
        <ReviewCard
            name="Christy"
            date="3/23/22"
            source="Google"
            rating="Hands down the BEST Cuban food I've ever had. And the service was exceptional. The owner clearly loves what he does. He gave me and my mom samples of his soup while he made our sandwiches. The soup was to die for-chunks of pork and slices of corn on the cob. It was incredibly flavorful. As good as it was, it couldn't compare to the yellow rice, black beans and sandwich. We ate until we nearly burst. I'd recommend this spot all day long. Go check it out. I promise you won't be disappointed!"
        />
        <ReviewCard
            name="Johnny"
            date="4/26/24"
            source="Google"
            rating={"My gosh. What an unexpected surprise. Beautiful traditional buffet. Wonderful"}
        />
        </div>
        

      </div>
    </section>
  );
};

export default SpecialSection;
