import React, { useEffect, useRef } from "react";
import { plusIcon, minusIcon } from "../assets/images";

function Accordion({ data = [] }) {
  const isOpenRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    isOpenRefs.current.forEach((detailsElement, index) => {
      if (detailsElement && imgRefs.current[index]) {
        imgRefs.current[index].src = detailsElement.open ? minusIcon : plusIcon;
      }
    });
  }, [data]);

  const handleToggle = (index) => {
    const detailsElement = isOpenRefs.current[index];
    const imgElement = imgRefs.current[index];
    if (detailsElement && imgElement) {
      imgElement.src = detailsElement.open ? minusIcon : plusIcon;
    }
  };

  return (
    <div className="z-10 divide-y-2">
      {data.map(({ id, content }, index) => (
        <details
          key={id}
          className="space-y-4 py-4"
          open={id === 1}
          name="accordion-items"
          ref={(el) => (isOpenRefs.current[index] = el)}
          onToggle={() => handleToggle(index)}
        >
          <summary className="inline-flex w-full cursor-pointer items-center justify-between hover:text-[#ad28eb]">
            <span className="text-balance font-medium md:text-lg">
              {content}
            </span>
            <img
              src={minusIcon}
              ref={(el) => (imgRefs.current[index] = el)}
              alt={"minus icon"}
              className="size-6"
            />
          </summary>
          <p className="text-gray-500">
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </p>
        </details>
      ))}
    </div>
  );
}

export default Accordion;
