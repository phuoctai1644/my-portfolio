import styles from './Skill.module.scss'
import {HTMLIcon, CSSIcon, JSIcon, ReactJSIcon, GitIcon, SCSSIcon, BootstrapIcon, TSIcon, AngularIcon, PythonIcon, DjangoIcon} from '../../Icon'

function Skill() {
    return (
        <div className={styles.skill} id="skill">
            <h2 className={styles.sectionTitle}>SKILLS</h2>
            <ul className={styles.skillList}>
                <li><HTMLIcon /></li>   
                <li><CSSIcon /></li>
                <li><SCSSIcon /></li>
                <li><BootstrapIcon /></li>
                <li><JSIcon /></li>
                <li><TSIcon /></li>
                <li><ReactJSIcon /></li>
                <li><AngularIcon /></li>
                <li><PythonIcon /></li>
                <li><DjangoIcon /></li>
                <li><GitIcon /></li>
            </ul>
        </div>
    )
}

export default Skill
