
import React from 'react';
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow, IonText } from "@ionic/react";

import { experiences, ExperienceStruct } from '../assets/text/experience';

import "./Experience.css"

import { parseText } from "../tools";

const ExperienceCard = (props: { data: ExperienceStruct }) => {

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.data.company}</IonCardTitle>
                <IonCardSubtitle>{props.data.position}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <IonText>{props.data.start} - {props.data.end}</IonText>
                {
                props.data.technologies.length > 0 &&
                    <IonGrid>
                        <IonRow>

                            {
                                props.data.technologies.map(
                                    (tec, i) => {
                                        return (
                                            <IonCol className="technologiesColumns" key={i}>
                                                <IonRow>
                                                    <IonIcon className="technologyIcon" icon={tec.icon} />
                                                </IonRow>
                                                <IonRow>
                                                    {tec.name}
                                                </IonRow>
                                            </IonCol>
                                        )
                                    }
                                )
                            }

                        </IonRow>
                    </IonGrid>
                }
                {
                    props.data.description.length > 0 &&
                    <IonAccordionGroup className='detailsAccordion'>
                        <IonAccordion value="first">
                            <IonItem className="detailsTitle" slot="header" color="dark">
                                <IonLabel>Details</IonLabel>
                            </IonItem>

                            {
                                props.data.description.map((task, i) => {
                                    return (
                                        <div key={i} className="ion-padding" slot="content">
                                            {parseText(task)}
                                        </div>
                                    );
                                })
                            }

                        </IonAccordion>
                    </IonAccordionGroup>
                }
            </IonCardContent>
        </IonCard>
    );
}

const Experience = () => {
    return (
        <div className="experienceComponent">
            {experiences.map((item, i) => {
                return <div key={i} className="experienceCard"><ExperienceCard key={i} data={item} /></div>
            })}
        </div>
    );
}

export default Experience;
