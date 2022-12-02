# chatbot (Travel Buddy)  
## File Structure
1. [Travel_buddy_v1.01](/Chat%20Bot/Travel_buddy_v1.01/BotLocales/en_US)  
* shows the folders for intents and slots used for chat bot logic  
2. [Lambda Function written in python](/Chat%20Bot/LexBot.py)  
* The lambda function written to corrolate with the given chat bot  
3. [Future Developments for the Travel Buddy Bot](/Chat%20Bot/Future%20Versions%20of%20Travel%20Buddy)  
* This folder holds the next versions of The Travel Buddy Bot and the lambda files (if applicable)

### Current Travel Buddy Intent Schemas
* The folder [Intent Schemas](/Chat%20Bot/Travel_buddy_v1.01/Intent%20Schemas) has the current V1.01 schemas for the intents
  
## Chat Bot Development  
* The Chat Bot was built using [Amazon Lex](https://aws.amazon.com/lex/)
* a cutting edge conversational AI, that allows APIs to create complex chat bots  
* the conversation flow was developed through the use of [Primm's Algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm)
* Prim's algorithm gave the design process to help the user navigate through the booking process as fast as possible  

## Chat Bot Deployment
* The Chat Bot was given a UI through the use of [Sample Lex Web Interface](https://github.com/aws-samples/aws-lex-web-ui)  
* Then the Chat bot was deployed through the use of a cloud formation template, which allows for seemless access to the Travel Buddy  
