import { footerCols } from "../../utils/content";
import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-bottom">
      <div className="m-auto flex max-w-[90rem] justify-between px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:grid max-lg:gap-y-18 max-lg:px-8 max-md:px-6 max-sm:pb-16">
        <div>
          <a className="flex items-center gap-x-3 max-md:gap-x-2" href="#">
            <Logo
              className="stroke-red-900 h-6"
              alt="Tamrin Logo Icon"
              width={5}
            />
            <p className="text-white text-xl font-bold tracking-tight max-md:text-lg/8 max-md:tracking-tighter">
              Tamrin
            </p>
          </a>
        </div>
        <div className="grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18 max-lg:gap-x-24 max-md:grid-cols-2 max-md:gap-y-14">
          {footerCols.map((col) => (
            <div key={col.id}>
              <p className="text-gray-50 mb-8 text-xl/loose font-semibold max-md:text-lg/8 max-md:tracking-tight">
                {col.category}
              </p>
              <ul className="flex flex-col gap-y-4">
                {col.links.map((link, i) => (
                  <li key={i} className="cursor-pointer">
                    <a
                      className="text-gray-50 hover:text-black transition-properties text-lg/8 font-light max-xl:text-base/loose"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4 border-t-1 border-white" />
      <p className="text-center text-neutral-300">© 2025 Tamrin - SaaS Landing Page</p>
      <p className="text-center text-neutral-300">Credits: <a href="https://github.com/ChadMCasey/NoteFlow/tree/main" className=" hover:text-black hover:underline transition duration-300">Chad Casey</a> | Modified By: <a href="https://github.com/Swaleha-Khan-dot" className=" hover:text-black hover:underline transition duration-300">Swaleha Khan</a></p>
      <p className="text-center text-sm text-neutral-300">All rights reserved.</p>
    </footer>
  );
}
