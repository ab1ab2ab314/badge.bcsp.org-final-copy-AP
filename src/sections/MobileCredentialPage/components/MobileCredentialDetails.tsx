import { useState } from "react";
import { credentialContent } from "@/data/credentialContent";

export const MobileCredentialDetails = () => {
  const [isExpiresNoteVisible, setIsExpiresNoteVisible] = useState(false);

  return (
    <div className="bg-sky-100 caret-transparent outline-[3px] relative no-underline z-[2]">
      <div className="caret-transparent outline-[3px] no-underline pb-5 px-[22px] md:px-0">
        <div className="caret-transparent text-sky-600 text-[15px] font-bold leading-[1.1] tracking-[0.2px] outline-[3px] text-left no-underline uppercase pt-2.5 font-arial md:text-amber-500 md:text-xs md:normal-case md:font-avenir">
          Construction Health and Safety Technician
          <span className="caret-transparent text-sky-600 text-[8px] outline-[3px] relative no-underline uppercase -top-1.5 font-arial md:text-amber-500 md:normal-case md:font-avenir">
            ®
          </span>
          (CHST
          <span className="caret-transparent text-sky-600 text-[8px] outline-[3px] relative no-underline uppercase -top-1.5 font-arial md:text-amber-500 md:normal-case md:font-avenir">
            ®
          </span>
          )
        </div>
        <div className="caret-transparent text-[15px] leading-[1.32] outline-[3px] text-justify no-underline pt-0.5 font-arial">
          {credentialContent.credential.description}
        </div>
        <div className="caret-transparent h-[5px] outline-[3px] no-underline"></div>
        <div className="caret-transparent text-sky-600 text-[15px] font-bold leading-[1.1] tracking-[0.2px] outline-[3px] no-underline uppercase pt-5 font-arial md:text-amber-500 md:text-xs md:normal-case md:pt-2.5 md:font-avenir">
          ISSUED BY
        </div>
        <div className="caret-transparent text-[18px] leading-[1.15] outline-[3px] no-underline font-arial md:text-[22px]">
          {credentialContent.issuer.name}
        </div>
        <div className="caret-transparent h-[5px] outline-[3px] no-underline"></div>
        <div className="caret-transparent text-sky-600 text-[15px] font-bold outline-[3px] no-underline uppercase pt-[15px] font-arial md:text-amber-500 md:text-xs md:normal-case md:pt-2.5 md:font-avenir">
          Certification NUMBER
        </div>
        <div className="caret-transparent text-[17px] outline-[3px] no-underline font-arial md:text-[22px]">
          {credentialContent.credential.number}
        </div>
        <div className="caret-transparent h-[5px] outline-[3px] no-underline"></div>
        <div className="caret-transparent text-sky-600 text-[15px] font-bold outline-[3px] no-underline uppercase pt-[15px] font-arial md:text-amber-500 md:text-xs md:normal-case md:pt-2.5 md:font-avenir">
          Certified SINCE
        </div>
        <div className="caret-transparent text-[17px] outline-[3px] no-underline font-arial md:text-[22px]">
          {credentialContent.credential.certifiedSince}
        </div>
        <div className="caret-transparent h-[5px] outline-[3px] no-underline"></div>
        <div className="caret-transparent text-sky-600 text-[15px] font-bold outline-[3px] no-underline uppercase pt-[15px] font-arial md:text-amber-500 md:text-xs md:normal-case md:pt-2.5 md:font-avenir">
          RECERTIFICATION CYCLE
        </div>
        <div className="caret-transparent text-[17px] outline-[3px] no-underline font-arial md:text-[22px]">
          {credentialContent.credential.recertificationCycle}
        </div>
        <div className="caret-transparent h-[5px] outline-[3px] no-underline"></div>
        <div className="caret-transparent outline-[3px] relative no-underline">
          <input
            type="hidden"
            value="0"
            className="appearance-none bg-transparent box-border caret-transparent hidden text-[13.3333px] outline-[3px] text-start no-underline p-0 font-arial"
          />
          <div className="caret-transparent text-sky-600 text-[15px] font-bold outline-[3px] no-underline uppercase pt-[15px] font-arial md:text-amber-500 md:text-xs md:normal-case md:pt-2.5 md:font-avenir">
            EXPIRES 
            <a
              href={credentialContent.links.issueHub}
              onClick={(event) => {
                event.preventDefault();
                setIsExpiresNoteVisible((previous) => !previous);
              }}
              className="caret-transparent text-sky-800 text-[15px] outline-[3px] underline uppercase font-arial md:text-xs md:normal-case md:font-avenir"
            >
              <span className="caret-transparent text-[15px] outline-[3px] relative no-underline uppercase top-0.5 font-arial md:text-xs md:normal-case md:font-avenir">
                <img
                  src={credentialContent.assets.mobileInfoIcon}
                  className="caret-transparent inline text-[15px] outline-[3px] no-underline uppercase align-baseline w-[15px] font-arial md:text-xs md:normal-case md:font-avenir"
                />
              </span>
            </a>
          </div>
          <div
            className={`caret-transparent outline-[3px] absolute no-underline left-20 top-[30px] md:left-[-120px] md:top-[26px] ${isExpiresNoteVisible ? "block" : "hidden"}`}
          >
            <div className="bg-sky-800 shadow-[rgb(128,128,128)_3px_3px_18px_0px] caret-transparent text-white leading-5 outline-[3px] relative text-left no-underline w-auto p-5 rounded-[20px] border-2 border-solid border-white inset-x-0 font-arial md:bg-cyan-700 md:static md:w-[350px] md:inset-x-auto">
              {credentialContent.credential.expiresNote}
            </div>
          </div>
        </div>
        <div className="caret-transparent text-[17px] outline-[3px] no-underline font-arial md:text-[22px]">
          {credentialContent.credential.expires}
        </div>
        <div className="caret-transparent h-[5px] outline-[3px] no-underline"></div>
        <div className="caret-transparent text-sky-600 text-[15px] font-bold outline-[3px] no-underline uppercase pt-[15px] font-arial md:text-amber-500 md:text-xs md:normal-case md:pt-2.5 md:font-avenir">
          THIS CREDENTIAL ACCREDITED BY
        </div>
        <div className="caret-transparent text-[17px] outline-[3px] no-underline font-arial md:text-[22px]">
          {credentialContent.credential.accreditedBy}
        </div>
      </div>
    </div>
  );
};
