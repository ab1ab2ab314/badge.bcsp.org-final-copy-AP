import { useEffect } from "react";

export type MobileHeaderProps = {
  variant: string;
  title: string;
  imageUrl: string;
  backgroundImageUrl: string;
  badgeImageUrl: string;
  statusLabel: string;
  statusText: string;
};

export const MobileHeader = (props: MobileHeaderProps) => {
  useEffect(() => {
    if (props.variant !== "default") return;

    const profileImage = document.querySelector(
      "[data-anima-mobile-profile]",
    ) as HTMLElement | null;
    const badgeImage = document.querySelector(
      "[data-anima-mobile-badge]",
    ) as HTMLElement | null;

    if (!profileImage || !badgeImage) return;

    const profileRect = profileImage.getBoundingClientRect();
    const badgeRect = badgeImage.getBoundingClientRect();

    console.log("__ANIMA_DBG__ mobile-header-layout", {
      profile: {
        width: Math.round(profileRect.width),
        height: Math.round(profileRect.height),
        top: Math.round(profileRect.top),
      },
      badge: {
        width: Math.round(badgeRect.width),
        height: Math.round(badgeRect.height),
        top: Math.round(badgeRect.top),
      },
      deltaTop: Math.round(badgeRect.top - profileRect.top),
    });
  }, [props.variant, props.imageUrl, props.badgeImageUrl]);

  if (props.variant === "title") {
    return (
      <div className="caret-transparent outline-[3px] no-underline text-[22px] font-bold text-center pt-5 pb-[15px] font-arial">
        {props.title}
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url('${props.backgroundImageUrl}')` }}
      className="caret-transparent outline-[3px] no-underline bg-bottom bg-no-repeat bg-size-[100%_300px]"
    >
      <div className="caret-transparent outline-[3px] no-underline pb-[15px] px-2.5 md:px-0">
        <table className="caret-transparent outline-[3px] text-start no-underline">
          <tbody className="caret-transparent outline-[3px] no-underline">
            <tr className="caret-transparent outline-[3px] no-underline align-top">
              <td className="caret-transparent outline-[3px] no-underline align-top p-0">
                <img
                  src={props.imageUrl}
                  data-anima-mobile-profile
                  className="caret-transparent block outline-[3px] no-underline w-[200px] h-[200px] object-cover border border-solid"
                />
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-top p-0">
                <div className="caret-transparent outline-[3px] no-underline w-7"></div>
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-top p-0">
                <div className="caret-transparent outline-[3px] no-underline">
                  <div className="caret-transparent text-sky-600 text-[15px] font-bold outline-[3px] no-underline uppercase font-arial md:text-amber-500 md:text-xs md:normal-case md:font-avenir">
                    {props.statusLabel}
                  </div>
                  <div className="caret-transparent text-lime-300 text-[28px] outline-[3px] no-underline font-arial md:text-black md:font-avenir">
                    {props.statusText}
                  </div>
                </div>
                <div className="caret-transparent outline-[3px] no-underline">
                  <div className="caret-transparent outline-[3px] no-underline pt-2.5">
                    <img
                      src={props.badgeImageUrl}
                      data-anima-mobile-badge
                      className="caret-transparent block h-[115px] outline-[3px] no-underline w-[115px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
