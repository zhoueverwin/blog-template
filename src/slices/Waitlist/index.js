import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.WaitlistSlice} WaitlistSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WaitlistSlice>} WaitlistProps
 * @param {WaitlistProps}
 */
const Waitlist = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white overflow-hidden flex flex-col items-end justify-start pt-16 px-20 pb-[81px] box-border gap-[300.5px] leading-[normal] tracking-[normal] mq450:gap-[75px] mq750:gap-[150px] mq750:pl-10 mq750:pr-10 mq750:box-border"
    >
      <header className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px">
        <nav className="m-0 h-[30px] w-[243px] relative" />
      </header>

      <div className="self-stretch flex flex-row items-start justify-center max-w-full text-center text-45xl text-black font-body-text">
        <div className="w-[842px] flex flex-col items-center justify-center gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit mq450:text-19xl mq750:text-32xl">
            <PrismicRichText field={slice.primary.title} />
          </h1>
          <div className="self-stretch relative text-5xl leading-[150%] text-gray mq450:text-lgi mq450:leading-[29px]">
            <PrismicRichText field={slice.primary.explanation} />
          </div>
          <div className="flex flex-row items-center justify-center gap-[16px] max-w-full mq675:flex-wrap">
            <div className="w-[327px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white box-border flex flex-row items-center justify-start py-3.5 px-4 max-w-full border-[1px] border-solid border-gainsboro">
              <input
                className="w-[270px] [border:none] [outline:none] font-medium font-body-text text-xl bg-[transparent] h-[30px] relative leading-[150%] text-gray text-left inline-block whitespace-nowrap p-0 mq450:text-base mq450:leading-[24px]"
                placeholder="youremail@fakedomain.com"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] py-4 px-7 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-darkslategray">
              <div className="relative text-xl leading-[150%] font-medium font-body-text text-white text-left inline-block min-w-[68px] mq450:text-base mq450:leading-[24px]">
                <PrismicRichText field={slice.primary.button} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <section className="self-stretch h-[87px] relative">
        <div className="absolute top-[47px] left-[0px] w-[1280px] h-10">
          <div className="absolute top-[0px] left-[1096px] w-[184px] h-10" />
        </div>
      </section>
    </section>
  );
};

export default Waitlist;
