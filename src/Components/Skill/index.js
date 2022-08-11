import styles from './Skill.module.scss'
import {HTMLIcon, CSSIcon, JSIcon, ReactJSIcon, GitIcon, CppIcon} from '../../Icon'

function Skill() {
    return (
        <div className={styles.skill} id="skill">
            <h2 className={styles.sectionTitle}>SKILLS</h2>
            <ul className={styles.skillList}>
                <li><HTMLIcon width="75" height="75"/></li>
                <li><CSSIcon width="75" height="75"/></li>
                <li><JSIcon width="75" height="75"/></li>
                <li><ReactJSIcon width="75" height="75"/></li>
                <li><GitIcon width="75" height="75"/></li>
                <li><CppIcon width="75" height="75"/></li>
            </ul>
        </div>
    )
}

export default Skill
