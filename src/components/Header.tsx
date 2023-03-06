import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-100 px-4 py-4">
      <div className="flex items-center">
        <Logo />
        <span className="text-gray-200 font-bold">help</span>
      </div>
    </header>
  );
}
