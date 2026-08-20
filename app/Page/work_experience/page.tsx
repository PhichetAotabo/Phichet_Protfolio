"use client";

import {
  Image,
  Badge,
  Body1,
  Card,
  Caption2Strong,
  Title3,
  tokens,
} from "@fluentui/react-components";

/**
 * Figma: Port / node-id 181-11407 ("Work & Experience")
 *
 * Only the WorkTimeline body is implemented here. The Tab (browser chrome),
 * Nav, and Footer frames in the design are all named "((Don't generate code))"
 * and are intentionally skipped — this app already renders its own Nav/Footer
 * globally from app/layout.tsx.
 *
 * Token / component mapping:
 *   Duration badge   -> Badge appearance="tint" color="brand" shape="rounded" size="large"
 *                        (height 32 / padding 8 / radius 4 / Caption 1 Strong 12x16 all match by default)
 *   Full time / role -> Badge appearance="outline" color="brand" shape="rounded" (medium, default)
 *                        (height 20 / padding 6 / radius 4 match by default; text wrapped in
 *                        Caption2Strong to match the file's "Web/Caption 2 Strong" 10x14 style)
 *   Company name     -> Title3 ("Web/Title 3" 24x32 semibold)
 *   Description text -> Body1 ("Web/Body 1" 14x20 regular)
 *   Card             -> Card appearance="filled" (bg colorNeutralBackground1 + shadow4 match by
 *                        default; padding/gap/radius overridden to the file's 16 / 10 / 8 via tokens)
 *   Timeline dot/line-> flat colorBrandBackground fills (source SVGs are a plain filled circle /
 *                        straight stroke, so no image asset is needed to reproduce them faithfully)
 */

type Experience = {
  id: string;
  duration: string;
  company: string;
  logo: string;
  logoFit: "cover" | "contain";
  badges: string[];
  description: string;
  bullets?: string[];
  reverse?: boolean;
};

const experiences: Experience[] = [
  {
    id: "aihcm-1",
    duration: "July 2025 - Feb 2026 (8 Months)",
    company: "AI HCM Co. Ltd",
    logo: "/work-experience/logo-aihcm.png",
    logoFit: "cover",
    badges: ["Full Time", "UX / UI Designer"],
    description: "Human resource management platform For Mobile&Website",
    bullets: [
      "Performance Management System (PMS)",
      "Mobile App For Employee",
      "Learning & Development",
      "Dashboard",
      "Learning Management System(LMS)",
      "etc.",
    ],
  },
  {
    id: "it-cat",
    duration: "Oct 2024 - June 2026 (9 Months)",
    company: "IT-CAT Co. Ltd",
    logo: "/work-experience/logo-aihcm2.png",
    logoFit: "contain",
    badges: ["Full Time", "UX / UI Designer"],
    description: "Human resource management platform For Mobile&Website",
    bullets: [
      "Recruitment System",
      "Performance Management System (PMS)",
      "Learning & Development",
      "Landing Page",
      "Dashboard",
      "Forms",
    ],
    reverse: true,
  },
  {
    id: "bonchon-1",
    duration: "May 2022 - Nov 2022 (6 Months)",
    company: "Bonchon Chicken Time",
    logo: "/work-experience/logo-bonchon.png",
    logoFit: "contain",
    badges: ["Full Time", "Cooker"],
    description: "Staff at Bonchons",
  },
  {
    id: "swensens",
    duration: "Aug 2019 - Apr 2022 (2 Years 8 Months)",
    company: "Swensen's Thailand",
    logo: "/work-experience/logo-swensens.png",
    logoFit: "cover",
    badges: ["Part Time", "Sundae Master"],
    description: "Part-time staff at Swensen’s serve customers",
    bullets: [
      "Take orders.",
      "Prepare and decorate ice cream desserts.",
      "Handle payments.",
      "Restock supplies, and keep the store clean.",
    ],
    reverse: true,
  },
  {
    id: "blueprint",
    duration: "May 2018 - July 2018 (2 Months)",
    company: "Blueprint Graphic & Web Design",
    logo: "/work-experience/Blueprint.png",
    logoFit: "contain",
    badges: ["Internship"],
    description: "Internship",
  },
];

function DurationBadge({
  text,
  align,
}: {
  text: string;
  align: "flex-start" | "flex-end";
}) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        maxWidth: 480,
        justifyContent: align,
        alignItems: "center",
      }}
    >
      <Badge appearance="tint" color="brand" shape="rounded" size="large">
        {text}
      </Badge>
    </div>
  );
}

function CompanyDataCard({ exp }: { exp: Experience }) {
  const align = exp.reverse ? "flex-end" : "flex-start";
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        maxWidth: 480,
        flexDirection: "column",
        alignItems: align,
      }}
    >
      <Card
        appearance="filled"
        style={{
          width: "100%",
          padding: tokens.spacingHorizontalL,
          gap: tokens.spacingVerticalMNudge,
          borderRadius: tokens.borderRadiusLarge,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: tokens.spacingHorizontalMNudge,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={exp.logo}
            alt={`${exp.company} logo`}
            width={32}
            height={32}
            style={{ objectFit: exp.logoFit, flexShrink: 0 }}
          />
          <Title3 style={{ color: tokens.colorBrandForeground2 }}>
            {exp.company}
          </Title3>
        </div>

        <div
          style={{
            display: "flex",
            gap: tokens.spacingHorizontalMNudge,
            width: "100%",
            //justifyContent: align === "flex-end" ? "flex-end" : "flex-start",
          }}
        >
          {exp.badges.map((badge) => (
            <Badge
              key={badge}
              appearance="outline"
              color="brand"
              shape="rounded"
            >
              <Caption2Strong>{badge}</Caption2Strong>
            </Badge>
          ))}
        </div>

        <div style={{ width: "100%" }}>
          <Body1 block style={{ color: tokens.colorBrandForeground2 }}>
            {exp.description}
          </Body1>
          {exp.bullets && (
            <ul
              style={{
                margin: 0,
                paddingInlineStart: 21,
                listStyleType: "disc",
              }}
            >
              {exp.bullets.map((bullet) => (
                <li key={bullet}>
                  <Body1 style={{ color: tokens.colorBrandForeground2 }}>
                    {bullet}
                  </Body1>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </div>
  );
}

function TimelineItem({ exp }: { exp: Experience }) {
  const duration = (
    <DurationBadge
      text={exp.duration}
      align={exp.reverse ? "flex-start" : "flex-end"}
    />
  );
  const card = <CompanyDataCard exp={exp} />;

  return (
    <div
      style={{
        display: "flex",
        gap: tokens.spacingHorizontalL,
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {exp.reverse ? card : duration}
      <div
        style={{
          flexShrink: 0,
          width: 24,
          height: 24,
          borderRadius: tokens.borderRadiusCircular,
          backgroundColor: tokens.colorBrandBackground,
        }}
      />
      {exp.reverse ? duration : card}
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 1280,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: 5,
            transform: "translateX(-50%)",
            backgroundColor: tokens.colorBrandBackground,
          }}
        />{" "}
        {/*เส้นตรงกลาง*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: tokens.spacingVerticalXXL,
            alignItems: "flex-start",
            paddingTop: tokens.spacingVerticalXXL,
            paddingBottom: tokens.spacingVerticalXXL,
            width: "100%",
          }}
        >
          {experiences.map((exp) => (
            <TimelineItem key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
