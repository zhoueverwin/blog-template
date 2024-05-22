/**
 * @typedef {import("@prismicio/client").Content.EmbedVideoSlice} EmbedVideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedVideoSlice>} EmbedVideoProps
 * @param {EmbedVideoProps}
 */
const EmbedVideo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for embed_video (variation: {slice.variation})
      Slices
    </section>
  );
};

export default EmbedVideo;
