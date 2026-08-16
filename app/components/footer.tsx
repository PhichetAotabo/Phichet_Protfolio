"use client";
import React from "react";

import { Link, Body1, Subtitle2, tokens } from "@fluentui/react-components";

const workItems = [
  { label: "AI HCM Co. Ltd", href: "" },
  { label: "IT CAT Co. Ltd", href: "" },
];
const projectItems = [
  { label: "Home", href: "" },
  { label: "Work & Experience", href: "" },
  { label: "About", href: "" },
];
const contactItems = [
  { label: "LinkedIn", href: "" },
  { label: "Instagram", href: "" },
  { label: "Email", href: "" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: tokens.colorBrandBackground,
        padding: 16,
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: tokens.spacingHorizontalXXL,
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Subtitle2 style={{ color: tokens.colorNeutralForegroundOnBrand }}>
            “พรุ่งนี้ต้องดีกว่าเมื่อวาน”
          </Subtitle2>
          <Body1 style={{ color: tokens.colorNeutralForegroundOnBrand }}>
            phichet_aotabo@outlook.com
          </Body1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Subtitle2 style={{ color: tokens.colorNeutralForegroundOnBrand }}>
            Work & Experience
          </Subtitle2>
          {workItems.map((item) => (
            <Link
              key={item.href}
              appearance="subtle"
              href={item.href}
              style={{ color: tokens.colorNeutralForegroundInvertedLink }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Subtitle2 style={{ color: tokens.colorNeutralForegroundOnBrand }}>
            Project
          </Subtitle2>
          {projectItems.map((item) => (
            <Link
              key={item.href}
              appearance="subtle"
              href={item.href}
              style={{ color: tokens.colorNeutralForegroundInvertedLink }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Subtitle2 style={{ color: tokens.colorNeutralForegroundOnBrand }}>
            Contact
          </Subtitle2>
          {contactItems.map((item) => (
            <Link
              key={item.href}
              appearance="subtle"
              href={item.href}
              style={{ color: tokens.colorNeutralForegroundInvertedLink }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <p style={{ color: tokens.colorNeutralForegroundOnBrand }}>
        © 2026 Phichet Aotabo&apos;s Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
