import { credentialContent } from "@/data/credentialContent";
import { MinimumRequirements } from "@/sections/DesktopCredentialPage/components/MinimumRequirements";
import { Disclaimer } from "@/sections/DesktopCredentialPage/components/Disclaimer";

export const CredentialDescription = () => {
  return (
    <div className="caret-transparent block outline-[3px] no-underline w-auto md:table md:w-full">
      <div className="caret-transparent block outline-[3px] no-underline md:table-row">
        <div className="caret-transparent block outline-[3px] no-underline align-top w-full pt-[15px] md:table-cell">
          <div className="caret-transparent text-black text-base font-normal outline-[3px] no-underline normal-case pb-0 md:text-sky-600 md:text-xl md:font-bold md:uppercase md:pb-2.5">
            Construction Health and Safety Technician
            <sup className="caret-transparent text-black text-[13.3333px] font-normal outline-[3px] no-underline normal-case md:text-sky-600 md:text-[13px] md:font-bold md:uppercase">
              ®
            </sup>
            (CHST
            <sup className="caret-transparent text-black text-[13.3333px] font-normal outline-[3px] no-underline normal-case md:text-sky-600 md:text-[13px] md:font-bold md:uppercase">
              ®
            </sup>
            )
          </div>
          <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-6">
            {credentialContent.credential.description}
          </div>
          <div className="caret-transparent h-[35px] outline-[3px] no-underline"></div>
          <div className="caret-transparent text-black text-base font-normal outline-[3px] no-underline normal-case pb-0 md:text-sky-600 md:text-xl md:font-bold md:uppercase md:pb-2.5">
            CHST
            <sup className="caret-transparent text-black text-[13.3333px] font-normal outline-[3px] no-underline normal-case md:text-sky-600 md:text-[13px] md:font-bold md:uppercase">
              ®
            </sup>
            Minimum Requirements
          </div>
          <MinimumRequirements />
          <Disclaimer />
        </div>
        <div className="caret-transparent block min-w-[53px] outline-[3px] no-underline align-baseline md:table-cell md:align-middle"></div>
        <div className="caret-transparent block min-w-[177px] outline-[3px] no-underline align-top pt-[25px] md:table-cell"></div>
      </div>
    </div>
  );
};
