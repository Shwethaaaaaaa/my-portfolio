import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {

    const[toggleState,setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }


  return (
    <section className="qualifation section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className= {
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick = {() =>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap
                     qualification__icon"></i>Education
                </div>

                <div className=                    
                    {toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick = {() =>toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt
                     qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualifications__sections">
                <div className= {toggleState === 1 
                    ? "qualification__content qualification__content-active"
                    :  "qualification__content"
                }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">MSc TCS</h3>
                            <span className="qualification__subtitle">
                                PSG College of Technology
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">Higher Secondary</h3>
                            <span className="qualification__subtitle">
                                Suguna PIP School
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i>2019-2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary</h3>
                            <span className="qualification__subtitle">
                                Suguna PIP School
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i>2017-2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>

                    </div>

                </div>


                <div className= 
                {toggleState === 2 
                    ? "qualification__content qualification__content-active"
                    :  "qualification__content"
                 }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Role 1</h3>
                            <span className="qualification__subtitle">
                                Workplace 1
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i>Year
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">Role 2</h3>
                            <span className="qualification__subtitle">
                                Workplace 2
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i>year
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Role 3</h3>
                            <span className="qualification__subtitle">
                                Workplace 3
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i>Year
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>

                    </div>




                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualification