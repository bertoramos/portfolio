
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, useIonModal } from "@ionic/react";
import { ProjectsStruct, projects } from "../assets/text/projects";

import "./Projects.css"
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { closeOutline } from "ionicons/icons";


const ProjectDetailModal = ({
    onDismiss,
    data
}: {
    onDismiss: (data?: string | null | undefined | number, role?: string) => void,
    data: ProjectsStruct
}) => {
    return (
        <IonPage className="projectDetailPage">
            <IonHeader className="projectDetailHeader">
                <IonButton 
                    onClick={() => onDismiss(null, 'close')}
                    className="closeButton"
                    >
                    <IonIcon className="closeButtonIcon" slot="icon-only" icon={closeOutline} />
                </IonButton>
            </IonHeader>
            
            <IonContent className="projectDetailContent">
                <h1>{data.name}</h1>
                <img src={data.image} />
                <p>
                    {data.description}
                    
                </p>
                <a href={data.url} target="_blank">More...</a>
                
                {
                    data.technologies.length > 0 &&
                    <IonGrid>
                        <IonRow>
                        {
                            data.technologies.map(
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

                

            </IonContent>
        </IonPage>
    );
};

const ProjectsCard = (props: { data: ProjectsStruct }) => {

    const cardStyleImage = { backgroundImage: `url(${props.data.image})` }

    const [present, dismiss] = useIonModal(ProjectDetailModal, {
        onDismiss: (data: string, role: string) => dismiss(data, role),
        data: props.data
    });

    function openModal() {
        present({
            onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
            },
        });
    }
    return (
        <IonCard
            className="projectsCard"
            style={cardStyleImage}
            onClick={() => {
                openModal();
            }}
        >

            <div className="projectsCardContent">
                <IonCardHeader>
                    <IonCardSubtitle>{props.data.name}</IonCardSubtitle>
                    <IonCardTitle>{props.data.resume}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                </IonCardContent>
            </div>

        </IonCard>
    );
}

const Projects = () => {
    return <div className="projectsComponent">
        {
            projects.map(
                (item, index) => {
                    return <ProjectsCard key={index} data={item} />
                }
            )
        }
    </div>
}

export default Projects;
