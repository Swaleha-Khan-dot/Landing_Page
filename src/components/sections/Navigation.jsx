import Logo from "../icons/Logo";
import MobileMenuIcon from "./MobileMenu/MobileMenuIcon";
import { navigationLinks } from "../../utils/content";
import { useModalContext } from "../../contexts/ModalContext";

export default function Navigation() {
  const { setActiveModal } = useModalContext();

  return (
    <nav className="text-primary-50 m-auto flex max-w-[90rem] justify-between px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6">
      <a
        className="flex items-center gap-x-3 max-xl:gap-x-3 max-md:gap-x-2"
        href="#"
      >
        <Logo
          className="stroke-red-900 h-6 max-md:h-5"
          alt="Tamrin Logo Icon"
          width={5}
        />
        <p className="text-xl font-bold tracking-tight max-xl:text-xl max-md:text-lg/8 max-md:tracking-tighter">
          Tamrin
        </p>
      </a>

      <ul className="flex items-center gap-x-8 max-xl:gap-x-6 max-lg:hidden">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="hover:text-black transition-properties"
            >
              {link.link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-x-3 max-lg:hidden">
        <button className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose">
          Login
        </button>
        <button
          className="bg-white/50 border-white/30 text-primary-1300 primary-glow hover:border-white hover:bg-white primary-glow-hover transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
          onClick={() => setActiveModal("sign-up")}
        >
          Get Started
        </button>
      </div>

      <MobileMenuIcon />
    </nav>
  );
}
