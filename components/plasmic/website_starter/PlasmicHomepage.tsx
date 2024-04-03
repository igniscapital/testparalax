// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 61gETVAv9Y5XUyzBBiKaE2
// Component: iGB6oJsUthIA

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Dialog from "../../Dialog"; // plasmic-import: 1DFDKTDshbFk/component
import Button from "../../Button"; // plasmic-import: d_zUYhXcO1JF/component
import { PlasmicHead } from "@plasmicapp/react-web";
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax";
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import { useScreenVariants as useScreenVariantsr2Vs3DyXq1BQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: r2VS3DyXq1bQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 61gETVAv9Y5XUyzBBiKaE2/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: iGB6oJsUthIA/css

import ChecksvgIcon from "../squirtle/icons/PlasmicIcon__Checksvg"; // plasmic-import: hhA2UNOJBooY/icon
import IconIcon from "../squirtle/icons/PlasmicIcon__Icon"; // plasmic-import: SGHhp3IATlZa/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  dialog?: Flex__<typeof Dialog>;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
  navbar?: Flex__<"div">;
  hero?: Flex__<"section">;
  scrollParallax?: Flex__<typeof ParallaxWrapper>;
  lore?: Flex__<"section">;
  tokenomics?: Flex__<"section">;
  columns?: Flex__<"div">;
  h3?: Flex__<"h3">;
  section?: Flex__<"section">;
  embedHtml?: Flex__<typeof Embed>;
  h5?: Flex__<"h5">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsr2Vs3DyXq1BQ()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Dialog
            data-plasmic-name={"dialog"}
            data-plasmic-override={overrides.dialog}
            body={
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qEiOr)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___0YnYr)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"400px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/squirtle/images/websiteTitlepng.png",
                    fullWidth: 1320,
                    fullHeight: 380,
                    aspectRatio: undefined
                  }}
                />

                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__oPwq)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"300px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/website_starter/images/squirtieSurfinggif.gif",
                    fullWidth: 550,
                    fullHeight: 440,
                    aspectRatio: undefined
                  }}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__qbxhl
                  )}
                  component={Link}
                  onClick={async event => {
                    const $steps = {};

                    $steps["updateDialogOpen"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["dialog", "open"]
                            },
                            operation: 4
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            const oldValue = $stateGet(objRoot, variablePath);
                            $stateSet(objRoot, variablePath, !oldValue);
                            return !oldValue;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateDialogOpen"] != null &&
                      typeof $steps["updateDialogOpen"] === "object" &&
                      typeof $steps["updateDialogOpen"].then === "function"
                    ) {
                      $steps["updateDialogOpen"] = await $steps[
                        "updateDialogOpen"
                      ];
                    }
                  }}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vl0Hc,
                      "continue w-button"
                    )}
                  >
                    {"click Here to continue"}
                  </div>
                </PlasmicLink__>
              </Stack__>
            }
            className={classNames("__wab_instance", sty.dialog)}
            noTrigger={true}
            onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
            open={generateStateValueProp($state, ["dialog", "open"])}
          />

          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={
              "Legend has it that Squirtie was born under a brilliant star, destined for greatness from the moment he emerged from his eggshell. Raised among the gentle waves of the Cerulean Sea, Squirtie was quickly recognized for his indomitable spirit and adventurous nature."
            }
            image={
              "/plasmic/website_starter/images/squirtieCoinTransparentpng.png"
            }
            title={"SquirtieBASE"}
          />

          <div
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames(projectcss.all, sty.navbar)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__baFf6)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__rztov
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                {"Home"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gk6Rm
                )}
                component={Link}
                href={"#lore"}
                platform={"nextjs"}
              >
                {"Lore"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__g0Jvq
                )}
                component={Link}
                href={"#tokenomics"}
                platform={"nextjs"}
              >
                {"Tokenomics"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__qopnm
                )}
                component={Link}
                href={"#roadmap"}
                platform={"nextjs"}
              >
                {"Roadmap"}
              </PlasmicLink__>
            </Stack__>
          </div>
          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__y3TZh)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "600px"
                  : "auto"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/website_starter/images/squirtieMainbannerSkypng.png",
                fullWidth: 1920,
                fullHeight: 1080,
                aspectRatio: undefined
              }}
            />

            <ParallaxWrapper
              data-plasmic-name={"scrollParallax"}
              data-plasmic-override={overrides.scrollParallax}
              className={classNames("__wab_instance", sty.scrollParallax)}
              speed={100}
            >
              <div className={classNames(projectcss.all, sty.freeBox__fxlEd)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__zb4JB)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/website_starter/images/squirtieMainbannerSunpng.png",
                    fullWidth: 1920,
                    fullHeight: 1080,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </ParallaxWrapper>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__u122E)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "600px"
                  : "auto"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/website_starter/images/squirtieMainbannerpng.png",
                fullWidth: 1920,
                fullHeight: 1080,
                aspectRatio: undefined
              }}
            />

            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__gSFjl)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__edKq9)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"800px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/website_starter/images/websiteTitle1Png.png",
                  fullWidth: 1880,
                  fullHeight: 430,
                  aspectRatio: undefined
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__ynCRh)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "250px"
                    : "300px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/website_starter/images/squirtieSurfinggif.gif",
                  fullWidth: 550,
                  fullHeight: 440,
                  aspectRatio: undefined
                }}
              />
            </Stack__>
          </section>
          <section
            data-plasmic-name={"lore"}
            data-plasmic-override={overrides.lore}
            className={classNames(projectcss.all, sty.lore)}
            id={"lore"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__opdQn)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/website_starter/images/websiteWreckage1Gif.gif",
                fullWidth: 3840,
                fullHeight: 2600,
                aspectRatio: undefined
              }}
            />

            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__xPq7)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/squirtle/images/websiteWreckage4Gif.gif",
                fullWidth: 1920,
                fullHeight: 950,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.freeBox__p2E1S)}>
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__fpgI1)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uAUou)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__a5P50)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/squirtieHatchgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jolIu
                    )}
                  >
                    {
                      "Legend has it that Squirtie was born under a brilliant star, destined for greatness from the moment he emerged from his eggshell. Raised among the gentle waves of the Cerulean Sea, Squirtie was quickly recognized for his indomitable spirit and adventurous nature."
                    }
                  </div>
                </Stack__>
              </Reveal>
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__vnEah)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__esc7B)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lPgB9
                    )}
                  >
                    {
                      "As Squirtie grew older, he joined the notorious Squirtle Squad, a group of brave noblemons dedicated to protecting the shores of their homeland. Together, they faced countless challenges and adversaries, forging bonds of friendship that would withstand the test of time."
                    }
                  </div>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__pAvP)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/squirtieSquadgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />
                </Stack__>
              </Reveal>
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__kctxJ)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zspfI)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__wucKg)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/squirtieFarewellgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iS5Zw
                    )}
                  >
                    {
                      "But as the tides of destiny shifted, Squirtie felt a new calling stirring within his heart. Hearing the cries of memelovers across the Blockchain, who were falling victim to rug pulls and scams, Squirtie knew that his journey was far from over. With a heavy heart and a determined spirit, Squirtie bid farewell to his beloved Squad and set out on a new quest."
                    }
                  </div>
                </Stack__>
              </Reveal>
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__wxFvw)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__kmlNv)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cgs62
                    )}
                  >
                    {
                      "But as the tides of destiny shifted, Squirtie felt a new calling stirring within his heart. Hearing the cries of memelovers across the Blockchain, who were falling victim to rug pulls and scams, Squirtie knew that his journey was far from over. With a heavy heart and a determined spirit, Squirtie bid farewell to his beloved Squad and set out on a new quest."
                    }
                  </div>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__yu1Bi)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/squirtieSurfgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />
                </Stack__>
              </Reveal>
            </div>
          </section>
          <section
            data-plasmic-name={"tokenomics"}
            data-plasmic-override={overrides.tokenomics}
            className={classNames(projectcss.all, sty.tokenomics)}
            id={"tokenomics"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__if8FL)}>
              <div className={classNames(projectcss.all, sty.freeBox__nflNu)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___8Ng48)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/website_starter/images/websiteSeparator1Png.png",
                    fullWidth: 1024,
                    fullHeight: 88,
                    aspectRatio: undefined
                  }}
                />

                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__wrruv
                  )}
                >
                  {"Tokenomics"}
                </h2>
              </div>
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__qpion)}
                >
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__zgrrc
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___3HO8X)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"72px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/squirtle/images/websiteTwitterBrownpng.png",
                        fullWidth: 144,
                        fullHeight: 104,
                        aspectRatio: undefined
                      }}
                    />
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__gzsYz
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__pd0Ga)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"72px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/squirtle/images/websiteTelegramBrownpng.png",
                        fullWidth: 144,
                        fullHeight: 104,
                        aspectRatio: undefined
                      }}
                    />
                  </PlasmicLink__>
                </Stack__>
                <div className={classNames(projectcss.all, sty.column__jyjtu)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__cxZzd)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "200px"
                        : "auto"
                    }
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/squirtieCoinspingif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__wPfox)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__s4FoI
                    )}
                  >
                    {"1,000,000,000 "}
                  </h2>
                  <h3
                    data-plasmic-name={"h3"}
                    data-plasmic-override={overrides.h3}
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3
                    )}
                  >
                    {
                      "0% Tax.\n50% LP\n50%Distribution/development\nCONTRACT ADDRESS :"
                    }
                  </h3>
                </Stack__>
              </Stack__>
            </div>
          </section>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
            id={"roadmap"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__sBUl)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__eGvGc)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/squirtle/images/websiteRoadmap1Png.png",
                  fullWidth: 1920,
                  fullHeight: 1216,
                  aspectRatio: undefined
                }}
              />
            </div>
            <Embed
              data-plasmic-name={"embedHtml"}
              data-plasmic-override={overrides.embedHtml}
              className={classNames("__wab_instance", sty.embedHtml)}
              code={
                '// Ensure the script runs after the DOM has loaded\n<script>\ndocument.addEventListener(\'DOMContentLoaded\', function() {\n\n  // Get a reference to the button element using its class\n  var startButton = document.querySelector(".continue.w-button");\n\n  // Add a click event listener to the button\n  startButton.addEventListener("click", function(event) {\n    event.preventDefault(); // prevent any default action of the anchor tag\n\n    // Create an audio element\n    var audio = new Audio("https://site-assets.plasmic.app/6908967f716812157cca3c309b50562b.mp3");\n\n    // Enable looping for the audio, if desired\n    audio.loop = true;\n\n    // Play the audio file\n    audio.play();\n  });\n\n});\n</script>'
              }
            />

            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {"Copyright @ 2024, all rights reserved."}
            </h5>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "dialog",
    "pageMetadataOverride",
    "navbar",
    "hero",
    "scrollParallax",
    "lore",
    "tokenomics",
    "columns",
    "h3",
    "section",
    "embedHtml",
    "h5"
  ],
  dialog: ["dialog"],
  pageMetadataOverride: ["pageMetadataOverride"],
  navbar: ["navbar"],
  hero: ["hero", "scrollParallax"],
  scrollParallax: ["scrollParallax"],
  lore: ["lore"],
  tokenomics: ["tokenomics", "columns", "h3"],
  columns: ["columns", "h3"],
  h3: ["h3"],
  section: ["section", "embedHtml", "h5"],
  embedHtml: ["embedHtml"],
  h5: ["h5"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  dialog: typeof Dialog;
  pageMetadataOverride: typeof PlasmicHead;
  navbar: "div";
  hero: "section";
  scrollParallax: typeof ParallaxWrapper;
  lore: "section";
  tokenomics: "section";
  columns: "div";
  h3: "h3";
  section: "section";
  embedHtml: typeof Embed;
  h5: "h5";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dialog: makeNodeComponent("dialog"),
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),
    navbar: makeNodeComponent("navbar"),
    hero: makeNodeComponent("hero"),
    scrollParallax: makeNodeComponent("scrollParallax"),
    lore: makeNodeComponent("lore"),
    tokenomics: makeNodeComponent("tokenomics"),
    columns: makeNodeComponent("columns"),
    h3: makeNodeComponent("h3"),
    section: makeNodeComponent("section"),
    embedHtml: makeNodeComponent("embedHtml"),
    h5: makeNodeComponent("h5"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
