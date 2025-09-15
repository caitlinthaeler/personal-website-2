"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { BookIcon, GiftIcon, HomeIcon, PeopleIcon, ThreeBarsIcon, TrophyIcon } from "@primer/octicons-react";
import { NavLink } from "./navlink";

interface MobileMenuProps {
  user: any;
}

export default function MobileMenu() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="ghost"
          className="md:hidden hover:bg-black/10 transition-colors duration-200 !p-3 rounded-full"
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
            <div className="flex flex-col gap-[20px]">
              <NavLink className="flex flex-row items-center gap-2" href="/#">
                    <HomeIcon size={16} />
                    Dashboard
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <PeopleIcon size={16} />
                    Study Groups
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <BookIcon size={16} />
                    Notes...
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <TrophyIcon size={16} />
                    Leaderboard
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <GiftIcon size={16} />
                    Rewards
                </NavLink>
            </div>

          </div>
          <Popover.Arrow className="fill-card" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
