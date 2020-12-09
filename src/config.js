// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
     widgetName: "learningOptions",
     widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "LearnJavaScript",
      widgetFunc: (props) => <LinkList {...props}/>,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "LearnPhp",
      widgetFunc: (props) => <LinkList {...props}/>,
      props: {
        options: [
          {
            text: "Introduction to PHP",
            url:
              "https://www.w3schools.com/php/DEFAULT.asp",
            id: 1,
          },
          {
            text: "PHP Manual",
            url:
              "https://www.php.net/manual/en/index.php",
            id: 2,
          },
          {
            text: "Top 100 PHP functions",
            url: "https://www.exakat.io/en/top-100-php-functions/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "LearnVue",
      widgetFunc: (props) => <LinkList {...props}/>,
      props: {
        options: [
          {
            text: "Introduction to Vue",
            url:
              "https://vuejs.org/v2/guide/",
            id: 1,
          },
          {
            text: "Vue vs React",
            url:
              "https://deliciousbrains.com/vue-vs-react-battle-javascript/",
            id: 2,
          },
          {
            text: "Vue Masters",
            url: "https://www.codecademy.com/learn/learn-vue-js",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "LearnReact",
      widgetFunc: (props) => <LinkList {...props}/>,
      props: {
        options: [
          {
            text: "Create React APP",
            url:
              "https://create-react-app.dev/docs/deployment/",
            id: 1,
          },
          {
            text: "Introduction to Redux",
            url:
              "https://redux.js.org/introduction/getting-started",
            id: 2,
          },
          {
            text: "React Examples",
            url: "https://reactjsexample.com/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "LearnLaravel",
      widgetFunc: (props) => <LinkList {...props}/>,
      props: {
        options: [
          {
            text: "Introduction to Laravel",
            url:
              "https://laravel.com/docs/8.x",
            id: 1,
          },
          {
            text: "Tutorial Guide",
            url:
              "https://www.tutorialspoint.com/laravel/index.htm",
            id: 2,
          },
          {
            text: "Beginner Guide",
            url: "https://www.phptpoint.com/laravel-introduction/",
            id: 3,
          },
        ],
      },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config