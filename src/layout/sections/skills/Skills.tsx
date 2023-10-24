import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../Components/FlexContainer";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Skill} from "./skill/Skill";


const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexContainer wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'html'} skillTitle={'HTML'}
                       description={'HTML — это один из тех элементов веб-разработки, с которым я познакомился еще на ' +
                           'ранних этапах моего пути в программировании. Я использую HTML для создания основы веб-страниц,' +
                           'и я уверен в своем умении создавать чистый, семантически верный HTML-код.' +
                           'Я знаком с основными тегами, а также понимаю важность правильного использования семантики в HTML.'}/>
                <Skill iconId={'css'} skillTitle={'CSS'}
                       description={
                           'Я владею основными принципами CSS, такими как выбор селекторов, создание стилей и компонентов,' +
                           ' и управление позиционированием элементов. Мои навыки CSS позволяют мне делать веб-сайты адаптивными' +
                           ' и кросс-браузерными, чтобы они хорошо выглядели и на мобильных устройствах, и на компьютерах.' +
                           'Кроме того, я постоянно изучаю новые возможности CSS, такие как анимации и трансформации, чтобы создавать' +
                           ' интерактивные и привлекательные элементы на страницах.'}/>
                <Skill iconId={'js'} skillTitle={'JavaScript'}
                       description={'Я изучаю JavaScript уже более года и за это время ознакомился с ' +
                           'множеством аспектов этого языка, таких как асинхронное программирование, ' +
                           'замыкания, прототипное наследование и объектно-ориентированное программирование' +
                           ' на JavaScript. Я постоянно обучаюсь и стремлюсь к изучению более сложных аспектов JavaScript.' +
                           ' Люблю рыться в книгах и статьях, чтобы лучше понимать, как работает JS.' +
                           'Всегда готов к новым вызовам и задачам, связанным с этим языком.'}/>

                <Skill iconId={'ts'} skillTitle={'TypeScript'}
                       description={'В современной разработке трудно обойтись без TypeScript. Все мои проекты ' +
                           'разрабатываются с использованием TypeScript, и он действительно помогает улучшить качество ' +
                           'кода, а также упростить процесс поиска и исправления ошибок. Кроме того, для меня TypeScript ' +
                           'представляет большой интерес, так как это отличная возможность поглубже понять принципы ' +
                           'объектно-ориентированного программирования (ООП), которые не всегда могут быть полностью ' +
                           'реализованы в JavaScript.'}/>
                <Skill iconId={'react'} skillTitle={'React'}
                       description={'Первым фреймворком, с которым я познакомился, был React. Мне очень понравилось ' +
                           'разрабатывать приложения на этой платформе. Одним из ключевых преимуществ React является ' +
                           'его уклон в функциональное программирование, что делает его более доступным для начинающих ' +
                           'разработчиков. React - один из самых популярных фреймворков, и благодаря этому, я могу найти' +
                           ' множество решений и идей для своих проектов. Я также активно использую различные библиотеки ' +
                           'и инструменты, созданные на базе React, такие как React Router, Formik, React Icons, и многие другие.'}/>
                <Skill iconId={'redux'} skillTitle={'Redux'}
                       description={'В моих проектах я решил использовать менеджер состояния Redux. У меня уже есть ' +
                           'опыт работы с React Redux, и в настоящее время я активно изучаю Redux Toolkit. Этот инструмент' +
                           ' позволяет мне более эффективно управлять состоянием приложений и упрощает процесс разработки.'}/>
                <Skill iconId={'styleComponent'} skillTitle={'Styled-Components'}
                       description={'При создании своих учебных проектов, изначально я использовал CSS-модули. ' +
                           'Однако, после того как я попробовал Styled-Components, это полностью изменило мой взгляд на' +
                           ' стилизацию компонентов в React. Мне нравится удобство и выразительность, которые предоставляют Styled-Components.' +
                           'Я также ценю возможность использовать мощные функции CSS, такие как вложенность и пропсы, ' +
                           'для создания более гибких и динамичных интерфейсов.'
                            }/>
                <Skill iconId={'storybook'} skillTitle={'Storybook'}
                       description={'Я очень рад, что мне довелось познакомиться с Storybook. Я считаю, что это очень ' +
                           'полезный инструмент для документирования и тестирования компонентов. Мой первый интерактивный ' +
                           'тест я выполнил именно в Storybook, и это был отличный опыт. Мне также нравится активное сообщество,' +
                           ' которое всегда готово подсказать и помочь в решении различных вопросов, связанных с работой в этом инструменте.'}/>
                <Skill iconId={'mui'} skillTitle={'Material UI'}
                       description={'Мне нравится разрабатывать стили самостоятельно, но признаю, что библиотека Material-UI ' +
                           '(MUI) чрезвычайно полезна. Я часто обращаюсь к ее использованию и стремлюсь полностью освоить ' +
                           'навыки создания компонентов с использованием MUI.'}/>
                <Skill iconId={'jest'} skillTitle={'Jest'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill iconId={'figma'} skillTitle={'Figma'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                           'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill iconId={'gitTeh'} skillTitle={'GitHub'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                           'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

            </FlexContainer>
        </StyledSkills>
    );
};

export default Skills;


const StyledSkills = styled.section`
  background-color: #aad73f;
  min-height: 100vh;

`