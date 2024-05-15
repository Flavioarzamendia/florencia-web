import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 font-bold text-white md:text-black text-2xl md:text-lg rounded md:p-0 hover:text-gray-300 md:hover:text-[#F4B54E]"
    >
      {title}
    </Link>
  );
};

export default NavLink;