import React from "react";
import { NameAndPitch, Contacts } from "./PersonalPreview";
import ExperiencePrev from "./ExperiencePreview";
import EducationPrev from "./EducationPreview";
import SkillsPrev from "./SkillsPreview";
import '../../styles/cv_preview.css'

class CVPreview extends React.Component {
    render() {
        return (
            <div className="cvPreview">
                <NameAndPitch />
                <ExperiencePrev />
                <EducationPrev />
                <SkillsPrev />
                <Contacts />
            </div>
        );
    }
}

export default CVPreview;