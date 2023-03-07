import { useRouter } from "next/router";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";

export default function Header() {
  const router = useRouter();
    return (
      <>
        <a
          className="transition left-0 bg-primary text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0"
          href="#main-content"
        >
          Skip Navigation
        </a>
        <header className="navbar justify-between bg-base-100">
          <h1 className="font-bold text-3xl">News API</h1>

          <form className="form-control w-full max-w-[50%]">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full"
                required
              />
              <button className="btn btn-square">
                <AiOutlineSearch className="text-2xl" />
              </button>
            </div>
          </form>

          <button
            className="btn btn-ghost relative"
            onClick={() => router.push("/")}
          >
            <AiOutlineHome className="text-2xl" />
            <span className="sr-only">Go Home</span>
          </button>
        </header>
      </>
    );
}
