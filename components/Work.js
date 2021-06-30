import Link from "next/link";
import Image from "next/image";

export default function Work() {
  return (
    <div
      id="Work"
      className="flex-row p-8 m-8 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
    >
      <div className="p-0 m-4 justify-self-center">
        <img className="lg:h-96" src="/chimney.jpg" alt="picture of chimney" />
        <h2 className="mt-4 text-xl font-bold text-center text-gray-700">
          Chimney Repair
        </h2>
        <p className="mt-1 mb-12 text-center text-gray-700">
          Special tools and techniques are used for tuckpointing.
        </p>
      </div>
      <div className="p-0 m-4 justify-self-center">
        <img className="lg:h-96" src="/house.jpg" alt="picture of stone work" />
        <h2 className="mt-4 text-xl font-bold text-center text-gray-700">
          Stone Work
        </h2>
        <p className="mt-1 mb-12 text-center text-gray-700">
          High-quality stones used to create stunning facade.
        </p>
      </div>
    </div>
  );
}
