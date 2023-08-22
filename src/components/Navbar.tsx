export default function Navbar() {
  const navs = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "about-us",
    },
    {
      title: "Our Projects",
      url: "our-projects",
    },
    {
      title: "Careers",
      url: "careers",
    },
    {
      title: "Contact Us",
      url: "contact-us",
    },
  ];
  return (
    <nav className="sticky top-0">
      <ul className="flex flex-row gap-4 justify-between items-center h-12">
        {navs.map((item, i) => (
          <li
            className="no-underline text-red-shade1 text-2xl font-semibold hover:text-red-shade2"
            key={i}
          >
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
