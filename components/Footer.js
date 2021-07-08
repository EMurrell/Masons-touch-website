export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="flex items-center justify-center w-full h-24 bg-gray-700 ">
      <a
        className="flex items-center justify-center font-semibold tracking-wide text-white "
        href="#"
      >
        © {getCurrentYear()} MASON'S TOUCH CONSTRUCTION
      </a>
    </footer>
  );
}
