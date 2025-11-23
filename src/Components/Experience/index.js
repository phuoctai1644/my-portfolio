import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import * as moment from 'moment';
import './index.scss';
import { ExperienceFormat, ExperienceTime } from '../../helpers/experience';

function Experience() {
  const { experiences } = useContext(AppContext);

  const getYOE = exp => {
    const expTime = new ExperienceTime(exp.startTime, exp.endTime);
    return expTime.toString(ExperienceFormat.YEAR_AND_MONTH);
  }

  return (
    <div className='experience-wrapper' id='experience'>
      <Container fluid="lg">
        <h2 className='section-title'>EXPERIENCES</h2>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="experience-list">
              {experiences?.map((exp, index) => (
                <div key={index} className="experience-block">
                  <div className="experience-bar"></div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <h3 className="experience-title">{exp.title}</h3>
                      <span className="experience-period">
                        <ExperiencePeriod exp={exp} /> ({getYOE(exp)})
                      </span>
                    </div>
                    <p className="experience-type">{exp.company}</p>
                    <ul className="experience-skills">
                      {exp?.skills?.frontend && (
                        <li>
                          <span className="fw-semibold">Frontend: </span>
                          <span>{exp.skills.frontend.join(', ')}</span>
                        </li>
                      )}
                      {exp?.skills?.backend && (
                        <li>
                          <span className="fw-semibold">Backend: </span>
                          <span>{exp.skills.backend.join(', ')}</span>
                        </li>
                      )}
                      {exp?.skills?.database && (
                        <li>
                          <span className="fw-semibold">Database: </span>
                          <span>{exp.skills.database.join(', ')}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  {index < (experiences?.length - 1) && <div className="experience-divider"></div>}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function ExperiencePeriod({exp}) {
  return (
    <span>
      {moment(exp.startTime).format('MMM, YYYY')}
      <span> - </span>
      {exp?.endTime ? moment(exp.endTime).format('MMM, YYYY') : 'Current'}
    </span>
  );
}

export default Experience;
