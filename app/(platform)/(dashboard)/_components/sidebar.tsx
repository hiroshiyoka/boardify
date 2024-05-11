"use client";

import { useLocalStorage } from "usehooks-ts";
import { useOrganization } from "@clerk/nextjs";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  return <div>Sidebar!</div>;
};
