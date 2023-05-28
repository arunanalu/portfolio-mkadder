import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [links] = useState([
    { name: 'portfolio', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'contact', href: '/contact' },
  ])

  const { t } = useTranslation()
  const route = useRouter()
  
  const defineClassName = (href) => {
    if (route.pathname === href) {
      return 'text-gray-100'
    }
    return 'text-gray-500'
  }

  return (
      <nav>
        <ul className="flex flex-row gap-x-12 sm:gap-x-20">
          {
            links.map(link => {
              return (
                <li className="flex flex-col items-center" key={link.name}>
                  <a 
                    className={`select-none menulink text-sm sm:text-xl font-semibold ${defineClassName(link.href)}`}
                    href={link.href}
                  >
                    {t(link.name).toUpperCase()}
                  </a>
                  <div className="mt-1 w-16 sm:w-20 h-1 rounded-lg bg-gradient-to-br from-purple-700 to-pink-700" />
                </li>
              )
            })
          }
        </ul>
      </nav>
  );
}

export default Navbar;
