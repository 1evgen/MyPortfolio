import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../Components/FlexContainer";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Skill} from "./skill/Skill";
import {ContainerBlock} from "../../../Components/Container";





export const Skills = () => {
    return (
        <StyledSkills>
            <ContainerBlock>
                <SectionTitle>My skills</SectionTitle>
            <FlexContainer wrap={'wrap'} justify={'space-around'} aline={'centre'} >

                <Skill level={8}  iconId={'html'} skillTitle={'HTML'}
                       description={'HTML is one of those elements in web development that I got acquainted with during ' +
                           'the early stages of my programming journey. I use HTML to create the foundation of web pages, ' +
                           'and I\'m confident in my ability to produce clean, semantically valid HTML code. I\'m familiar' +
                           ' with the core tags and understand the importance of using semantics correctly in HTML.'}/>
                <Skill level={7} iconId={'css'} skillTitle={'CSS'}
                       description={'I have a good grasp of the core principles of CSS, such as selector usage, styling ' +
                           'and component creation, and managing element positioning. My CSS skills enable me to create ' +
                           'responsive and cross-browser websites, ensuring they look great on both mobile devices and ' +
                           'computers. Additionally, I am continuously exploring new CSS capabilities, such as animations ' +
                           'and transformations, to create interactive and appealing elements on web pages.'}/>
                <Skill  level={10} iconId={'js'} skillTitle={'JavaScript'}
                       description={"I've been studying JavaScript for over a year now and during this time, " +
                           "I've delved into various aspects of the language, including asynchronous programming, " +
                           "closures, prototype-based inheritance, and object-oriented programming in JavaScript. " +
                           "I'm constantly learning and striving to understand more complex aspects of JavaScript. " +
                           "I enjoy digging into books and articles to gain a deeper understanding of how JS works. " +
                           "I'm always ready to take on new challenges and tasks related to this language."}/>

                <Skill level={7} iconId={'ts'} skillTitle={'TypeScript'}
                       description={'In modern development, it\'s hard to imagine working without TypeScript. ' +
                           'All my projects are developed using TypeScript, and it truly helps improve code quality and ' +
                           'simplifies the process of finding and fixing errors. Additionally, TypeScript is of great ' +
                           'interest to me, as it offers an excellent opportunity to delve deeper into the principles ' +
                           'of object-oriented programming (OOP), which may not always be fully realized in JavaScript.'}/>
                           <Skill level={9} iconId={'react'} skillTitle={'React'}
                           description={'React was the first framework I got acquainted with, and I really enjoyed ' +
                               'developing applications on this platform. One of the key advantages of React is its focus ' +
                               'on functional programming, making it more accessible to beginner developers. React is one ' +
                               'of the most popular frameworks, and thanks to that, I can find numerous solutions and ' +
                               'ideas for my projects. I also actively use various libraries and tools built on top of ' +
                               'React, such as React Router, Formik, React Icons, and many others.'}/>
                           <Skill level={9} iconId={'redux'} skillTitle={'Redux'}
                           description={'In my projects, I decided to use the Redux state manager. I already have experience ' +
                               'with React Redux, and I\'m currently actively learning Redux Toolkit. This tool allows me to more' +
                               ' efficiently manage the state of applications and simplifies the development process.'}/>
                           <Skill level={6} iconId={'styleComponent'} skillTitle={'Styled-Components'}
                           description={'When creating my educational projects, I initially used CSS modules. However, ' +
                               'after trying Styled-Components, it completely changed my perspective on styling ' +
                               'components in React. I appreciate the convenience and expressiveness that Styled-Components' +
                               ' provide. I also value the ability to use powerful CSS features such as nesting and props ' +
                               'to create more flexible and dynamic interfaces.'}/>
                            <Skill level={5} iconId={'mui'} skillTitle={'Material UI'}
                       description={'I enjoy creating styles on my own, but I acknowledge that the Material-UI (MUI)' +
                           ' library is extremely useful. I often turn to using it and aim to fully master the ' +
                           'skills of creating components using MUI.'}/>
                           <Skill level={5} iconId={'storybook'} skillTitle={'Storybook'}
                           description={'I\'m very pleased to have had the opportunity to get acquainted with Storybook. ' +
                               'I consider it a very useful tool for documenting and testing components. ' +
                               'I performed my first interactive BackgroundElement in Storybook, and it was a great experience. ' +
                               'I also appreciate the active community that is always ready to provide guidance and help ' +
                               'with various questions related to working with this tool.'}/>

                           <Skill level={5} iconId={'jest'} skillTitle={'Jest'}
                           description={'I actively use Jest in my development process. This tool helps me create reliable' +
                               ' tests for my code, which contributes to confidence in its functionality. ' +
                               'I plan to deepen my knowledge and use Jest in my professional work to ensure high code ' +
                               'quality and enhance the user experience.'}/>
                           <Skill level={4} iconId={'figma'} skillTitle={'Figma'}
                           description={'I actively use Figma for layout based on design mockups.'}/>
                           <Skill level={6} iconId={'gitTeh'} skillTitle={'GitHub'}
                           description={'Git is another important tool I use in my development process. I\'m familiar ' +
                               'with basic Git commands like git clone, git pull, git push, git commit, git branch, and git merge.' +
                               ' These commands enable me to manage versions of my code and collaborate with other developers.'}/>

            </FlexContainer>
            </ContainerBlock>
        </StyledSkills>
    );
};




const StyledSkills = styled.section`
  background-color: #0c0c15;
  min-height: 100vh;
 
`