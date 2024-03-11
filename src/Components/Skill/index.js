import styles from './Skill.module.scss'
import {
    HTMLIcon, CSSIcon, JSIcon, ReactJSIcon, GitIcon, SASSIcon, BootstrapIcon, TSIcon,
    AngularIcon, PythonIcon, DjangoIcon
} from '../../Icon'

function Skill() {
    return (
        <div className={styles.skill} id="skill">
            <h2 className={styles.sectionTitle}>SKILLS</h2>
            <ul className={styles.skillList}>
                <li title='HTML'><HTMLIcon /></li>   
                <li title='CSS'><CSSIcon /></li>
                <li title='SASS'><SASSIcon /></li>
                <li title='Bootstrap'><BootstrapIcon /></li>
                <li title='JavaScript'><JSIcon /></li>
                <li title='TypeScript'><TSIcon /></li>
                <li title='ReactJS'><ReactJSIcon /></li>
                <li title='Angular'><AngularIcon /></li>
                <li title='Python'><PythonIcon /></li>
                <li title='Django'><DjangoIcon /></li>
                <li title='Git'><GitIcon /></li>
            </ul>
        </div>
    )
}

export default Skill
