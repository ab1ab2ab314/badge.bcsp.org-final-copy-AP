export const EmailModal = () => {
  return (
    <div className="caret-transparent hidden outline-[3px] fixed no-underline z-[20000] left-auto top-auto font-avenir md:left-[calc(50%_-_398px)] md:top-[calc(50%_-_265px)]">
      <form
        name="contactform"
        className="caret-transparent outline-[3px] no-underline mb-4"
      >
        <div className="bg-zinc-100 shadow-[rgb(128,128,128)_3px_3px_18px_0px] caret-transparent text-white h-auto leading-5 outline-[3px] absolute text-left no-underline w-[700px] z-[200] p-5 rounded-[20px] border-2 border-solid border-white font-arial md:bg-gray-200 md:h-[500px] md:text-start md:w-[750px] md:z-auto">
          <div className="caret-transparent text-black outline-[3px] absolute text-left no-underline right-[13px] top-3.5 font-avenir md:text-start">
            <a
              href="javascript://;"
              className="caret-transparent text-sky-800 outline-[3px] text-left no-underline md:text-start"
            >
              <div className="caret-transparent text-black text-xl outline-[3px] text-left no-underline font-arial md:text-start">
                ✕
              </div>
            </a>
          </div>
          <input
            type="hidden"
            name="contactto"
            value=""
            className="appearance-none bg-transparent box-border caret-transparent text-black hidden text-[13.3333px] leading-[normal] outline-[3px] no-underline p-0 font-arial"
          />
          <div className="caret-transparent text-black outline-[3px] absolute text-left no-underline top-[15px] font-avenir md:text-start">
            Send an email to this credential holder
          </div>
          <div className="bg-white caret-transparent text-black outline-[3px] overflow-x-auto overflow-y-scroll absolute text-left no-underline pt-[5px] px-5 rounded-[10px] top-[50px] bottom-5 inset-x-5 font-avenir md:text-start">
            <div className="caret-transparent text-zinc-500 text-sm outline-[3px] text-left no-underline pt-2.5 md:text-start">
              Subject
            </div>
            <div className="bg-[linear-gradient(rgb(232,232,231)_0%,rgb(252,252,252)_100%)] caret-transparent outline-[3px] text-left no-underline border-neutral-400 pl-2 pr-[7px] border-2 border-solid md:text-start">
              <input
                type="text"
                name="contactsubject"
                className="bg-transparent box-border caret-transparent text-zinc-800 leading-[normal] outline-[3px] text-left no-underline w-full mt-1.5 mb-1"
              />
            </div>
            <div className="caret-transparent text-zinc-500 text-sm outline-[3px] text-left no-underline pt-2.5 md:text-start">
              Message
            </div>
            <div className="bg-[linear-gradient(rgb(232,232,231)_0%,rgb(252,252,252)_100%)] caret-transparent outline-[3px] text-left no-underline border-neutral-400 pl-2 pr-[7px] border-2 border-solid md:text-start">
              <textarea
                name="contactmessage"
                className="bg-transparent box-border caret-transparent text-zinc-800 h-[280px] leading-[normal] outline-[3px] text-left no-underline w-full mt-1.5 mb-1"
              ></textarea>
            </div>
            <div className="caret-transparent h-[15px] outline-[3px] text-left no-underline md:text-start"></div>
            <div className="caret-transparent outline-[3px] no-underline">
              <a
                href="javascript://;"
                className="caret-transparent text-sky-800 outline-[3px] no-underline"
              >
                <div className="bg-none caret-transparent text-black text-base outline-[3px] no-underline normal-case w-[150px] p-0 rounded-none border-0 border-none border-black md:bg-[linear-gradient(rgb(1,116,177)_0%,rgb(0,77,147)_100%)] md:text-white md:text-sm md:text-center md:uppercase md:pt-2.5 md:pb-[9px] md:px-[25px] md:rounded-[25px] md:border-2 md:border-solid md:border-white">
                  Send Message
                </div>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
