const links = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-base/60 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-white">
          NOVAA
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex rounded-full px-3 py-2 text-xs text-muted transition hover:bg-white/10 hover:text-white sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
