import styles from './Skill.module.scss'
import {HTMLIcon, CSSIcon, JSIcon, ReactJSIcon, GitIcon, CppIcon} from '../../Icon'

function Skill() {
    return (
        <div className={styles.skill} id="skill">
            <h2 className={styles.sectionTitle}>SKILLS</h2>
            <ul className={styles.skillList}>
                <li><HTMLIcon /></li>
                <li><CSSIcon /></li>
                <li><JSIcon /></li>
                <li><ReactJSIcon /></li>
                <li><GitIcon /></li>
                <li><CppIcon /></li>
            </ul>
        </div>
    )
}

export default Skill
