// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet() {
        const greetingMessage = this.createChatBotMessage ("Hi, How can I help you?");
        this.updateChatbotState (greetingMessage);
    }
    handleLearningList = () => {
        const message = this.createChatBotMessage(
          "Here are some documents for you",
          {
            widget: "learningOptions",
          }
        );
    
        this.updateChatbotState(message);
      };
    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on Javascript:",
          {
            widget: "LearnJavaScript",
          }
        );
    
        this.updateChatbotState(message);
      };
      handleVueList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on Vue:",
          {
            widget: "LearnVue",
          }
        );
    
        this.updateChatbotState(message);
      };
      handlePhpList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on PHP:",
          {
            widget: "LearnPhp",
          }
        );
    
        this.updateChatbotState(message);
      };
      handleReactList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on React:",
          {
            widget: "LearnReact",
          }
        );
    
        this.updateChatbotState(message);
      };
      handleLaravelList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on Laravel:",
          {
            widget: "LearnLaravel",
          }
        );
    
        this.updateChatbotState(message);
      };
    updateChatbotState( message ) {
        this.setState( prevState =>({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
  }
  
  export default ActionProvider;