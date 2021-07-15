import { BadgeCheckIcon, ShieldCheckIcon } from "@heroicons/react/outline";
import FadeIn from "./FadeIn";

const features = [
  {
    name: "Restoration",
    description:
      "We will restore damaged masonry, stone work, and brick work back to it's original state.",
    icon: ShieldCheckIcon,
  },
  {
    name: "New Construction",
    description:
      "Our skilled team will build beautiful, solid new additions to your property.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Best Materials",
    description:
      "We use only the best materials for the job, sourced from trusted suppliers.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Quality Guaranteed",
    description: "Our services include a written 100% guarantee.",
    icon: ShieldCheckIcon,
  },
];

export default function About() {
  return (
    <div id="About" className="py-10 mt-8 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FadeIn>
          <div className="lg:text-center">
            <p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 md:text-3xl">
              OVER 20 YEARS EXPERIENCE
            </p>
            <p className="max-w-4xl mt-4 text-xl font-semibold text-gray-700 md:text-xl lg:mx-auto">
              Specializing in Foundation Repair, Parging, Chimney Repair, Stone
              Work and Brick Laying.
            </p>
            <p className="max-w-2xl mt-4 text-lg font-semibold text-gray-700 md:text-lg lg:mx-auto">
              Family Owned and Operated. Servicing Ottawa and surrounding
              region.
            </p>
          </div>

          <div className="my-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-yellow-600 bg-white rounded-md">
                      <feature.icon className="w-6 h-6 " aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-xl font-medium leading-6 text-gray-800">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-700">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
