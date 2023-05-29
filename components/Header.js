import dynamic from "next/dynamic";
const Navbar = dynamic(
  () => import('./Navbar'),
  { ssr: false }
)

const Header = () => {
  return (
      <div className="select-none flex flex-col w-screen py-12 lg:py-20 h-max
      justify-center items-center gap-y-6 sm:gap-y-12 md:gap-y-14">
        <h1 className="main-title text-2xl sm:text-4xl md:text-5xl font-bold">Kadder</h1>
        <Navbar />
      </div>
  )
};

export default Header;