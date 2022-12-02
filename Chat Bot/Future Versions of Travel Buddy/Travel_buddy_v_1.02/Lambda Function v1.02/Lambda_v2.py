"""
MIT No Attribution

Copyright 2021 Amazon Web Services

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
"""
import json
import random
import decimal 

def random_num():
    return(decimal.Decimal(random.randrange(1000, 50000))/100)

def get_slots(intent_request):
    return intent_request['sessionState']['intent']['slots']
    
def get_slot(intent_request, slotName):
    slots = get_slots(intent_request)
    if slots is not None and slotName in slots and slots[slotName] is not None:
        return slots[slotName]['value']['interpretedValue']
    else:
        return None    

def get_session_attributes(intent_request):
    sessionState = intent_request['sessionState']
    if 'sessionAttributes' in sessionState:
        return sessionState['sessionAttributes']

    return {}

def elicit_intent(intent_request, session_attributes, message):
    return {
        'sessionState': {
            'dialogAction': {
                'type': 'ElicitIntent'
            },
            'sessionAttributes': session_attributes
        },
        'messages': [ message ] if message != None else None,
        'requestAttributes': intent_request['requestAttributes'] if 'requestAttributes' in intent_request else None
    }


def close(intent_request, session_attributes, fulfillment_state, message):
    intent_request['sessionState']['intent']['state'] = fulfillment_state
    return {
        'sessionState': {
            'sessionAttributes': session_attributes,
            'dialogAction': {
                'type': 'Close'
            },
            'intent': intent_request['sessionState']['intent']
        },
        'messages': [message],
        'sessionId': intent_request['sessionId'],
        'requestAttributes': intent_request['requestAttributes'] if 'requestAttributes' in intent_request else None
    }

# def CheckBalance(intent_request):
#     session_attributes = get_session_attributes(intent_request)
#     slots = get_slots(intent_request)
#     account = get_slot(intent_request, 'accountType')
#     #The account balance in this case is a random number
#     #Here is where you could query a system to get this information
#     balance = str(random_num())
#     text = "Thank you. The balance on your "+account+" account is $"+balance+" dollars."
#     message =  {
#             'contentType': 'PlainText',
#             'content': text
#         }
#     fulfillment_state = "Fulfilled"    
#     return close(intent_request, session_attributes, fulfillment_state, message)   

# def FollowupCheckBalance(intent_request):
#     session_attributes = get_session_attributes(intent_request)
#     slots = get_slots(intent_request)
#     account = get_slot(intent_request, 'accountType')
#     #The account balance in this case is a random number
#     #Here is where you could query a system to get this information
#     balance = str(random_num())
#     text = "Thank you. The balance on your "+account+" account is $"+balance+" dollars."
#     message =  {
#             'contentType': 'PlainText',
#             'content': text
#         }
#     fulfillment_state = "Fulfilled"    
#     return close(intent_request, session_attributes, fulfillment_state, message)
def BookTrip(intent_request):
    session_attributes=get_session_attributes(intent_request)
    slots = get_slots(intent_request)
    trip_id=str(random_num())
    #random number trip id
    trip_location=get_slot(intent_request, 'Trip_Location')
    adults=get_slot(intent_request,'Adult_G')
    trip_length=get_slot(intent_request,'Length')
    children=get_slot(intent_request,'Child_G')
    start_date=get_slot(intent_request,'Begin_Date')
    text= "Now that we have booked the beginning of your trip would you like to see ideas for "+trip_location+"? "
    message =  {
            'contentType': 'PlainText',
            'content': text
        }
    fulfillment_state = "Fulfilled"    
    return close(intent_request, session_attributes,fulfillment_state,message) 
    
def Summary(intent_request):
    session_attributes=get_session_attributes(intent_request)
    slots = get_slots(intent_request)
    trip_id=str(random_num())
    #random number trip id
    trip_location=get_slot(intent_request, 'Location')
    adults=get_slot(intent_request,'Adults_Num')
    trip_length=get_slot(intent_request,'Length_Trip')
    children=get_slot(intent_request,'Children_num')
    start_date=get_slot(intent_request,'Start_Date')
    text= "Here is your trip confirmation: \n Trip ID: "+trip_id+" \n Trip Starting Date: "+start_date+" \n Trip Location: "+trip_location+" \n Adults on the trip: "+adults+" and Children on the trip: "+children+""
    message =  {
            'contentType': 'PlainText',
            'content': text
        }
    fulfillment_state = "Fulfilled"    
    return close(intent_request, session_attributes, fulfillment_state)    
    
def dispatch(intent_request):
    intent_name = intent_request['sessionState']['intent']['name']
    response = None
    # Dispatch to your bot's intent handlers
    if intent_name == 'Summary':
        return Summary(intent_request)
        
    elif intent_name == 'BookTrip':
        return BookTrip(intent_request)
        
    elif intent_name == 'BookHotel':
        return BookHotel(intent_request)
        
    elif intent_name == 'BookCar':
        return BookCar(intent_request)
        
    elif intent_name == 'BookFlight':
        return BookFlight(intent_request)

    raise Exception('Intent with name ' + intent_name + ' not supported')

def lambda_handler(event, context):
    response = dispatch(event)
    return response