import { useState } from "react";
import { credentialContent } from "@/data/credentialContent";

export const CredentialStatus = () => {
  const [isExpiresNoteVisible, setIsExpiresNoteVisible] = useState(false);

  return (
    <div className="bg-[linear-gradient(rgba(226,225,226,0.6)_0%,rgba(209,207,208,0.6)_100%)] caret-transparent outline-[3px] relative no-underline rounded-[15px] border-2 border-solid border-white">
      <div className="bg-transparent caret-transparent outline-[3px] static text-start no-underline align-baseline w-auto rounded-l-none left-auto inset-y-auto md:bg-green-800 md:absolute md:text-center md:align-middle md:w-[43px] md:rounded-l-[15px] md:left-0 md:inset-y-0">
        <div className="caret-transparent block h-full outline-[3px] text-start no-underline w-[100px] md:table md:text-center">
          <div className="caret-transparent block outline-[3px] text-start no-underline md:table-row md:text-center">
            <div className="caret-transparent block outline-[3px] text-start no-underline align-baseline md:table-cell md:text-center md:align-middle">
              <div className="caret-transparent text-black outline-[3px] static text-start no-underline transform-none left-auto font-avenir md:text-white md:left-[-27px] md:relative md:text-center md:-rotate-90 md:font-arial">
                {credentialContent.status.label}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="caret-transparent outline-[3px] no-underline pl-[65px] pr-[145px]">
        <table className="caret-transparent outline-[3px] no-underline w-full">
          <tbody className="caret-transparent outline-[3px] no-underline">
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="caret-transparent h-auto outline-[3px] no-underline align-middle p-0 md:h-20">
                <div className="caret-transparent text-black text-base font-normal leading-[normal] outline-[3px] static no-underline normal-case pt-0.5 pb-0 md:text-sky-800 md:text-sm md:font-bold md:leading-3 md:relative md:uppercase md:pb-[3px]">
                  Issued By
                </div>
                <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-[15px]">
                  {credentialContent.issuer.name}
                </div>
                <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-[15px]">
                  <a
                    href={credentialContent.links.issuerEmail}
                    className="caret-transparent text-cyan-700 text-xs leading-[normal] outline-[3px] underline md:leading-[15px]"
                  >
                    {credentialContent.issuer.email}
                  </a>
                     
                  <a
                    href={credentialContent.links.issuerPhone}
                    className="caret-transparent text-cyan-700 text-xs leading-[normal] outline-[3px] underline md:leading-[15px]"
                  >
                    {credentialContent.issuer.phone}
                  </a>
                </div>
              </td>
              <td className="caret-transparent min-w-0 outline-[3px] no-underline align-middle p-0 md:min-w-2.5"></td>
              <td className="caret-transparent h-auto outline-[3px] no-underline align-middle p-0 md:h-20">
                <div className="caret-transparent text-black text-base font-normal leading-[normal] outline-[3px] static no-underline normal-case pb-0 md:text-sky-800 md:text-sm md:font-bold md:leading-3 md:relative md:uppercase md:pb-[3px]">
                  Certified Since
                </div>
                <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-[15px]">
                  {credentialContent.credential.certifiedSince}
                </div>
              </td>
              <td className="caret-transparent min-w-0 outline-[3px] no-underline align-middle p-0 md:min-w-2.5"></td>
              <td className="caret-transparent h-auto outline-[3px] no-underline align-middle p-0 md:h-20">
                <div className="caret-transparent text-black text-base font-normal leading-[normal] outline-[3px] static no-underline normal-case pb-0 md:text-sky-800 md:text-sm md:font-bold md:leading-3 md:relative md:uppercase md:pb-[3px]">
                  Certification Number
                </div>
                <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-[15px]">
                  {credentialContent.credential.number}
                </div>
              </td>
            </tr>
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="bg-neutral-400 caret-transparent h-px outline-[3px] no-underline align-middle p-0"></td>
            </tr>
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="caret-transparent h-auto outline-[3px] no-underline align-middle p-0 md:h-20">
                <div className="caret-transparent text-black text-base font-normal leading-[normal] outline-[3px] static no-underline normal-case pb-0 md:text-sky-800 md:text-sm md:font-bold md:leading-3 md:relative md:uppercase md:pb-[3px]">
                  This Credential Accredited By
                </div>
                <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-[15px]">
                  {credentialContent.credential.accreditedBy}
                </div>
              </td>
              <td className="caret-transparent min-w-0 outline-[3px] no-underline align-middle p-0 md:min-w-2.5"></td>
              <td className="caret-transparent h-auto outline-[3px] no-underline align-middle p-0 md:h-20">
                <div className="caret-transparent text-black text-base font-normal leading-[normal] outline-[3px] static no-underline normal-case pb-0 md:text-sky-800 md:text-sm md:font-bold md:leading-3 md:relative md:uppercase md:pb-[3px]">
                  Expires 
                  <a
                    href={credentialContent.links.issueHub}
                    onClick={(event) => {
                      event.preventDefault();
                      setIsExpiresNoteVisible((previous) => !previous);
                    }}
                    className="caret-transparent text-sky-800 text-base font-normal leading-[normal] outline-[3px] underline normal-case md:text-sm md:font-bold md:leading-3 md:uppercase"
                  >
                    <span className="caret-transparent text-base font-normal leading-[normal] outline-[3px] relative no-underline normal-case top-0.5 md:text-sm md:font-bold md:leading-3 md:uppercase">
                      <img
                        src={credentialContent.assets.desktopInfoIcon}
                        className="caret-transparent inline text-base font-normal leading-[normal] outline-[3px] no-underline normal-case align-baseline w-[15px] md:text-sm md:font-bold md:leading-3 md:uppercase"
                      />
                    </span>
                  </a>
                  <div
                    className={`caret-transparent text-base leading-[normal] outline-[3px] absolute no-underline left-20 top-[30px] md:text-sm md:left-[-120px] md:leading-3 md:top-[26px] ${isExpiresNoteVisible ? "block" : "hidden"}`}
                  >
                    <div className="bg-sky-800 shadow-[rgb(128,128,128)_3px_3px_18px_0px] caret-transparent text-white leading-5 outline-[3px] relative text-left no-underline w-auto p-5 rounded-[20px] border-2 border-solid border-white inset-x-0 font-arial md:bg-cyan-700 md:static md:w-[350px] md:inset-x-auto">
                      {credentialContent.credential.expiresNote}
                    </div>
                  </div>
                </div>
                <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-[15px]">
                  {credentialContent.credential.expires}
                </div>
              </td>
              <td className="caret-transparent min-w-0 outline-[3px] no-underline align-middle p-0 md:min-w-2.5"></td>
              <td className="caret-transparent h-auto outline-[3px] no-underline align-middle p-0 md:h-20">
                <div className="caret-transparent text-black text-base font-normal leading-[normal] outline-[3px] static no-underline normal-case pb-0 md:text-sky-800 md:text-sm md:font-bold md:leading-3 md:relative md:uppercase md:pb-[3px]">
                  RECERTIFICATION CYCLE
                </div>
                <div className="caret-transparent text-base leading-[normal] outline-[3px] no-underline md:text-lg md:leading-[15px]">
                  {credentialContent.credential.recertificationCycle}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
