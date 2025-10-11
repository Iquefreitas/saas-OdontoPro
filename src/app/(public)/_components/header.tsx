"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { handleRegister } from "../_actions/login";

export function Header() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [{ href: "#profissionais", label: "Profissionais" }];

  async function handleLogin(){
    await handleRegister("google")
  }

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          onClick={() => setIsOpen(false)}
          key={item.href}
          asChild
          className="bg-transparent hover:bg-emerald-100 text-emerald-600 font-medium transition-colors duration-200"
        >
          <Link href={item.href} className="text-base">
            {item.label}
          </Link>
        </Button>
      ))}

      {status === 'loading' ? (
        <></>
      ) : session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 font-semibold transition duration-300 ease-in-out hover:bg-emerald-600 hover:shadow-md text-white bg-emerald-500 rounded-md py-1 px-4"
        >
          Acessar clinica
        </Link>
      ) : (
        <Button onClick={handleLogin} className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition duration-300">
          <LogIn className="mr-2" />
          Fazer Login
        </Button>
      )}
    </>
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white shadow-md backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-400 to-green-600 animate-gradient-smooth"
        >
          Ondoto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-emerald-100"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] z-[9999] bg-white"
          >
            <SheetHeader>
              <SheetTitle className="text-emerald-600">Menu</SheetTitle>
              <SheetDescription className="text-sm text-gray-500">
                Navegue pelas opções abaixo:
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col space-y-4 mt-6">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
