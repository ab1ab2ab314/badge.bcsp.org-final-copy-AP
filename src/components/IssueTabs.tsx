export const IssueTabs = () => {
  return (
    <div className="caret-transparent text-black outline-[3px] static no-underline pt-0 inset-x-auto font-avenir md:left-[-15px] md:absolute md:right-[-15px] md:pt-[22px]">
      <table className="caret-transparent leading-[normal] outline-[3px] text-start no-underline w-full">
        <tbody className="caret-transparent outline-[3px] no-underline">
          <tr className="caret-transparent outline-[3px] no-underline align-middle">
            <td className="caret-transparent outline-[3px] no-underline align-middle w-[33%] p-0">
              <a
                href="javascript://;"
                className="caret-transparent text-sky-800 outline-[3px] no-underline"
              >
                <div className="bg-none caret-transparent text-black text-base outline-[3px] text-start no-underline normal-case p-0 rounded-l-none border-0 border-none border-black md:bg-[linear-gradient(rgb(1,116,177)_0%,rgb(0,77,147)_100%)] md:text-white md:text-sm md:text-center md:uppercase md:pt-2.5 md:pb-[9px] md:px-[25px] md:rounded-l-[25px] md:border-2 md:border-solid md:border-white">
                  Technical Issue
                </div>
              </a>
            </td>
            <td className="caret-transparent outline-[3px] no-underline align-middle w-[33%] p-0">
              <a
                href="javascript://;"
                className="caret-transparent text-sky-800 outline-[3px] no-underline"
              >
                <div className="bg-none caret-transparent text-black text-base outline-[3px] text-start no-underline normal-case p-0 border-y-0 border-black md:bg-[linear-gradient(rgb(1,116,177)_0%,rgb(0,77,147)_100%)] md:text-white md:text-sm md:text-center md:uppercase md:pt-2.5 md:pb-[9px] md:px-[25px] md:border-y-2 md:border-white">
                  Wrong Information
                </div>
              </a>
            </td>
            <td className="caret-transparent outline-[3px] no-underline align-middle w-[33%] p-0">
              <a
                href="javascript://;"
                className="caret-transparent text-sky-800 outline-[3px] no-underline"
              >
                <div className="bg-none caret-transparent text-black text-base outline-[3px] relative text-start no-underline normal-case p-0 rounded-r-none border-0 border-none border-black md:bg-[linear-gradient(rgb(1,116,177)_0%,rgb(0,77,147)_100%)] md:text-white md:text-sm md:text-center md:uppercase md:pt-2.5 md:pb-[9px] md:px-[25px] md:rounded-r-[25px] md:border-2 md:border-solid md:border-white">
                   
                  <div className="caret-transparent text-white text-[11px] leading-3 outline-[3px] absolute text-center no-underline normal-case top-2 inset-x-0 md:uppercase">
                    Ethics Violation &amp; Unauthorized
                    <br className="caret-transparent outline-[3px] no-underline normal-case md:uppercase" />
                    Use Complaints Form
                  </div>
                </div>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
