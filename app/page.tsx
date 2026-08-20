"use client";

import {
  Button,
  Image,
  CompoundButton,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import {
  Body1,
  Caption1,
  Subtitle1,
  Subtitle2,
  Title1,
  Display,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

import {
  DesignIdeasRegular,
  AppsColor,
  BeachColor,
  BuildingColor,
  CodeBlockColor,
} from "@fluentui/react-icons";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  dangerText: {
    color: tokens.colorPaletteRedForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  card: {
    margin: "auto",
    maxWidth: "420px",
    minWidth: "300px",
    width: "100%",
    rounded: tokens.borderRadius2XLarge,
  },

  logo: {
    borderRadius: "4px",
    width: "48px",
    height: "48px",
  },
});

export default function Home() {
  const styles = useStyles();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 0",
        }}
      >
        <Image src="Photo.png" alt="Avatar" height={500} />

        <div
          className="text-content"
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <Title1>Welcome to</Title1>
          <Display style={{ color: tokens.colorBrandForeground1 }}>
            Phichet Aotabo&apos;s Portfolio
          </Display>
          <Title1>UX/UI Designer, Full Stack Designer</Title1>
          <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            <Button
              appearance="primary"
              size="large"
              icon={<DesignIdeasRegular />}
              iconPosition="before"
            >
              View my work
            </Button>
            <Button
              appearance="subtle"
              size="large"
              icon={null}
              iconPosition="before"
            >
              Get contact
            </Button>
          </div>
        </div>
      </div>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: tokens.spacingHorizontalL,
          padding: 32,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CompoundButton
          appearance="subtle"
          secondaryContent="4 Projects"
          icon={<AppsColor />}
        >
          UX/UI Design
        </CompoundButton>
        <CompoundButton
          appearance="subtle"
          secondaryContent="9 Pieces"
          icon={<BeachColor />}
        >
          Art & Illustration
        </CompoundButton>
        <CompoundButton
          appearance="subtle"
          secondaryContent="2 Pieces"
          icon={<BuildingColor />}
        >
          3D Modeling
        </CompoundButton>
        <CompoundButton
          appearance="subtle"
          secondaryContent="2 Project"
          icon={<CodeBlockColor />}
        >
          Development
        </CompoundButton>
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: tokens.spacingHorizontalXL,
          padding: 32,

          justifyContent: "center",
        }}
      >
        <Card className={styles.card}>
          <CardPreview>
            <Image
              src={"/Nilecon_map.jpg"}
              alt="Preview of a Word document: About Us - Overview"
              shape="rounded"
              width={40}
              height={30}
            />
          </CardPreview>
          <CardHeader
            style={{ position: "absolute", top: 32, left: 32 }}
            header={<Subtitle2>Project</Subtitle2>}
            description={
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
                description
              </Caption1>
            }
          />

          {/* <CardFooter>
            <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
            <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
          </CardFooter> */}
        </Card>
        <Card className={styles.card}>
          <CardPreview>
            <Image
              src={"/Nilecon_map.jpg"}
              alt="Preview of a Word document: About Us - Overview"
              shape="rounded"
              width={40}
              height={30}
            />
          </CardPreview>
          <CardHeader
            style={{ position: "absolute", top: 32, left: 32 }}
            header={<Subtitle2>Project</Subtitle2>}
            description={
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
                description
              </Caption1>
            }
          />

          {/* <CardFooter>
            <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
            <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
          </CardFooter> */}
        </Card>
        <Card className={styles.card}>
          <CardPreview>
            <Image
              src={"/Nilecon_map.jpg"}
              alt="Preview of a Word document: About Us - Overview"
              shape="rounded"
              width={40}
              height={30}
            />
          </CardPreview>
          <CardHeader
            style={{ position: "absolute", top: 32, left: 32 }}
            header={<Subtitle2>Project</Subtitle2>}
            description={
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
                description
              </Caption1>
            }
          />
        </Card>
      </section>
    </div>
  );
}
