import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";
import { useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext";

const initialState = { email: "", password: "" };

export default function SignUpModal() {
  const { setActiveModal } = useModalContext();

  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  function handleInputs(e) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checked) {
      console.log(inputs);
      setInputs(initialState);
      setActiveModal("");
    }
  }

  return (
    <section className="grid max-w-3xl grid-cols-2 max-sm:w-96 max-sm:grid-cols-1">
      <div className="bg-white/80 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center max-md:px-6 max-md:py-8 max-sm:hidden">
        <h4 className="text-black text-4xl/12 font-bold tracking-tight">
          Lets Get You Signed Up
        </h4>
        <p className="text-gray-800 text-lg/8 max-md:text-base/loose">
          No fees. Start AI-driven team training instantly.
        </p>
      </div>
      <div className="bg-primary-1400/80 flex flex-col justify-between gap-y-24 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 max-md:px-6 max-md:py-8 max-sm:gap-y-16">
        <button
          className="border-white hover:bg-white group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
          onClick={() => setActiveModal("")}
        >
          <Close
            className="stroke-primary-75 group-hover:stroke-black transition-properties max-md:h-4 max-md:w-4"
            width={2}
          />
        </button>
        <div className="text-white flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight max-md:font-normal">
          <label>
            Email
            <input
              name="email"
              type="email"
              className="bg-white placeholder-gray-950 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3"
              placeholder="janedoe@gmail.com"
              onChange={handleInputs}
              value={inputs.email}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              className="bg-white placeholder-gray-950 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3"
              placeholder="************"
              onChange={handleInputs}
              value={inputs.password}
            />
          </label>
        </div>
        <div>
          <div
            className="m-auto mb-4 w-fit cursor-pointer gap-x-2 max-sm:mb-3"
            onClick={() => setChecked((curr) => !curr)}
          >
            <button
              className={`border-white transition-properties mr-2 inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border-2 ${checked && "bg-white"}`}
            >
              <Checkmark className="stroke-primary-1500" />
            </button>
            <p className="text-white inline cursor-pointer text-sm">
              I agree to all terms
            </p>
          </div>
          <button
            className="bg-gray-50 primary-glow-hover transition-properties w-full cursor-pointer rounded-full py-4 text-lg/8 max-md:px-6 max-md:py-3 max-md:text-base/loose"
            onClick={handleSubmit}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
