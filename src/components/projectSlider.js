import React, { useState } from "react";
import { ProjectData } from "./projectData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ReactComponent as Cursor } from "./../assets/images/cursorDark.svg";

const ProjectSlider = ({ setBackground }) => {
  const [current, setCurrent] = useState(0);
  const length = ProjectData.length;

  const backgroundImage = (b) => {
    setBackground(b);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ProjectData) || ProjectData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <Cursor className="left-arrow" onClick={prevSlide} />
      <Cursor className="right-arrow" onClick={nextSlide} />
      {ProjectData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            onChange={setBackground(current)}
          >
            {/* <img src={slide.img} alt='project image' className='image' /> */}
            {/* <h4>{slide.title}</h4>
              <p>{slide.description}</p>
              <p>{slide.stack}</p>
              <a href={slide.link}>visit</a> */}
            {index === current && (
              <>
                <img 
                style={slide.transform ? slide.transform : null} src={slide.img} alt="project image" className="image" loading="lazy"/>
                <div className="detail">
                  <h4>{slide.title}</h4>
                  <p className="desc">{slide.description}</p>
                  <p>
                    {Array.isArray(slide.stack) ? (
                      slide.stack.map((sub_stack, outer_index) => (
                        <span>
                          {sub_stack.map((stack_text, inner_index) => (
                          <p key={inner_index} className="stack">
                          {stack_text}
                            </p>
                        ))}
                        </span>
                        
                      )
                      
                      )
                    ) : (
                      <span><p className="stack" style={{textTransform: null, paddingTop: '10px'}}>{slide.stack}</p></span>
                    )}
                    
                  <span><a href={slide.link} target="_blank">
                      visit ↵
                    </a>
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ProjectSlider;
