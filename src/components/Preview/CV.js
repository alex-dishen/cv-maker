import React from "react";
import { NameAndPitch, Contacts } from "./PersonalPreview";
import ExperiencePrev from "./ExperiencePreview";
import EducationPrev from "./EducationPreview";
import SkillsPrev from "./SkillsPreview";

class CV extends React.Component {
    render() {
        return (
            <div>
                <NameAndPitch />
                <ExperiencePrev />
                <EducationPrev />
                <SkillsPrev />
                <Contacts />
            </div>
        );
    }
}

export default CV;