import styles from './Portfolio.module.scss'
import todoDemo from '../../assets/gif/demo-todo.gif'
import shopeeDemo from '../../assets/gif/demo-shopee.gif'
import elearningDemo from '../../assets/gif/demo-elearning.gif'
import portfolioDemo from '../../assets/gif/demo-portfolio.gif'
import Image from '../Image'
import { useEffect, useRef } from 'react'

const PORTFOLIO = [
    {
        gif: todoDemo,
        name: 'Todo App',
        desc: 'I made this project because I wanted to build a todo app for myself and then try to share it with my friends. It is currently in version 2.0 and will continue to be updated with new features.',
        tech: ['React', 'CSS'], 
        demo: 'https://phuoctai1644.github.io/todoapp',
        source: 'https://github.com/phuoctai1644/todoapp'
    },
    {
        gif: portfolioDemo,
        name: 'My Portfolio',
        desc: 'This is my personal project, here are things related to me as well as how to contact me. In the future, there will be many other things here, like blogs. ^_^',
        tech: ['ReactJS', 'CSS'],
        demo: 'https://phuoctai1644.github.io/my-portfolio/',
        source: 'https://github.com/phuoctai1644/my-portfolio'
    },
    {
        gif: elearningDemo,
        name: 'E-learning',
        desc: 'This is an idea of mine and a classmate. The aim of this project is to build an online learning platform for teachers and students in all fields. Despite problems and delays in development, the project will continue in the future.',
        tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
        source: 'https://github.com/nguyenleminhquan/e-learning'
    },
    {
        gif: shopeeDemo,
        name: 'Shopee Page',
        desc: 'After days of learning and getting acquainted with HTML, CSS, JS, I have been practicing with clone shopee. By following and following F8\'s tutorial, I finished this product.',
        tech: ['HTML', 'CSS', 'Javascript'],
        demo: 'https://phuoctai1644.github.io/shopee-web/',
        source: 'https://github.com/phuoctai1644/shopee-web'
    }
]

function Portfolio() {
    const reverseRef = useRef([])
    
    useEffect(() => {
        for(let item of reverseRef.current) {
            if (reverseRef.current.indexOf(item) % 2 !== 0) {
                item.style.flexDirection = 'row-reverse'
            }
        }
    }, [])

    return (
        <div className={styles.portfolio} id="portfolio">
            <h2 className={styles.sectionTitle}>PORTFOLIO</h2>
            <ul className={styles.portfolioList}>
                {PORTFOLIO.map((item, index) => (
                    <li 
                        key={index} 
                        className={styles.portfolioItem} 
                        ref={el => reverseRef.current[index] = el}
                    >
                        <div className={styles.portfolioDemoWrap}>
                            <Image url={item.gif} alt="Project Demo" width={item.name !== 'Todo App' && '100%'}/>
                        </div>
                        <div className={styles.portfolioContent}>
                            <h3 className={styles.portfolioName}>{item.name}</h3>
                            <p className={styles.portfolioDesc}>{item.desc}</p>
                            <ul className={styles.portfolioTech}>
                                {item.tech.map(tech => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                            <div className={styles.portfolioBtn}>
                                {item.demo && <a href={item.demo} target="__blank">Demo</a>}
                                {item.source && <a href={item.source} target="__blank">Source</a>}
                            </div>
                        </div>
                    </li>

                ))}
            </ul>
            <div className={styles.portfolioBtn}>
                <a href="https://github.com/phuoctai1644" target="__blank">More projects</a>
            </div>
        </div>
    )
}

export default Portfolio
