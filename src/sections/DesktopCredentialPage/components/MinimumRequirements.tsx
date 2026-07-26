import { credentialContent } from "@/data/credentialContent";

export const MinimumRequirements = () => {
  const requirements = credentialContent.requirements;

  return (
    <table className="caret-transparent outline-[3px] no-underline w-full">
      <tbody className="caret-transparent outline-[3px] no-underline">
        <tr className="caret-transparent outline-[3px] no-underline align-middle"></tr>
        <tr className="caret-transparent outline-[3px] no-underline align-middle">
          <td className="bg-none caret-transparent h-auto min-w-0 outline-[3px] no-underline align-middle p-0 rounded-none border-0 border-none border-black md:bg-[linear-gradient(rgb(119,168,40)_0%,rgb(68,105,8)_100%)] md:h-[42px] md:min-w-[42px] md:border md:border-lime-950 md:rounded-[11px] md:border-solid">
            <div className="caret-transparent outline-[3px] static no-underline top-auto md:relative md:-top-px md:flex md:h-full md:w-full md:items-center md:justify-center">
              <img
                src={requirements[0].desktopIcon}
                className="caret-transparent block outline-[3px] no-underline"
              />
            </div>
          </td>
          <td className="caret-transparent text-base leading-[18px] outline-[3px] no-underline align-middle w-6/12 pl-2.5 pr-[25px] pt-[3px] pb-0 md:text-lg">
            {requirements[0].label}
          </td>
          <td className="bg-none caret-transparent h-auto min-w-0 outline-[3px] no-underline align-middle p-0 rounded-none border-0 border-none border-black md:bg-[linear-gradient(rgb(119,168,40)_0%,rgb(68,105,8)_100%)] md:h-[42px] md:min-w-[42px] md:border md:border-lime-950 md:rounded-[11px] md:border-solid">
            <div className="caret-transparent outline-[3px] static no-underline top-auto md:relative md:-top-px md:flex md:h-full md:w-full md:items-center md:justify-center">
              <img
                src={requirements[1].desktopIcon}
                className="caret-transparent block outline-[3px] no-underline"
              />
            </div>
          </td>
          <td className="caret-transparent text-base leading-[18px] outline-[3px] no-underline align-middle w-6/12 pl-2.5 pr-[25px] pt-[3px] pb-0 md:text-lg">
            {requirements[1].label}
          </td>
        </tr>
        <tr className="caret-transparent outline-[3px] no-underline align-middle">
          <td className="caret-transparent h-[15px] outline-[3px] no-underline align-middle p-0"></td>
        </tr>
        <tr className="caret-transparent outline-[3px] no-underline align-middle">
          <td className="bg-none caret-transparent h-auto min-w-0 outline-[3px] no-underline align-middle p-0 rounded-none border-0 border-none border-black md:bg-[linear-gradient(rgb(119,168,40)_0%,rgb(68,105,8)_100%)] md:h-[42px] md:min-w-[42px] md:border md:border-lime-950 md:rounded-[11px] md:border-solid">
            <div className="caret-transparent outline-[3px] static no-underline top-auto md:relative md:-top-px md:flex md:h-full md:w-full md:items-center md:justify-center">
              <img
                src={requirements[2].desktopIcon}
                className="caret-transparent block outline-[3px] no-underline"
              />
            </div>
          </td>
          <td className="caret-transparent text-base leading-[18px] outline-[3px] no-underline align-middle w-6/12 pl-2.5 pr-[25px] pt-[3px] pb-0 md:text-lg">
            {requirements[2].label}
          </td>
          <td className="bg-none caret-transparent h-auto min-w-0 outline-[3px] no-underline align-middle p-0 rounded-none border-0 border-none border-black md:bg-[linear-gradient(rgb(119,168,40)_0%,rgb(68,105,8)_100%)] md:h-[42px] md:min-w-[42px] md:border md:border-lime-950 md:rounded-[11px] md:border-solid">
            <div className="caret-transparent outline-[3px] static no-underline top-auto md:relative md:-top-px md:flex md:h-full md:w-full md:items-center md:justify-center">
              <img
                src={requirements[3].desktopIcon}
                className="caret-transparent block outline-[3px] no-underline"
              />
            </div>
          </td>
          <td className="caret-transparent text-base leading-[18px] outline-[3px] no-underline align-middle w-6/12 pl-2.5 pr-[25px] pt-[3px] pb-0 md:text-lg">
            {requirements[3].label}
          </td>
        </tr>
        <tr className="caret-transparent outline-[3px] no-underline align-middle">
          <td className="caret-transparent h-[15px] outline-[3px] no-underline align-middle p-0"></td>
        </tr>
      </tbody>
    </table>
  );
};
