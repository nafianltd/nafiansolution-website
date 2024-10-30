// import { Content } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `Heroo`.
//  */
// export type HerooProps = SliceComponentProps<Content.HerooSlice>;

// /**
//  * Component for "Heroo" Slices.
//  */
// const Heroo = ({ slice }: HerooProps): JSX.Element => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       Placeholder component for heroo (variation: {slice.variation}) Slices
//     </section>
//   );
// };

// export default Heroo;

import ButtonLink from "@/components/ButtonLink";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
// 
/**
 * Props for `Hero`
 */

export type HerooProps = SliceComponentProps<Content.HerooSlice>;

const Heroo = ({ slice }: HerooProps): JSX.Element => {
/**
 * Component for "Hero" Slices.
 */
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="text-balance text-5xl font-medium md:text-7xl">
            <PrismicText field={slice.primary.heading} /> 
          </h1>
        )}


        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
            <PrismicRichText field={slice.primary.body} /> 
          </div>
        )}
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        )}

        {isFilled.image(slice.primary.image) && (
          <div className="glass-container mt-16 w-fit mx-auto max-w-[70%] md:max-w-[60%]">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <PrismicNextImage className="rounded-lg" field={slice.primary.image} /> 
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Heroo;

