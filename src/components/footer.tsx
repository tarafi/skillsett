"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const socialLinks = [
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "GitHub", icon: Github, url: "#" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why Us", href: "/why-learn-with-us" },
    ],
  },
  {
    title: "Offerings",
    links: [
      { label: "Workshops", href: "/#workshops" },
      { label: "Mentoring", href: "/#mentoring" },
      { label: "Online Courses", href: "/#courses" },
    ],
  },
  {
    title: "Resources",
    links: [],
  },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Equipping you with future-ready skills.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.url} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          {currentYear && (
             <p>&copy; {currentYear} skillsett.in. All rights reserved.</p>
          )}
        </div>
      </div>
    </footer>
  );
}
