export const schema = {
    'type': 'object',
    'properties': {
        'users': {
            'type': 'array',
            'minItems': 3,
            'maxItems': 15,
            'items': {
                'type': 'object',
                'properties': {
                    'id': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 1
                    },
                    'name': {
                        'type': 'string',
                        'faker': 'name.firstName'
                    },
                    'age': {
                        'type': 'number',
                        'minimum': 18,
                        'maximum': 35
                    },
                    'email': {
                        'type': 'string',
                        'faker': 'internet.email'
                    }
                },
                    required: ['id', 'name', 'age', 'email']
            }
        }
    },
    required: ['users']
};