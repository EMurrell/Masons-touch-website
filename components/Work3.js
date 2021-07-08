import FadeIn from "./FadeIn";

export default function Work3() {
  return (
    <section className="text-gray-700 ">
      <FadeIn>
        <div className="container px-5 py-24 mx-auto bg-white">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center ">
            <div className="px-4 mb-10 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src="/house.jpg"
                />
              </div>
              <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-800 title-font">
                Stone Work
              </h2>
              <p className="text-base leading-relaxed">
                High-quality stones used to create stunning facade.
              </p>
            </div>
            <div className="px-4 mb-10 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src="/chimney.jpg"
                />
              </div>
              <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">
                Chimney Repair
              </h2>
              <p className="text-base leading-relaxed">
                Special tools and techniques are used for tuckpointing.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
