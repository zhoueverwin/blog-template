import { PrismicRichText } from "@prismicio/react";
import styles from './EmbedVideo.module.css';  // Import the CSS module

/**
 * @typedef {import("@prismicio/client").Content.EmbedVideoSlice} EmbedVideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedVideoSlice>} EmbedVideoProps
 * @param {EmbedVideoProps}
 */

const backgroundColor = {
  Grey: 'bg-grey',
  Green: 'bg-greenGrey',
};

const EmbedVideo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`grid justify-center items-center text-center w-screen h-screen ${slice.primary.background_color ? backgroundColor[slice.primary.background_color] : backgroundColor.Grey}`}>
        <div className="container gap-8 flex flex-col items-center">
          <PrismicRichText field={slice.primary.test} />
          {slice.primary.embed && slice.primary.embed.html ? (
            <div className={styles['video-container']} dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} />
          ) : (
            <p>Video is not available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmbedVideo;
