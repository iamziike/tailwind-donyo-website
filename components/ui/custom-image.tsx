"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const CustomImage = ({ alt = "custom-image", ...props }: ImageProps) => {
  const [showBrokenImage, setShowBrokenImage] = useState(false);

  if (showBrokenImage) return <BrokenImage height={props.height} />;

  return (
    <Image
      {...props}
      alt={alt}
      onError={() => {
        setShowBrokenImage(true);
      }}
    />
  );
};

export default CustomImage;

const BrokenImage = ({ height }: { height?: number | `${number}` }) => {
  return (
    <div className="mx-auto" style={{ height }}>
      <svg
        viewBox={`0 0 24 24`}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-30"
        style={{
          height: "100%",
        }}
      >
        <polygon
          className="fill-primary"
          style={{ strokeMiterlimit: 10, strokeWidth: "1.91px" }}
          points="20.59 6.27 20.59 7.23 14.86 7.23 14.86 1.5 15.82 1.5 20.59 6.27"
        />
        <polygon
          className="fill-primary"
          style={{ strokeMiterlimit: 10, strokeWidth: "1.91px" }}
          points="20.59 12 17.73 13.91 14.86 12 11.99 13.91 9.14 12 6.27 13.91 3.41 12 3.41 1.5 15.82 1.5 20.59 6.27 20.59 12"
        />
        <polygon
          className="fill-primary"
          style={{ strokeMiterlimit: 10, strokeWidth: "1.91px" }}
          points="20.59 15.82 17.73 17.73 14.86 15.82 11.99 17.73 9.14 15.82 6.27 17.73 3.41 15.82 3.41 22.5 20.59 22.5 20.59 15.82"
        />
      </svg>
    </div>
  );
};
