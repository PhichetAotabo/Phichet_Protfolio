"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Divider,
  tokens,
  type ButtonProps,
} from "@fluentui/react-components";
import {
  ArrowDownloadFilled,
  ArrowDownloadRegular,
} from "@fluentui/react-icons";

function MenuButton({
  label,
  href,
  isActive,
  icon,
  hoverIcon,
}: {
  label: string;
  href?: string;
  isActive?: boolean;
  icon?: ButtonProps["icon"];
  hoverIcon?: ButtonProps["icon"];
}) {
  const [isIconFilled, setIsIconFilled] = useState(false);
  const shouldNavigate = Boolean(href && !isActive);

  return (
    <Button
      as={shouldNavigate ? "a" : undefined}
      href={shouldNavigate ? href : undefined}
      appearance="subtle"
      size="medium"
      icon={isIconFilled && hoverIcon ? hoverIcon : icon}
      onMouseEnter={() => setIsIconFilled(true)}
      onMouseLeave={() => setIsIconFilled(false)}
    >
      {label}
    </Button>
  );
}

export function Nav() {
  const pathname = usePathname();
  const menuItems = [
    { label: "Work & Experience", href: "/Page/work_experience" },
    { label: "Projects", href: "/Page/projects" },
    { label: "About", href: "/Page/AboutMe" },
    {
      label: "Resume",
      icon: <ArrowDownloadRegular />,
      hoverIcon: <ArrowDownloadFilled />,
    },
  ];

  return (
    <nav
      style={{
        display: "flex",
        //flexDirection: "row",
        height: "64px",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "16px",
        backgroundColor: tokens.colorNeutralBackground1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <h1 style={{ margin: 0 }}>Phichet Aotabo</h1>
        </Link>

        <Divider vertical={true} style={{ height: 1 }} />
      </div>

      <div
        className="Menu-group"
        style={{
          display: "flex",
          width: "100%",
          flex: "1",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          gap: 16,
        }}
      >
        {menuItems.map((item) => (
          <MenuButton
            key={item.label}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      <Button appearance="primary" size="medium">
        Let’s work together
      </Button>
    </nav>
  );
}
