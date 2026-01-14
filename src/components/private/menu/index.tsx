"use client";

import { useState } from "react";

import clsx from "clsx";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import Logo from "../../logo";
import MenuItems from "./menuItems";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav>
      <div className="sm:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <div className="w-full flex justify-between items-center p-2 shadow">
              <Logo />

              <Button variant="ghost" size="icon">
                <MenuIcon />
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent className="p-3">
            <SheetHeader>
              <SheetTitle className="text-sm font-semibold text-center">
                Menu
              </SheetTitle>
            </SheetHeader>

            <MenuItems
              isCollapsed={false}
              showCollapseButton={false}
              handleClose={() => setIsOpen(!isOpen)}
            />
          </SheetContent>
        </Sheet>
      </div>

      <div
        className={clsx(
          "hidden sm:block p-2 min-h-screen border-r overflow-hidden transition-[width] duration-400 ease-in-out",
          { "w-12": isCollapsed, "w-48": !isCollapsed },
        )}
      >
        <MenuItems
          showCollapseButton
          isCollapsed={isCollapsed}
          handleCollapse={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
    </nav>
  );
};

export default Menu;
