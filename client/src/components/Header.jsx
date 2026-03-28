function Header() {
  return (
    <header>
      <div className="flex flex-start gap-3 mb-2">
        <span className="text-3xl font-bold bg-blue-500 p-1 flex size-12 justify-center align-middle rounded-lg">
          N
        </span>
        <h2 className="text-4xl font-semibold mb-3">My Notes</h2>
      </div>
      <p className="text-sm text-gray-400">
        Backend: Express + Postgres | Frontend: React + Tailwind
      </p>
      <hr className="border-gray-300 my-5 opacity-25" />
    </header>
  );
}

export default Header;
