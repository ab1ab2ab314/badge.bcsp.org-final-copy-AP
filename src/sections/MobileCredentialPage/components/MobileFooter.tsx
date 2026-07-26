import { useState } from "react";
import { credentialContent } from "@/data/credentialContent";

export const MobileFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="caret-transparent outline-[3px] no-underline px-2.5 md:px-0">
      <div className="caret-transparent h-[30px] outline-[3px] no-underline"></div>
      <div className="caret-transparent outline-[3px] no-underline">
        <a
          href={credentialContent.links.home}
          className="caret-transparent text-sky-800 outline-[3px] underline"
        >
          <img
            src={credentialContent.assets.logo}
            className="caret-transparent inline outline-[3px] no-underline align-baseline w-2/5"
          />
        </a>
      </div>
      <div className="caret-transparent h-[17px] outline-[3px] no-underline"></div>
      <div className="caret-transparent text-neutral-500 text-xs outline-[3px] text-left no-underline pt-2.5 font-arial md:text-sm">
        {credentialContent.disclaimer.lead} {" "}
        {!isExpanded ? (
          <a
            href={credentialContent.links.showMore}
            onClick={(event) => {
              event.preventDefault();
              setIsExpanded(true);
            }}
            className="caret-transparent text-sky-800 text-xs outline-[3px] underline md:text-sm"
          >
            <span className="caret-transparent text-xs outline-[3px] no-underline md:text-sm">
              Show More
            </span>
          </a>
        ) : null}
        <span
          className={`text-xs outline-[3px] no-underline md:text-sm ${isExpanded ? "caret-transparent inline" : "caret-transparent hidden"}`}
        >
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          {credentialContent.disclaimer.expanded[0]}
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          {credentialContent.disclaimer.expanded[1]}
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          {credentialContent.disclaimer.expanded[2]}
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          {credentialContent.disclaimer.expanded[3]}
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
          {credentialContent.disclaimer.expanded[4]}
        </span>
        {isExpanded ? (
          <>
             {" "}
            <a
              href={credentialContent.links.showLess}
              onClick={(event) => {
                event.preventDefault();
                setIsExpanded(false);
              }}
              className="caret-transparent text-sky-800 text-xs outline-[3px] underline md:text-sm"
            >
              <span className="caret-transparent text-xs outline-[3px] no-underline md:text-sm">
                Show Less
              </span>
            </a>
          </>
        ) : null}
      </div>
      <div className="caret-transparent h-2.5 outline-[3px] no-underline"></div>
      <div className="caret-transparent text-neutral-500 text-xs outline-[3px] text-center no-underline pt-2.5 font-arial md:text-sm">
        ©2026 by Board of Certified Safety Professionals.
        <br className="caret-transparent text-xs outline-[3px] no-underline md:text-sm" />
        <a
          href={credentialContent.links.terms}
          className="caret-transparent text-sky-800 text-xs outline-[3px] underline md:text-sm"
        >
          Terms Of Use
        </a>
        -{" "}
        <a
          href={credentialContent.links.privacy}
          className="caret-transparent text-sky-800 text-xs outline-[3px] underline md:text-sm"
        >
          Privacy Policy
        </a>
      </div>
      <div className="caret-transparent h-2.5 outline-[3px] no-underline"></div>
    </div>
  );
};
