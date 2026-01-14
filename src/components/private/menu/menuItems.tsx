import { usePathname } from "next/navigation";

import {
  Banknote,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Cog,
  Handshake,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

const iconProps = {
  size: 20,
};

const MenuItems = ({
  isCollapsed,
  showCollapseButton,
  handleCollapse,
  handleClose,
}: {
  isCollapsed: boolean;
  showCollapseButton: boolean;
  handleCollapse?: () => void;
  handleClose?: () => void;
}) => {
  const currentPath = usePathname();

  return (
    <>
      {showCollapseButton && (
        <>
          {!isCollapsed && <Logo className="mb-4 mt-2" />}

          <div className="w-full text-end mb-4">
            <Button
              variant="secondary"
              size="icon-sm"
              className="cursor-pointer"
              onClick={handleCollapse}
            >
              {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
        </>
      )}

      <div>
        <span
          className={`text-xs font-semibold text-gray-400 ${isCollapsed ? "hidden" : "inline"}`}
        >
          Dashboard
        </span>

        <ul className="flex flex-col gap-3">
          <li>
            <Link
              className={clsx("menu-item", {
                "menu-item_active": currentPath === "/dashboard",
                "menu-item_collapsed": isCollapsed,
              })}
              href="#"
              onClick={handleClose}
              title="Agendamentos"
            >
              <Calendar {...iconProps} />
              <span
                className={clsx({ hidden: isCollapsed, inline: !isCollapsed })}
              >
                Agendamentos
              </span>
            </Link>
          </li>

          <li>
            <Link
              className={clsx("menu-item", {
                "menu-item_active": currentPath === "/services",
                "menu-item_collapsed": isCollapsed,
              })}
              href="#"
              onClick={handleClose}
              title="Serviços"
            >
              <Handshake {...iconProps} />
              <span
                className={clsx({ hidden: isCollapsed, inline: !isCollapsed })}
              >
                Serviços
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-3">
        <span
          className={`text-xs font-semibold text-gray-400 ${isCollapsed ? "hidden" : "inline"}`}
        >
          Minha conta
        </span>

        <ul className="flex flex-col gap-3">
          <li>
            <Link
              className={clsx("menu-item", {
                "menu-item_active": currentPath === "/config",
                "menu-item_collapsed": isCollapsed,
              })}
              href="#"
              onClick={handleClose}
              title="Configurações"
            >
              <Cog {...iconProps} />
              <span
                className={clsx({ hidden: isCollapsed, inline: !isCollapsed })}
              >
                Configurações
              </span>
            </Link>
          </li>

          <li>
            <Link
              className={clsx("menu-item", {
                "menu-item_active": currentPath === "/plans",
                "menu-item_collapsed": isCollapsed,
              })}
              href="#"
              onClick={handleClose}
              title="Planos"
            >
              <Banknote {...iconProps} />
              <span
                className={clsx({ hidden: isCollapsed, inline: !isCollapsed })}
              >
                Planos
              </span>
            </Link>
          </li>

          <li>
            <Link
              className="flex gap-2 items-center p-1 text-sm text-red-500 rounded hover:bg-red-500 hover:text-white duration-200 transition-all ease-in-out"
              href="#"
              title="Sair"
            >
              <LogOut {...iconProps} />

              <span
                className={clsx({ hidden: isCollapsed, inline: !isCollapsed })}
              >
                Sair
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuItems;
