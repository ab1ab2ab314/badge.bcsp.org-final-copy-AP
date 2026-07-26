import { credentialContent } from "@/data/credentialContent";

export const MobileRequirements = () => {
  const requirements = credentialContent.requirements;

  return (
    <div className="bg-lime-100 caret-transparent outline-[3px] relative no-underline z-[1]">
      <div className="caret-transparent outline-[3px] no-underline px-2.5 md:px-0">
        <div className="caret-transparent text-lime-500 text-[15px] font-bold outline-[3px] text-center no-underline uppercase pt-5 pb-[15px] font-arial md:text-xs md:normal-case md:font-avenir">
          CHST
          <span className="caret-transparent text-[8px] outline-[3px] relative no-underline uppercase -top-1.5 font-arial md:normal-case md:font-avenir">
            ®
          </span>
           Certification Minimum Requirements
        </div>
        <table className="caret-transparent outline-[3px] text-start no-underline w-full">
          <tbody className="caret-transparent outline-[3px] no-underline">
            <tr className="caret-transparent outline-[3px] no-underline align-middle"></tr>
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="caret-transparent outline-[3px] no-underline align-middle w-9 pl-0 pr-2 py-0">
                <img
                  src={requirements[0].mobileIcon}
                  className="caret-transparent block h-9 outline-[3px] no-underline mx-auto"
                />
              </td>
              <td className="caret-transparent text-sm leading-[14px] outline-[3px] no-underline align-middle p-0 font-arial">
                {requirements[0].label}
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-middle p-0">
                <div className="caret-transparent outline-[3px] no-underline w-2.5"></div>
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-middle w-9 pl-0 pr-2 py-0">
                <img
                  src={requirements[1].mobileIcon}
                  className="caret-transparent block h-9 outline-[3px] no-underline mx-auto"
                />
              </td>
              <td className="caret-transparent text-sm leading-[14px] outline-[3px] no-underline align-middle p-0 font-arial">
                {requirements[1].label}
              </td>
            </tr>
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="caret-transparent h-5 outline-[3px] no-underline align-middle p-0"></td>
            </tr>
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="caret-transparent outline-[3px] no-underline align-middle w-9 pl-0 pr-2 py-0">
                <img
                  src={requirements[2].mobileIcon}
                  className="caret-transparent block h-9 outline-[3px] no-underline mx-auto"
                />
              </td>
              <td className="caret-transparent text-sm leading-[14px] outline-[3px] no-underline align-middle p-0 font-arial">
                {requirements[2].label}
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-middle p-0">
                <div className="caret-transparent outline-[3px] no-underline w-2.5"></div>
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-middle w-9 pl-0 pr-2 py-0">
                <img
                  src={requirements[3].mobileIcon}
                  className="caret-transparent block h-9 outline-[3px] no-underline mx-auto"
                />
              </td>
              <td className="caret-transparent text-sm leading-[14px] outline-[3px] no-underline align-middle p-0 font-arial">
                {requirements[3].label}
              </td>
            </tr>
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="caret-transparent h-5 outline-[3px] no-underline align-middle p-0"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
