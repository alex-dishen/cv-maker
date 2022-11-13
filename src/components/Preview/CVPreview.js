import React from "react";
import { NameAndPitch, Contacts } from "./PersonalPreview";
import ExperiencePrev from "./ExperiencePreview";
import EducationPrev from "./EducationPreview";
import SkillsPrev from "./SkillsPreview";
import '../../styles/cv_preview.css'

function CVPreview({ info }) {
    return (
        <div className="cvPreview">
            <NameAndPitch 
                info={info}/>
            <ExperiencePrev />
            <div className="education-skills">
                <EducationPrev 
                    info={info}/>
                <SkillsPrev />
            </div>
            <Contacts 
                info={info}/>
        </div>
    );
}

export default CVPreview;