"use client";
import {
  Dropdown,
  DropdownTrigger,
  User,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { User as PrismaUser } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  user: PrismaUser;
}
const UserProfilePanel = ({ user }: Props) => {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          key={"user"}
          as="button"
          avatarProps={{
            isBordered: true,
            src: user.avatarUrl ?? "",
          }}
          className="transition-transform"
          name={`${user.firstName} ${user.lastName}`}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key={"profile"}>
          <Link key={"profile1"} href="/user/profile">Profile</Link>
        </DropdownItem>
        <DropdownItem key={"properties"}>
          <Link key={"properties1"} href="/user/properties">Properties</Link>
        </DropdownItem>
        <DropdownItem key={"logout"} color="danger">
          <LogoutLink key={"logout1"} >Log Out</LogoutLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserProfilePanel;
