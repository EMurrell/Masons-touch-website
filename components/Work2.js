export default function Work() {
  return (
    <div id="Work">
      <div className="flex flex-col m-8 shadow-lg md:flex-row ">
        <div className="flex ">
          <img
            className=""
            src="/chimney.jpg"
            alt="picture of chimney"
            width={300}
            height={300}
          />
        </div>
        <div className="py-1 mx-8 md:py-8">
          <h2 className="mt-4 text-lg font-semibold text-left text-gray-700 ">
            Chimney Repair
          </h2>
          <p className="text-left text-gray-700 ">
            Special tools and techniques are used for tuckpointing.
          </p>
        </div>
      </div>

      {/* <div className="p-0 m-4 justify-self-center">
        <img
          className="rounded-lg lg:h-96"
          src="/house.jpg"
          alt="picture of stone work"
        />
        <h2 className="mt-4 text-lg font-semibold text-center text-gray-700">
          Stone Work
        </h2>
        <p className="mt-1 mb-12 text-center text-gray-700">
          High-quality stones used to create stunning facade.
        </p>
      </div> */}
    </div>
  );
}
