function Logo({ small }) {
  return (
    <span
      className={`${
        small ? "text-2xl size-10" : "text-3xl size-12"
      } font-bold bg-blue-500 flex justify-center items-center rounded-lg`}
    >
      N
    </span>
  );
}

export default Logo;
