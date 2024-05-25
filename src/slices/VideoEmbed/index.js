import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.VideoEmbedSlice} VideoEmbedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoEmbedSlice>} VideoEmbedProps
 * @param {VideoEmbedProps}
 */

const BackgroundColor = {
  Grey: 'bg-gray-200',
  Green: 'bg-green-200',
};

const VideoEmbed = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`w-screen h-screen ${slice.primary.background_color ? BackgroundColor[slice.primary.background_color] : BackgroundColor.Grey} flex items-center justify-center`}
    >
      <div className="container gap-8 flex flex-col items-center">
        <PrismicRichText field={slice.primary.title} className="text-2xl font-semibold mb-4" />
        <div >
          <div
            dangerouslySetInnerHTML={{
              __html: slice.primary.embed.html,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoEmbed;
