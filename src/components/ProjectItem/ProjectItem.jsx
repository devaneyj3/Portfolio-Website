import React, { useState, useEffect } from "react";
import item from "../../data/projects";
import "./project-item.scss";

const ProjectItem = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setItems(item[activeIndex]);
  }, [activeIndex, items]);

  const next = () => {
    const nextIndex = activeIndex === item.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? item.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const { live_project, image, description, name } = items;
  console.log(description);
  return (
    <div className="project">
        <div xs="6" sm="4" className="prev" onClick={previous}>
				{"<"}</div>
        <div xs="6" sm="4" className='info'><h1>{name}</h1>
      <img src={image} alt={image} />
      <a href={live_project}>Go To Live Project</a></div>
        <div sm="4" className="next" onClick={next}>
          {">"}</div>
      {/* {description.map(detail => {
						return (
							<li>{detail}</li>
						)
					})}                                                               */}
    </div>
  );
};

export default ProjectItem;
