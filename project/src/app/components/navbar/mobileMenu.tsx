"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { BookIcon, GiftIcon, HomeIcon, PeopleIcon, ThreeBarsIcon, TrophyIcon } from "@primer/octicons-react";
import { NavLink } from "./navlink";
import MenuItems from "./menuItems";

export default function MobileMenu({
  className = "",
  children = null,
  ...props
}) {
  return (
    <Popover.Root >
      <Popover.Trigger asChild>
        <Button 
          variant="ghost"
          className={`md:hidden hover:bg-secondary transition-colors duration-200 !p-3 rounded-none ` + className}
          {...props}
        >
          <ThreeBarsIcon className="size-5" />
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="bg-card rounded-lg shadow-lg w-[150px] p-[20px] z-101 md:hidden"
          side="bottom"
          align="end"
          sideOffset={16}
        >
          <div className="flex flex-col">
            <MenuItems className="flex flex-col gap-[20px]" />

          </div>
          <Popover.Arrow className="fill-card" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
