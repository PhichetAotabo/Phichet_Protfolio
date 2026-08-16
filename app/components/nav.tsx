"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Divider } from "@fluentui/react-components";
import {
  ArrowDownloadFilled,
  ArrowDownloadRegular,
} from "@fluentui/react-icons";

export function Nav() {
  const [isIconHovered, setIsIconHovered] = useState(false);
  return (
    <nav
      style={{
        display: "flex",
        //flexDirection: "row",
        height: "32px",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "16px",
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
        <Button
          as="a"
          href="Page/work_experience"
          appearance="subtle"
          size="medium"
        >
          Work & Experience
        </Button>
        <Button appearance="subtle" size="medium">
          Projects
        </Button>
        <Button appearance="subtle" size="medium">
          About
        </Button>
        <Button
          appearance="subtle"
          size="medium"
          icon={
            isIconHovered ? <ArrowDownloadFilled /> : <ArrowDownloadRegular />
          }
          onMouseEnter={() => setIsIconHovered(true)}
          onMouseLeave={() => setIsIconHovered(false)}
        >
          Resume
        </Button>
      </div>

      <Button appearance="primary" size="medium">
        Let’s work together
      </Button>
    </nav>
  );
}
