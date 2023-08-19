import { Col } from "react-bootstrap";

const ProjectsCard = ({id,title,description,imgUrl,url}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="project-imgbox">
                <img src={imgUrl} alt='project'/>
                <div className="project-text">
                    <h5>{title}</h5>
                    <span>{description}</span> <br />
                    <a href={url} target='_blank' rel="noreferrer">Open</a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectsCard;