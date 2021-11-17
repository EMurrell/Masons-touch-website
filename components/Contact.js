import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import FadeIn from "./FadeIn";

const features = [
  {
    name: "PHONE",
    description: "(613) 304-3952",
    button: "CALL NOW",
    href: "tel:+1-613-304-3952",
    icon: PhoneIcon,
  },
  {
    name: "EMAIL",
    description: "masontouch@gmail.com",
    button: "EMAIL NOW",
    href: "mailto:masontouch@gmail.com",
    icon: MailIcon,
  },
];

export default function Contact() {
  return (
    <div id="Contact" className="py-12 mt-8 font-bold text-gray-900">
      <div className="flex justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="mt-2 text-2xl font-bold md:text-3xl">
              CONTACT US TODAY
            </p>
            <p className="max-w-4xl mt-4 text-lg font-semibold md:text-xl lg:mx-auto"></p>
          </div>

          <div className="my-12 font-semibold">
            <div className="space-y-10 md:space-x-24 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="">
                  <div>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-yellow-600 rounded-md">
                      <feature.icon className="w-6 h-6 " aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-xl ">{feature.name}</p>
                  </div>
                  <p className="mt-2 ml-16 text-lg ">{feature.description}</p>
                  <button className="px-6 py-2 mt-8 ml-16 font-medium text-white transition duration-200 ease-in-out transform bg-yellow-600 shadow-md cursor-pointer rounded-3xl hover:bg-yellow-700 hover:scale-105">
                    <a href={feature.href}>{feature.button}</a>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
