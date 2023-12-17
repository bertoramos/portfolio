
import { Timeline, timelineOppositeContentClasses, timelineContentClasses, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";

import { education } from '../assets/text/education'
import { shortDate } from "../tools";

function EducationTimeline() {
    
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

                education.map(
                    (edu, index_edu) => {
                        return (
                            <TimelineItem key={index_edu}>
                                <TimelineOppositeContent>
                                    <div className="timeline-institution">
                                        {edu.institution}
                                    </div>
                                    <div className="timeline-place">
                                        {edu.place}
                                    </div>
                                    <div className="timeline-time">
                                        {shortDate(edu.start)} - {shortDate(edu.end)}
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div>

                                        <div className="timeline-name">
                                            {edu.name}
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

export default EducationTimeline;
