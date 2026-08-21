"use client";

import { Fragment } from "react";

import {
  Badge,
  Button,
  Card,
  CompoundButton,
  Divider,
  Image,
  LargeTitle,
  makeStyles,
  Subtitle1,
  Subtitle2,
  Text,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowDownloadRegular,
  BriefcaseRegular,
  DesignIdeasRegular,
  GlobeRegular,
  PersonRegular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
  },

  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: tokens.spacingVerticalXXXL,
    width: "100%",
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXL} ${tokens.spacingVerticalXXXL}`,
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingHorizontalXXL,
    width: "100%",
    maxWidth: "1440px",
    padding: tokens.spacingVerticalXXL,
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorNeutralBackground2,
    selectors: {
      "@media (max-width: 900px)": {
        gridTemplateColumns: "1fr",
      },
    },
  },

  heroCopy: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXL,
  },

  intro: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },

  bodyText: {
    color: tokens.colorNeutralForeground2,
  },

  actions: {
    display: "flex",
    gap: tokens.spacingHorizontalL,
  },

  facts: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },

  sectionLabel: {
    color: tokens.colorBrandForeground1,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase200,
    letterSpacing: "8px",
  },

  factRows: {
    display: "flex",
    gap: tokens.spacingHorizontalL,
  },

  fact: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingHorizontalXL,
  },

  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: tokens.spacingVerticalM,
    paddingInline: tokens.spacingHorizontalXXL,
    overflow: "hidden",
  },

  profileImage: {
    width: "400px",
    height: "520px",
    objectFit: "cover",
  },

  stats: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1440px",
    padding: tokens.spacingHorizontalXXL,
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorBrandBackground2,
  },

  stat: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalL,
    maxWidth: "225px",
  },

  statIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorBrandForeground1,
  },

  columns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingHorizontalXXL,
    width: "100%",
    maxWidth: "1440px",
    selectors: {
      "@media (max-width: 900px)": {
        gridTemplateColumns: "1fr",
      },
    },
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },

  card: {
    width: "100%",
    padding: tokens.spacingHorizontalXXL,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow4,
    borderRadius: tokens.borderRadiusXLarge,
  },

  educationItem: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "flex-start",
  },

  educationIcon: {
    width: "32px",
    height: "32px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
  },

  educationDetail: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },

  capabilities: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },

  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalS,
  },

  languages: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },

  language: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },

  hobbies: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingHorizontalXXL,
    width: "100%",
    maxWidth: "1440px",
    selectors: {
      "@media (max-width: 900px)": {
        gridTemplateColumns: "1fr",
      },
    },
  },

  hobbyCard: {
    display: "flex",
    gap: tokens.spacingHorizontalXXL,
    alignItems: "stretch",
    padding: tokens.spacingHorizontalXXL,
  },

  hobby: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },

  accent: {
    width: tokens.spacingHorizontalM,
    height: tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorBrandBackground,
  },

  goal: {
    flex: 1,
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXL}`,
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },

  goalCopy: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },

  projects: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: tokens.spacingHorizontalXXL,
    width: "100%",
    maxWidth: "1440px",
    selectors: {
      "@media (max-width: 900px)": {
        gridTemplateColumns: "1fr",
      },
    },
  },

  project: {
    position: "relative",
    height: "232px",
    overflow: "hidden",
    border: `${tokens.strokeWidthThick} solid ${tokens.colorNeutralStrokeAlpha}`,
    borderRadius: tokens.borderRadiusXLarge,
  },

  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  projectLabel: {
    position: "absolute",
    top: tokens.spacingHorizontalXXL,
    left: tokens.spacingHorizontalXXL,
    display: "flex",
    flexDirection: "column",
  },
});

const profileImage =
  "https://www.figma.com/api/mcp/asset/101acbdb-43cd-4008-9cc0-f32332d90576.png";

const projectImage =
  "https://www.figma.com/api/mcp/asset/da554bb1-250e-4636-ae0a-e132a1680cc9.png";

const skills = ["Design System", "Flutter", "Typscript", "Figma", "SQL"];

export default function Page() {
  const styles = useStyles();

  return (
    <main className={styles.page}>
      <div className={styles.body}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.intro}>
              <LargeTitle>Phichet Aotabo.</LargeTitle>

              <Subtitle1>
                I design digital experiences that make complex things feel
                simple, useful, and human.
              </Subtitle1>

              <Text className={styles.bodyText}>
                This section is ready for your real story — education,
                background, interests, skills, languages, and the direction you
                want to grow toward. Replace the placeholder details below with
                your own.
              </Text>

              <div className={styles.actions}>
                <Button appearance="primary">
                  <ArrowDownloadRegular />
                  View my work
                </Button>

                <Button appearance="subtle">
                  <ArrowDownloadRegular />
                  Resume
                </Button>
              </div>
            </div>

            <div className={styles.facts}>
              <Text className={styles.sectionLabel}>QUICK FACTS</Text>

              {[
                [
                  ["Age", "25 Years"],
                  ["Live in", "Nonthaburi / Mueang Nonthaburi"],
                ],
                [
                  ["Live in", "Nonthaburi / Mueang Nonthaburi"],
                  ["From", "Chaing Mai / Hangdong"],
                ],
              ].map((row, i) => (
                <div className={styles.factRows} key={i}>
                  {row.map(([label, value]) => (
                    <Card className={styles.fact} key={label + value}>
                      <Text>{label}</Text>
                      <Subtitle2>{value}</Subtitle2>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.profile}>
            <Image
              src={profileImage}
              alt="Phichet Aotabo"
              className={styles.profileImage}
            />
            <Subtitle2>UX/UI Designer • Product thinker</Subtitle2>
            <Text className={styles.bodyText}>
              Replace the circle with your portrait later.
            </Text>
          </div>
        </section>

        <section className={styles.stats}>
          {[
            [DesignIdeasRegular, "UX/UI Design", "4 Project"],
            [DesignIdeasRegular, "Art Work", "9 Pieces"],
            [DesignIdeasRegular, "3D", "2 Pieces"],
            [DesignIdeasRegular, "Development", "2 Project"],
          ].map(([Icon, title, value]) => (
            <CompoundButton
              key={title as string}
              className={styles.stat}
              appearance="subtle"
              icon={
                <span className={styles.statIcon}>
                  <Icon />
                </span>
              }
              secondaryContent={value as string}
            >
              {title as string}
            </CompoundButton>
          ))}
        </section>

        <div className={styles.columns}>
          <section className={styles.section}>
            <Text className={styles.sectionLabel}>EDUCATION</Text>

            <Card className={styles.card}>
              {[
                [
                  "Bachelor of Fine Arts",
                  "Communication Design",
                  "Rajamangala University of Technology Lanna Chiang Mai",
                  "[2025]",
                ],
                [
                  "Vocational Certificate",
                  "Information Technology",
                  "Chiangmai Technical College",
                  "[2019]",
                ],
              ].map(([degree, major, school, year], i) => (
                <Fragment key={degree}>
                  {i > 0 && <Divider />}
                  <div className={styles.educationItem}>
                    <span className={styles.educationIcon}>
                      <PersonRegular />
                    </span>

                    <div className={styles.educationDetail}>
                      <Subtitle1>
                        {degree} • {major}
                      </Subtitle1>
                      <Text className={styles.bodyText}>{school}</Text>
                      <Text className={styles.bodyText}>{year}</Text>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Card>
          </section>

          <section className={styles.section}>
            <Text className={styles.sectionLabel}>CAPABILITIES</Text>

            <div className={styles.capabilities}>
              <Card className={styles.card}>
                <Subtitle1>Skills</Subtitle1>
                <Text className={styles.bodyText}>
                  Core strengths and tools I use to turn problems into clear
                  product experiences.
                </Text>

                <div className={styles.chips}>
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      appearance="tint"
                      color="brand"
                      size="medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className={styles.card}>
                <Subtitle1>Languages</Subtitle1>

                <div className={styles.languages}>
                  <div className={styles.language}>
                    <Badge appearance="tint">TH</Badge>
                    <Subtitle2>Thai — Native</Subtitle2>
                  </div>

                  <div className={styles.language}>
                    <Badge appearance="tint">EN</Badge>
                    <Subtitle2>English — Intermediate</Subtitle2>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>

        <section className={styles.section} style={{ width: "100%" }}>
          <Text className={styles.sectionLabel}>HOBBY</Text>

          <div className={styles.hobbies}>
            <Card className={styles.hobbyCard}>
              <div className={styles.hobby}>
                <span className={styles.accent} />
                <Subtitle2>Visiting Art exhibitions</Subtitle2>
                <Text className={styles.bodyText}>
                  [Your hobby or activity]
                </Text>
              </div>

              <Divider vertical />

              <div className={styles.hobby}>
                <span className={styles.accent} />
                <Subtitle2>Watch Movie</Subtitle2>
                <Text className={styles.bodyText}>
                  [Your hobby or activity]
                </Text>
              </div>
            </Card>

            <section className={styles.goal}>
              <div className={styles.goalCopy}>
                <Text className={styles.sectionLabel}>MY GOAL</Text>

                <Subtitle1>Becoming a Full-Stack Designer</Subtitle1>

                <Text>
                  I want to become a Full-Stack Designer who can turn ideas into
                  real products. From UX research and UI design to design
                  systems and front-end development, I want to understand every
                  step of the journey and connect design with technology. My
                  goal is simple: design with purpose, build with understanding,
                  and keep learning along the way.
                </Text>
              </div>
            </section>
          </div>
        </section>

        <section className={styles.projects}>
          {[1, 2, 3].map((project) => (
            <Card className={styles.project} key={project}>
              <Image
                src={projectImage}
                alt="Project preview"
                className={styles.projectImage}
              />

              <div className={styles.projectLabel}>
                <Subtitle2>Project Name</Subtitle2>
                <Text className={styles.bodyText}>Description</Text>
              </div>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
