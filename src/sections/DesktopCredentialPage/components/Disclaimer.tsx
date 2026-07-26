import { useState } from "react";
import { credentialContent } from "@/data/credentialContent";

export const Disclaimer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="caret-transparent outline-[3px] relative no-underline pt-[200px]">
      <div className="caret-transparent text-zinc-600 text-xs leading-[13px] outline-[3px] text-justify no-underline">
        {credentialContent.disclaimer.lead} {" "}
        {!isExpanded ? (
          <a
            href={credentialContent.links.showMore}
            onClick={(event) => {
              event.preventDefault();
              setIsExpanded(true);
            }}
            className="caret-transparent text-sky-800 outline-[3px] underline"
          >
            <span className="caret-transparent outline-[3px] no-underline">
              Show More
            </span>
          </a>
        ) : null}
        <span
          className={`caret-transparent outline-[3px] no-underline ${isExpanded ? "inline" : "hidden"}`}
        >
          <br className="caret-transparent outline-[3px] no-underline" />
          <br className="caret-transparent outline-[3px] no-underline" />
          {credentialContent.disclaimer.expanded[0]}
          <br className="caret-transparent outline-[3px] no-underline" />
          <br className="caret-transparent outline-[3px] no-underline" />
          {credentialContent.disclaimer.expanded[1]}
          <br className="caret-transparent outline-[3px] no-underline" />
          <br className="caret-transparent outline-[3px] no-underline" />
          {credentialContent.disclaimer.expanded[2]}
          <br className="caret-transparent outline-[3px] no-underline" />
          <br className="caret-transparent outline-[3px] no-underline" />
          {credentialContent.disclaimer.expanded[3]}
          <br className="caret-transparent outline-[3px] no-underline" />
          <br className="caret-transparent outline-[3px] no-underline" />
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
              className="caret-transparent text-sky-800 outline-[3px] underline"
            >
              <span className="caret-transparent outline-[3px] no-underline">
                Show Less
              </span>
            </a>
          </>
        ) : null}
      </div>
      <div className="caret-transparent text-[13px] outline-[3px] text-center no-underline py-[15px]">
        ©2026 by Board of Certified Safety Professionals.{" "}
        <a
          href={credentialContent.links.terms}
          className="caret-transparent text-sky-800 outline-[3px] underline"
        >
          Terms Of Use
        </a>
        -{" "}
        <a
          href={credentialContent.links.privacy}
          className="caret-transparent text-sky-800 outline-[3px] underline"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
