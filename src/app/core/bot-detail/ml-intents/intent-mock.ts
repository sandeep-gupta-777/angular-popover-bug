export const intentMock = {
  'meta': {
    'count': 4
  },
  'objects': [
    {
      'created_at': 1571677066923.0,
      'entities': [
        {
          'counter': 3,
          'entity_id': '1',
          'required': true,
          'template_key': 'no store'
        },
        {
          'counter': 3,
          'entity_id': '2',
          'required': true,
          'template_key': 'no postcode'
        }
      ],
      'intent_id': '1',
      'name': 'delivery',
      'reset_state': true,
      'template_key': 'we deliver',
      'updated_at': 1571677066923.0,
      'utterances': [
        {
          'entities': [
            {
              'end': 25,
              'entity_id': '1',
              'start': 20,
              'type': 'custom',
              'value': 'leeds'
            },
            {
              'end': 33,
              'entity_id': '2',
              'start': 29,
              'type': 'custom',
              'value': 'bd12'
            }
          ],
          'utterance': 'do you deliver from leeds to bd12'
        },
        {
          'entities': [
            {
              'end': 41,
              'entity_id': '1',
              'start': 36,
              'type': 'custom',
              'value': 'leeds'
            }
          ],
          'utterance': 'is it possible to get delivery from leeds store'
        },
        {
          'entities': [],
          'utterance': 'can you deliver something for me'
        }
      ]
    },
    {
      'created_at': 1571677066923.0,
      'entities': [
        {
          'counter': 3,
          'entity_id': '1',
          'required': true,
          'template_key': 'no store'
        }
      ],
      'intent_id': '2',
      'name': 'storetimings',
      'reset_state': false,
      'template_key': 'store time',
      'updated_at': 1571677066923.0,
      'utterances': [
        {
          'entities': [
            {
              'end': 19,
              'entity_id': '1',
              'start': 14,
              'type': 'custom',
              'value': 'leeds'
            }
          ],
          'utterance': 'when does the leeds store open'
        },
        {
          'entities': [
            {
              'end': 27,
              'entity_id': '1',
              'start': 22,
              'type': 'custom',
              'value': 'leeds'
            }
          ],
          'utterance': 'at what time does the leeds store open'
        },
        {
          'entities': [
            {
              'end': 26,
              'entity_id': '1',
              'start': 21,
              'type': 'custom',
              'value': 'leeds'
            }
          ],
          'utterance': 'when can i visit the leeds store'
        }
      ]
    },
    {
      'created_at': 1571677066923.0,
      'entities': [
        {
          'counter': 3,
          'entity_id': '3',
          'required': true,
          'template_key': 'no product'
        }
      ],
      'intent_id': '3',
      'name': 'stockcheck',
      'reset_state': false,
      'template_key': 'product found',
      'updated_at': 1571677066923.0,
      'utterances': [
        {
          'entities': [
            {
              'end': 22,
              'entity_id': '3',
              'start': 16,
              'type': 'custom',
              'value': 'fridge'
            }
          ],
          'utterance': 'check stock for fridge'
        },
        {
          'entities': [
            {
              'end': 19,
              'entity_id': '3',
              'start': 13,
              'type': 'custom',
              'value': 'fridge'
            }
          ],
          'utterance': 'is there any fridge which i can buy'
        },
        {
          'entities': [
            {
              'end': 20,
              'entity_id': '3',
              'start': 13,
              'type': 'custom',
              'value': 'fridges'
            }
          ],
          'utterance': 'are there an fridges available?'
        }
      ]
    }
  ]
};
