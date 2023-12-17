
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow, IonText } from "@ionic/react";
import { EducationStruct, education } from "../assets/text/education";

import "./Education.css"

const EducationCard = (props: { data: EducationStruct }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.data.name}</IonCardTitle>
                <IonCardSubtitle>{props.data.institution}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <IonText>
                    <p>{props.data.start} - {props.data.end}</p>
                    <p>{
                        props.data.grade > 0 &&
                        <IonText>Grade: {props.data.grade}</IonText>
                    }</p>
                </IonText>
                {

                }
                {
                    props.data.technologies.length > 0 &&
                    <IonGrid>
                        <IonRow>
                            {
                                props.data.technologies.map(
                                    (tech, index) => {
                                        return (
                                            <IonCol className="technologiesColumns" key={index}>
                                                <IonRow>
                                                    <IonIcon className="technologyIcon" icon={tech.icon} />
                                                </IonRow>
                                                <IonRow>
                                                    {tech.name}
                                                </IonRow>
                                            </IonCol>
                                        )
                                    }
                                )
                            }
                        </IonRow>
                    </IonGrid>
                }
            </IonCardContent>
        </IonCard>
    );
}

const Education = () => {
    return <div className="educationComponent">
        {
            education.map(
                (item, index) => {
                    return <EducationCard key={index} data={item} />
                }
            )
        }
    </div>
}

export default Education;
