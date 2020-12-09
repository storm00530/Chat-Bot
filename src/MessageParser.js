// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();
        if ( lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") ) {
            this.actionProvider.greet();
        }
        if (lowerCaseMessage.includes("javascript")) {
          this.actionProvider.handleJavascriptList();
        }
        if (lowerCaseMessage.includes("php")) {
          this.actionProvider.handlePhpList();
        }
        if (lowerCaseMessage.includes("laravel")) {
          this.actionProvider.handleLaravelList();
        }
        if (lowerCaseMessage.includes("vue")) {
          this.actionProvider.handleVueList();
        }
        if (lowerCaseMessage.includes("react")) {
          this.actionProvider.handleReactList();
        }
        if (lowerCaseMessage.includes("learn")) {
          this.actionProvider.handleLearningList();
        }
    }
  }
  
  export default MessageParser;