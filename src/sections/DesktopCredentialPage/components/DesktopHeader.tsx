export type DesktopHeaderProps = {
  rootVariantClassName: string;
  innerVariantClassName: string;
  showProfile: boolean;
  name: string;
  location: string;
};

export const DesktopHeader = (props: DesktopHeaderProps) => {
  return (
    <div
      className={`caret-transparent outline-[3px] absolute no-underline ${props.rootVariantClassName}`}
    >
      <div
        className={`caret-transparent table outline-[3px] no-underline ${props.innerVariantClassName}`}
      >
        <div className="caret-transparent table-row outline-[3px] no-underline">
          {props.showProfile ? (
            <div className="caret-transparent table-cell outline-[3px] no-underline align-middle">
              <div className="caret-transparent text-white text-4xl leading-6 outline-[3px] no-underline pt-[7px] font-avenir">
                {props.name}{" "}
                <span className="caret-transparent text-slate-400 text-xl outline-[3px] no-underline">
                  {" "}
                </span>
              </div>
              <div className="caret-transparent text-sky-200 outline-[3px] no-underline pl-0.5 pt-[13px] font-avenir">
                {props.location}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
