export type IssueModalProps = {
  isOpen: boolean;
  issueTabs: React.ReactNode;
  issueForm: React.ReactNode;
  onClose?: () => void;
};

export const IssueModal = (props: IssueModalProps) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="caret-transparent outline-[3px] fixed no-underline z-[19999] inset-0 font-avenir">
      <div className="bg-neutral-600/80 caret-transparent outline-[3px] absolute no-underline inset-0"></div>
      <div className="caret-transparent outline-[3px] absolute no-underline left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[calc(50%_-_398px)] md:top-[calc(50%_-_265px)] md:translate-x-0 md:translate-y-0">
        <div className="bg-zinc-100 shadow-[rgb(128,128,128)_3px_3px_18px_0px] caret-transparent text-white h-auto leading-5 outline-[3px] relative text-left no-underline w-[700px] z-[200] p-5 rounded-[20px] border-2 border-solid border-white font-arial md:bg-gray-200 md:h-[500px] md:static md:text-start md:w-[750px] md:z-auto">
          <div className="caret-transparent text-black outline-[3px] absolute text-left no-underline z-20 right-[13px] top-3.5 font-avenir md:text-start">
            <a
              href="javascript://;"
              onClick={(event) => {
                event.preventDefault();
                props.onClose?.();
              }}
              className="caret-transparent text-sky-800 outline-[3px] text-left no-underline md:text-start"
            >
              <div className="caret-transparent text-black text-xl outline-[3px] text-left no-underline font-arial md:text-start">
                ✕
              </div>
            </a>
          </div>
          <div className="caret-transparent text-black outline-[3px] absolute text-left no-underline top-[15px] font-avenir md:text-start">
            Select Issue Type...
          </div>
          {props.issueTabs}
          {props.issueForm}
        </div>
      </div>
    </div>
  );
};
