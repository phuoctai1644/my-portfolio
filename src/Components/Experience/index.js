import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AppContext } from '../../App';
import * as moment from 'moment';
import './index.scss';

function Experience() {
  const { experiences } = useContext(AppContext);

  return (
    <div className='experience-wrapper' id='experience'>
      <Container fluid="lg">
        <h2 className='section-title'>EXPERIENCE</h2>
        <div className="experience-list">
        {experiences?.map((exp, index) => (
            <div key={index}
              className={`
                experience
                ${!index ? 'first': ''}
                ${index == experiences.length - 1 ? 'last' : ''}`
              }
            >
              <div className="period">
                {moment(exp.startTime).format('MMM, YYYY')}
                <span> - </span>
                {exp?.endTime ? moment(exp.endTime).format('MMM, YYYY') : 'Current'}
              </div>
              <div className="detail">
                <span className="fw-bold mb-1">{exp.title}</span>
                <span className='mb-1'>{exp.company}</span>
                <ul className='skills'>
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
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Experience;
