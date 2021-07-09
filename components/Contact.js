import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import FadeIn from "./FadeIn";

const features = [
  {
    name: "Phone",
    description: "(613) 304-3952",
    button: "CALL NOW",
    href: "tel:+1-613-304-3952",
    icon: PhoneIcon,
  },
  {
    name: "Email",
    description: "masontouch@gmail.com",
    button: "EMAIL NOW",
    href: "mailto:masontouch@gmail.com",
    icon: MailIcon,
  },
];

export default function Contact() {
  return (
    <div id="Contact" className="py-12 mt-8 ">
      <div className="flex justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="mt-2 text-2xl font-bold leading-8 tracking-wide text-gray-700 md:text-3xl">
              CONTACT US TODAY
            </p>
            <p className="max-w-4xl mt-4 text-lg font-semibold text-gray-700 md:text-xl lg:mx-auto"></p>
          </div>

          <div className="my-12">
            <dl className="space-y-10 md:space-x-24 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
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
                  <dd className="mt-2 ml-16 text-lg text-gray-700">
                    {feature.description}
                  </dd>
                  <button className="px-4 py-2 mt-8 ml-16 font-bold text-white bg-yellow-600 rounded shadow-md hover:bg-yellow-700">
                    <a href={feature.href}>{feature.button}</a>
                  </button>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
