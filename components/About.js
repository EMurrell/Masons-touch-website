import { BadgeCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

const features = [
  {
    name: "Restoration",
    description:
      "We will restore damaged masonry, stone work, and brick work back to it's original state.",
    icon: BadgeCheckIcon,
  },
  {
    name: "New Construction",
    description:
      "Our skilled team will build beautiful, solid new additions to your property.",
    icon: BadgeCheckIcon,
  },
  {
    name: "Best Materials",
    description:
      "We use only the best materials for the job, sourced from trusted suppliers.",
    icon: BadgeCheckIcon,
  },
  {
    name: "Quality Guaranteed",
    description: "Our services include a written 100% guarantee.",
    icon: BadgeCheckIcon,
  },
];

export default function About() {
  return (
    <div  id="About" className="py-12 mt-8 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
            OVER 20 YEARS EXPERIENCE
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-700 lg:mx-auto">
            Specializing in Parging, Chimney Repair, Stone Work and Brick
            Laying.
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-700 lg:mx-auto">
            Family Owned and Operated. Servicng Ottawa and surrounding region.
          </p>
        </div>

        <div className="mt-20 py-18">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-yellow-600 rounded-md">
                    <feature.icon className="w-6 h-6 " aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
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
      </div>
    </div>
  );
}
