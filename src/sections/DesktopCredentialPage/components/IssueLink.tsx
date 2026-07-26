export type IssueLinkProps = {
  href: string;
  text?: string;
  onClick?: () => void;
};

export const IssueLink = ({
  href,
  text = "ISSUES / ETHICS COMPLAINTS / UNAUTHORIZED USE",
  onClick,
}: IssueLinkProps) => {
  return (
    <div className="caret-transparent outline-[3px] absolute no-underline z-20 right-[25px] top-0">
      <a
        href={href}
        onClick={(event) => {
          if (onClick) {
            event.preventDefault();
            onClick();
          }
        }}
        className="caret-transparent text-sky-800 outline-[3px] no-underline"
      >
        <div className="caret-transparent text-black table h-[39px] outline-[3px] no-underline">
          <div className="caret-transparent table-row outline-[3px] no-underline">
            <div className="caret-transparent table-cell outline-[3px] text-right no-underline align-middle">
              <div className="caret-transparent text-yellow-300 text-sm outline-[3px] no-underline pt-px font-avenir">
                {text}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
