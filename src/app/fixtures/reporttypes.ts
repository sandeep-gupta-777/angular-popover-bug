export const reportTypes = {
  "meta": {
  "limit": 20,
    "next": null,
    "offset": 0,
    "previous": null,
    "total_count": 2
},
  "objects": [
  {
    "code": "query = [{\"$match\" : {\"bot_id\": bot_id, 'created_at': {\"$gte\": startdate, \"$lte\": enddate}}},{\"$lookup\": {\"from\": \"appserver_message\", \"localField\": \"id\", \"foreignField\": \"room_id\", \"as\": \"messages\"}}]\ntotalmsg = Room.objects.mongo_aggregate(query)\noutput = [['Consumer Id', 'Room Id', 'Message type', 'Message', 'Created at', \"Platform\"]]\nfor i in totalmsg:\n    for messages in i['messages']:\n        if messages.get('user_message_sensitive') and messages['user_type'] == \"human\" :\n            messages['message'] = user_sensitive_message\n        elif messages.get('bot_message_sensitive') and messages['user_type'] == \"bot\" :\n            messages['message'] = bot_sensitive_message\n        else:\n            messages['message'] = getPayload(messages['message'])['message']\n        if messages['user_type'] == \"human\":\n            output.append(\n                [str(messages['consumer_id']), str(messages['room_id']), messages['user_type'],\n                 messages['message'],\n                 str(messages['created_at']), messages['platform']])\n        elif messages.get('user_type') == \"bot\":\n            botmsg = []\n            if messages.get('bot_message_sensitive'):\n                botmsg.append(bot_sensitive_message)\n            elif type(messages['message']) == str:\n                botmsg.append(messages['message'])\n            else:\n                for k in messages['message']:\n                    botmsg.append(str(k.get(\"text\") if k.get(\"text\", \"\") else \"\"))\n            output.append(\n                [str(messages['consumer_id']), str(messages['room_id']), messages['user_type'],\n                 '\\n'.join(botmsg),\n                 str(messages['created_at']), messages['platform']])",
    "created_at": 1535970857000,
    "description": "Total messages",
    "id": 1,
    "name": "Messages",
    "resource_uri": "/api/v1/reporttypes/1/",
    "type": "Message",
    "updated_at": 1535970857000
  },
  {
    "code": "query = [{\"$match\" : {\"bot_id\": bot_id, 'created_at': {\"$gte\": startdate, \"$lte\": enddate}}},{\"$lookup\": {\"from\": \"appserver_message\", \"localField\": \"id\", \"foreignField\": \"room_id\", \"as\": \"messages\"}}]\ntotalmsg = Room.objects.mongo_aggregate(query)\noutput = [['Consumer Id', 'Room Id', 'Message type', 'Message', 'Created at', \"Platform\"]]\nfor i in totalmsg:\n  for messages in i['messages']:\n    messages['message'] = getPayload(messages['message'])['message']\n    if messages['user_type'] == \"human\":\n      output.append(\n        [str(messages['consumer_id']), str(messages['room_id']), messages['user_type'],\n         messages['message'],\n         str(messages['created_at']), messages['platform']])\n      elif messages['user_type'] == \"bot\":\n        botmsg = []\n        if type(messages['message'])==str:\n          botmsg.append(messages['message'])\n          else:\n            for k in messages['message']:\n              botmsg.append(str(k.get(\"text\") if k.get(\"text\", \"\") else \"\"))\n              output.append(\n                [str(messages['consumer_id']), str(messages['room_id']), messages['user_type'],\n                 '\\n'.join(botmsg),\n                 str(messages['created_at']), messages['platform']])",
    "created_at": 1536139387000,
    "description": "Total messages",
    "id": 2,
    "name": "Messages",
    "resource_uri": "/api/v1/reporttypes/2/",
    "type": "Message",
    "updated_at": 1536139387000
  }
]
}