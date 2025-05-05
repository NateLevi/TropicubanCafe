import { Sparkle } from "lucide-react";
import ReviewCard from "../ReviewCard";

const SpecialSection = () => {
  return (
    <section className="relative w-full bg-white text-[#5C3D2E] border-t-2 border-[#5C3D2E]">
      {/* ★ Decorative stars */}
      
      <div className="flex flex-col items-center justify-start h-full pt-16 space-y-2 px-4 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold mt-8 z-10">REVIEWS</h1>
        <p className="text-xs sm:text-sm lg:text-base italic text-center">
          What can we say? We're obsessed with Sandwiches
        </p>

        {/* Sparkles positioned to not overlap with text */}
        <Sparkle className="absolute top-12 left-26 md:left-60 lg:left-100 w-4 h- lg:w-6 lg:h-6 text-[#5C3D2E]" />
        <Sparkle className="absolute top-20 left-16 md:left-40 lg:left-84 w-5 h-5 lg:w-8 lg:h-8 text-[#5C3D2E]" />
        <Sparkle className="absolute top-40 right-8 md:right-36 lg:right-86 w-4 h-4 lg:w-7 lg:h-7 text-[#5C3D2E]" />

        {/*Review Cards */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 mt-5 mb-40 lg:mb-60 items-start">
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
