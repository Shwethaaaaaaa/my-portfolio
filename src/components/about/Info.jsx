import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bxs-graduation about__icon'></i>
                <h3 className="about__title">Student</h3>
                <span className="about__subtitle">3rd year of Masters in Theoretical Computer Science</span>
            </div>

            <div className="about__box">
            <i class= 'bx bx-briefcase-alt about__icon' ></i>   
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ Projects (including non web-dev projects)</span>
            </div>

            <div className="about__box">
            <i class='bx bxs-bookmark-heart about__icon'></i>
                <h3 className="about__title">Interests</h3>
                <span className="about__subtitle">Machine Learning, Data Engineering</span>
            </div>
        </div>
    )
}

export default Info