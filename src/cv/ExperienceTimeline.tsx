
import { Timeline, timelineOppositeContentClasses, timelineContentClasses, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";

import { experiences } from '../assets/text/experience'
import { parseText, shortDate } from "../tools";

function ExperienceTimeline() {

    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.1,
                    minWidth: "300px", // Adjust this value based on your needs
                },
                [`& .${timelineContentClasses.root}`]: {
                    minWidth: "300px", // Adjust this value based on your needs
                }
            }}
        >
            {

                experiences.map(
                    (exp, index_exp) => {
                        return (
                            <TimelineItem key={index_exp}>
                                <TimelineOppositeContent>
                                    <div className="timeline-company">
                                        {exp.company}
                                    </div>
                                    <div className="timeline-place">
                                        {exp.place}
                                    </div>
                                    <div className="timeline-time">
                                        {shortDate(exp.start)} - {shortDate(exp.end)}
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div>

                                        <div className="timeline-position">
                                            {exp.position}
                                        </div>
                                        <div className="timeline-description">
                                            <ul>
                                                {
                                                    exp.description.map(
                                                        (desc, index_desc) => {
                                                            return <li key={index_desc}>{parseText(desc)}</li>
                                                        }
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    }
                )
            }
        </Timeline>
    );
}

export default ExperienceTimeline;
