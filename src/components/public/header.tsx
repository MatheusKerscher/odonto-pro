import Link from "next/link";

import { LogIn, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [{ href: "#professionals", label: "Profissionais" }];

const SessionButton = ({ session }: { session: unknown }) =>
  session ? (
    <Link href="/dashboard" className="text-base">
      Dashboard
    </Link>
  ) : (
    <Link href="/login" className="flex text-base items-center gap-1">
      <LogIn size={20} /> Entrar
    </Link>
  );

const NavLinks = ({
  isDropdownMenu,
  session,
}: {
  isDropdownMenu: boolean;
  session: unknown;
}) => (
  <>
    {navItems.map((item) =>
      isDropdownMenu ? (
        <DropdownMenuItem key={item.href}>
          <a href={item.href} className="text-base">
            {item.label}
          </a>
        </DropdownMenuItem>
      ) : (
        <a key={item.href} href={item.href} className="text-base">
          {item.label}
        </a>
      )
    )}

    {isDropdownMenu ? (
      <DropdownMenuItem>
        <SessionButton session={session} />
      </DropdownMenuItem>
    ) : (
      <SessionButton session={session} />
    )}
  </>
);

const Header = () => {
  return (
    <header className="bg-white shadow p-4 z-10 fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between">
        <section>
          <h1 className="text-2xl font-bold text-zinc-900">
            <Link href="/">
              Odonto<span className="text-emerald-500">PRO</span>
            </Link>
          </h1>
        </section>

        <section>
          <nav className="hidden md:flex gap-4 items-center">
            <NavLinks session={null} isDropdownMenu={false} />
          </nav>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  size="icon"
                  className="text-black shadow-none outline-0"
                >
                  <Menu />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                  <NavLinks session={null} isDropdownMenu />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
