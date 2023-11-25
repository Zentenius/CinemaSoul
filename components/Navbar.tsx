"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Popover, PopoverTrigger, PopoverContent, Button,} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Discover Movies",
    "Latest Releases",
    "Top Rated",
  ];
  const genres = ["Historical", "Action", "Drama", "Thriller"];

  const content = (
    <PopoverContent className="w-[240px]">
      {(titleProps) => (
        <div className="px-1 py-2 w-full" key='pop'>
          <p className="text-small font-bold text-foreground" {...titleProps}>
            Dimensions
          </p>
          <div className="mt-2 flex flex-col gap-2 w-full">
            {genres.map((item, index) => (
                <span className={index === 0 ? "text-white underline underline-offset-2" : "text-white "}>{item}</span>
                ))}
          </div>
        </div>
      )}
    </PopoverContent>)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="absolute z-50 backdrop-blur-[2px] bg-background/50">
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image 
                width={150}
                alt="logo"
                src="https://media.discordapp.net/attachments/940015000267919401/1175550062009516062/image.png?ex=656ba34f&is=65592e4f&hm=e2adbd19e7adf66d52de5e247570e789580fba09a67e63a490f2a5f7bad8652c&=&width=654&height=232"
                radius="none"
                />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {menuItems.map((item, index) =>(

                <NavbarItem key={`${item}-${index}`}>
                <Link 
                underline={index === 0 ? 
                'always' : "hover"}
                href="#" aria-current="page" className="text-white font-thin">
                {item}

                </Link>
                </NavbarItem>
        
        ))}
        <Popover
          showArrow
          offset={10}
          placement="bottom"
          backdrop="opaque"
        >
          <PopoverTrigger>
            Genre
          </PopoverTrigger>
          {content}
        </Popover>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link}  className=" bg-[#817e62] px-8 text-white font-semibold" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
