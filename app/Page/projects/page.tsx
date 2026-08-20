"use client";

import * as React from "react";
import {
  Badge,
  Button,
  Card,
  CardFooter,
  Link,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowDownloadRegular,
  ChevronDownRegular,
  ArrowUpRightRegular,
} from "@fluentui/react-icons";

const assets = {
  homhuan:
    "https://www.figma.com/api/mcp/asset/c4067365-047d-4cd5-a7e6-4287996d3abe.png",
  homhuanIcon:
    "https://www.figma.com/api/mcp/asset/b78ff579-7c9c-4bd3-b5b1-49c12fc1857a.png",

  hcm: "https://www.figma.com/api/mcp/asset/5f815176-705a-4014-8696-c2d01907a299.png",
  hcmIcon:
    "https://www.figma.com/api/mcp/asset/2fcd1f8b-38ef-4574-a4f9-e2ae43b6fe96.png",

  project:
    "https://www.figma.com/api/mcp/asset/f6865b83-899d-404f-851d-566a6678670d.png",
  projectIcon:
    "https://www.figma.com/api/mcp/asset/fc4e4714-cc46-4c93-abbf-5751b4975f3c.png",
};

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: tokens.colorNeutralBackground1,
  },

  main: {
    flex: "1 1 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: tokens.spacingVerticalM,
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalXXL,
  },

  heading: {
    color: tokens.colorNeutralForeground2,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
  },

  cards: {
    width: "100%",
    maxWidth: "1280px",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: tokens.spacingHorizontalXXL,

    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      paddingLeft: tokens.spacingHorizontalL,
      paddingRight: tokens.spacingHorizontalL,
    },
  },

  card: {
    minWidth: 0,
    overflow: "hidden",
    border: `1px solid ${tokens.colorTransparentStroke}`,
    borderRadius: tokens.borderRadiusLarge,
    boxShadow: tokens.shadow4,
    backgroundColor: tokens.colorNeutralBackground1,
  },

  image: {
    width: "100%",
    height: "365px",
    overflow: "hidden",
    position: "relative",
    borderRadius: tokens.borderRadiusSmall,
  },

  imageAsset: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  homhuanImage: {
    width: "148.34%",
    maxWidth: "none",
    left: "-0.03%",
    right: "auto",
    objectFit: "cover",
  },

  hcmImage: {
    width: "160.09%",
    maxWidth: "none",
    left: "-59.96%",
    right: "auto",
    objectFit: "cover",
  },

  footer: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    padding: tokens.spacingVerticalS,
  },

  labels: {
    minWidth: 0,
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: tokens.spacingVerticalS,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },

  projectIcon: {
    width: "28px",
    height: "28px",
    objectFit: "cover",
    flexShrink: 0,
  },

  projectName: {
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
  },

  category: {
    height: "24px",
  },

  description: {
    color: tokens.colorNeutralForeground3,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase300,
  },

  /* Keep the logo styling here because the logo itself is not a Fluent component. */
  logo: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalS,
    borderRadius: "50px",
    backgroundColor: tokens.colorNeutralBackground1,
  },

  logoMark: {
    display: "flex",
    alignItems: "flex-end",
    gap: "2px",
    height: "24px",
  },

  logoBar: {
    width: "4px",
    borderRadius: "5px",
    backgroundColor: tokens.colorBrandForeground1,
  },

  logoText: {
    color: tokens.colorBrandForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightBold,
    lineHeight: tokens.lineHeightBase400,
  },

  navPlaceholder: {
    width: "100%",
  },

  footerPlaceholder: {
    width: "100%",
  },
});

type ProjectCardProps = {
  image: string;
  icon: string;
  name: string;
  description: string;
  imageClassName?: string;
};

function ProjectCard({
  image,
  icon,
  name,
  description,
  imageClassName,
}: ProjectCardProps) {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <div className={styles.image}>
        <img
          src={image}
          alt={name}
          className={`${styles.imageAsset} ${imageClassName ?? ""}`}
        />
      </div>

      <CardFooter className={styles.footer}>
        <div className={styles.labels}>
          <div className={styles.titleRow}>
            <img src={icon} alt="" className={styles.projectIcon} />

            <Text className={styles.projectName}>{name}</Text>
          </div>

          <Badge
            className={styles.category}
            appearance="tint"
            shape="square"
            color="brand"
            size="medium"
          >
            Catergory
          </Badge>

          <Text className={styles.description}>{description}</Text>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Projects() {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      {/*
        Frame: TabMsEdge((Don't generate code))
        DO NOT IMPLEMENT
      */}

      {/*
        Frame: Nav((Don't generate code))
        DO NOT IMPLEMENT
      */}

      <main className={styles.main}>
        <Text className={styles.heading}>Work & Experience</Text>

        <section className={styles.cards}>
          <ProjectCard
            image={assets.homhuan}
            icon={assets.homhuanIcon}
            name="Homhuan"
            description="App for recommending recipes based on the available ingredients and building community through shared recipes."
            imageClassName={styles.homhuanImage}
          />

          <ProjectCard
            image={assets.hcm}
            icon={assets.hcmIcon}
            name="AI HCM"
            description="Human resource management platform For Mobile&Website"
            imageClassName={styles.hcmImage}
          />

          <ProjectCard
            image={assets.project}
            icon={assets.projectIcon}
            name="ProjectName"
            description="Description"
          />
        </section>
      </main>

      {/*
        Frame: Footer((Don't generate code))
        DO NOT IMPLEMENT
      */}
    </div>
  );
}
