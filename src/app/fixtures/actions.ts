export const actions = {
  "meta": {
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total_count": 96
  },
  "objects": [
    {
      "category": "Bots",
      "created_at": "2018-08-31T08:49:03.625000",
      "description": "List of all bots in the enterprise the user has access to",
      "id": 1,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Bots",
      "permissions": {
        "endpoint": "/api/v1/bot/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "optional": true,
            "type": "bot"
          },
          {
            "key": "id__in",
            "type": "bots"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/1/",
      "updated_at": "2018-08-31T08:49:03.625000"
    },
    {
      "category": "Bots",
      "created_at": "2018-08-31T08:49:03.630000",
      "description": "Create a new bot on the platform",
      "id": 2,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Bots",
      "permissions": {
        "endpoint": "/api/v1/bot/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/2/",
      "updated_at": "2018-08-31T08:49:03.630000"
    },
    {
      "category": "Bots",
      "created_at": "2018-08-31T08:49:03.633000",
      "description": "Edit the configuration information for an existing bot",
      "id": 3,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Bots",
      "permissions": {
        "endpoint": "/api/v1/bot/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "optional": true,
            "type": "bot"
          },
          {
            "key": "id__in",
            "type": "bots"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "PUT",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/3/",
      "updated_at": "2018-08-31T08:49:03.633000"
    },
    {
      "category": "Bots",
      "created_at": "2018-08-31T08:49:03.636000",
      "description": "Delete a bot",
      "id": 4,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Delete Bots",
      "permissions": {
        "endpoint": "/api/v1/bot/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "DELETE",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/4/",
      "updated_at": "2018-08-31T08:49:03.636000"
    },
    {
      "category": "Bots",
      "created_at": "2018-08-31T08:49:03.639000",
      "description": "Get Bots Anonymous",
      "id": 5,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Get Bots Anonymous",
      "permissions": {
        "endpoint": "/api/v1/bot/",
        "fields": [
          "name",
          "bot_unique_name",
          "name",
          "bot_type",
          "logo",
          "heading",
          "description",
          "avatars"
        ],
        "get_params": [
          {
            "key": "id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin",
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/5/",
      "updated_at": "2018-08-31T08:49:03.639000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-08-31T08:49:03.641000",
      "description": "View enterprise knowledge base concepts",
      "id": 6,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Enterprise Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          },
          {
            "key": "bot_id",
            "optional": true,
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/6/",
      "updated_at": "2018-08-31T08:49:03.641000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-08-31T08:49:03.644000",
      "description": "Create a new enterprise knowledge base concept",
      "id": 7,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Enterprise Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          },
          {
            "key": "bot_id",
            "optional": true,
            "type": "bot"
          }
        ],
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/7/",
      "updated_at": "2018-08-31T08:49:03.644000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-08-31T08:49:03.647000",
      "description": "Edit an enterprise knowledge base concept",
      "id": 8,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Enterprise Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          },
          {
            "key": "bot_id",
            "optional": true,
            "type": "bot"
          }
        ],
        "method": "PUT",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/8/",
      "updated_at": "2018-08-31T08:49:03.647000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-08-31T08:49:03.649000",
      "description": "Delete an enterprise knowledge base concept",
      "id": 9,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Delete Enterprise Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          },
          {
            "key": "bot_id",
            "optional": true,
            "type": "bot"
          }
        ],
        "method": "DELETE",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/9/",
      "updated_at": "2018-08-31T08:49:03.649000"
    },
    {
      "category": "Bot Versioning",
      "created_at": "2018-08-31T08:49:03.652000",
      "description": "Create/fork a new version from an existing version",
      "id": 10,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Bot Versioning",
      "permissions": {
        "endpoint": "/api/v1/botversioning/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/10/",
      "updated_at": "2018-08-31T08:49:03.652000"
    },
    {
      "category": "Bot Versioning",
      "created_at": "2018-08-31T08:49:03.655000",
      "description": "View all the versions and version metadata (last updated date) for a bot's code",
      "id": 11,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "GET Bot Versioning",
      "permissions": {
        "endpoint": "/api/v1/botversioning/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/11/",
      "updated_at": "2018-08-31T08:49:03.655000"
    },
    {
      "category": "Bot Versioning",
      "created_at": "2018-08-31T08:49:03.657000",
      "description": "Edit an exisiting bot version or make an Inactive version the Active version",
      "id": 12,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Bot Versioning",
      "permissions": {
        "endpoint": "/api/v1/botversioning/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "PUT",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/12/",
      "updated_at": "2018-08-31T08:49:03.657000"
    },
    {
      "category": "Bot Versioning",
      "created_at": "2018-08-31T08:49:03.660000",
      "description": "Delete a Bot Version",
      "id": 13,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Delete Bot Versioning",
      "permissions": {
        "endpoint": "/api/v1/botversioning/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "DELETE",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/13/",
      "updated_at": "2018-08-31T08:49:03.660000"
    },
    {
      "category": "Role Management",
      "created_at": "2018-08-31T08:49:03.662000",
      "description": "Create a new custom role ",
      "id": 14,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Create Role",
      "permissions": {
        "endpoint": "/api/v1/role/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/14/",
      "updated_at": "2018-08-31T08:49:03.663000"
    },
    {
      "category": "Role Management",
      "created_at": "2018-08-31T08:49:03.665000",
      "description": "Get all the system and custom roles along with their permissions",
      "id": 15,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Role",
      "permissions": {
        "endpoint": "/api/v1/role/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id__in",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/15/",
      "updated_at": "2018-08-31T08:49:03.665000"
    },
    {
      "category": "Role Management",
      "created_at": "2018-08-31T08:49:03.668000",
      "description": "Modify the permissions for a custom role",
      "id": 16,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Update Role",
      "permissions": {
        "endpoint": "/api/v1/role/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "PUT",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/16/",
      "updated_at": "2018-08-31T08:49:03.668000"
    },
    {
      "category": "Role Management",
      "created_at": "2018-08-31T08:49:03.670000",
      "description": "Delete a role",
      "id": 17,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Delete Role",
      "permissions": {
        "endpoint": "/api/v1/role/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "DELETE",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/17/",
      "updated_at": "2018-08-31T08:49:03.670000"
    },
    {
      "category": "User Management",
      "created_at": "2018-08-31T08:49:03.673000",
      "description": "Add a new user to the enterprise and assign a role",
      "id": 18,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Create User",
      "permissions": {
        "endpoint": "/api/v1/user/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/18/",
      "updated_at": "2018-08-31T08:49:03.673000"
    },
    {
      "category": "User Management",
      "created_at": "2018-08-31T08:49:03.676000",
      "description": "View all the details of user",
      "id": 19,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get User",
      "permissions": {
        "endpoint": "/api/v1/user/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/19/",
      "updated_at": "2018-08-31T08:49:03.677000"
    },
    {
      "category": "User Management",
      "created_at": "2018-08-31T08:49:03.679000",
      "description": "Update the user details such as role",
      "id": 20,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Update User",
      "permissions": {
        "endpoint": "/api/v1/user/",
        "exclude": [
          "is_superuser"
        ],
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "PUT",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/20/",
      "updated_at": "2018-08-31T08:49:03.679000"
    },
    {
      "category": "Bot Management",
      "created_at": "2018-08-31T08:49:03.682000",
      "description": "View all the consumer related information ",
      "id": 21,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Consumers",
      "permissions": {
        "endpoint": "/api/v1/consumer/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/21/",
      "updated_at": "2018-08-31T08:49:03.682000"
    },
    {
      "category": "Bot Management",
      "created_at": "2018-08-31T08:49:03.684000",
      "description": "View all historical sessions information",
      "id": 22,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Sessions",
      "permissions": {
        "endpoint": "/api/v1/room/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/22/",
      "updated_at": "2018-08-31T08:49:03.684000"
    },
    {
      "category": "Bot Management",
      "created_at": "2018-08-31T08:49:03.687000",
      "description": "View access to Analytics data such Engagement,volume,performance",
      "id": 23,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Analytics",
      "permissions": {
        "endpoint": "/api/v1/analytics/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/23/",
      "updated_at": "2018-08-31T08:49:03.687000"
    },
    {
      "category": "Bot Testing",
      "created_at": "2018-08-31T08:49:03.690000",
      "description": "View the testcases for a particular bot in the Testing section",
      "id": 24,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Bot Testcases",
      "permissions": {
        "endpoint": "/api/v1/bottestcases/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/24/",
      "updated_at": "2018-08-31T08:49:03.690000"
    },
    {
      "category": "Bot Testing",
      "created_at": "2018-08-31T08:49:03.692000",
      "description": "Add a test case in the Testing table",
      "id": 25,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Bot Testcases",
      "permissions": {
        "endpoint": "/api/v1/bottestcases/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/25/",
      "updated_at": "2018-08-31T08:49:03.692000"
    },
    {
      "category": "Bot Testing",
      "created_at": "2018-08-31T08:49:03.695000",
      "description": "Edit test cases in the Testing table",
      "id": 26,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Bot Testcases",
      "permissions": {
        "endpoint": "/api/v1/bottestcases/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "PUT",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/26/",
      "updated_at": "2018-08-31T08:49:03.695000"
    },
    {
      "category": "Bot Testing",
      "created_at": "2018-08-31T08:49:03.698000",
      "description": "Delete existing test cases from the Testing table",
      "id": 27,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Delete Bot Testcases",
      "permissions": {
        "endpoint": "/api/v1/bottestcases/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "DELETE",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/27/",
      "updated_at": "2018-08-31T08:49:03.698000"
    },
    {
      "category": "Bot Architecture",
      "created_at": "2018-08-31T08:49:03.700000",
      "description": "View all the available integration channels",
      "id": 28,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Integrations",
      "permissions": {
        "endpoint": "/api/v1/integrations/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/28/",
      "updated_at": "2018-08-31T08:49:03.700000"
    },
    {
      "category": "Bot Architecture",
      "created_at": "2018-08-31T08:49:03.704000",
      "description": "View all the available pipeline modules",
      "id": 29,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Pipeline Module",
      "permissions": {
        "endpoint": "/api/v1/pipelinemodule/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/29/",
      "updated_at": "2018-08-31T08:49:03.704000"
    },
    {
      "category": "Reports",
      "created_at": "2018-08-31T08:49:03.707000",
      "description": "Subscribe to a bot report",
      "id": 30,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Reports",
      "permissions": {
        "endpoint": "/api/v1/reports/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/30/",
      "updated_at": "2018-08-31T08:49:03.707000"
    },
    {
      "category": "Reports",
      "created_at": "2018-08-31T08:49:03.710000",
      "description": "View the list of all reports ever subscribed to by the enterprise",
      "id": 31,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Reports",
      "permissions": {
        "endpoint": "/api/v1/reports/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/31/",
      "updated_at": "2018-08-31T08:49:03.710000"
    },
    {
      "category": "Reports",
      "created_at": "2018-08-31T08:49:03.713000",
      "description": "Update the details, such as frequency, email id etc  for a subscribed report",
      "id": 32,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Reports",
      "permissions": {
        "endpoint": "/api/v1/reports/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id__in",
            "type": "bots"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "PUT",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/32/",
      "updated_at": "2018-08-31T08:49:03.713000"
    },
    {
      "category": "Reports",
      "created_at": "2018-08-31T08:49:03.716000",
      "description": "Unsubscribe from a report",
      "id": 33,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Delete Reports",
      "permissions": {
        "endpoint": "/api/v1/reports/",
        "fields": [],
        "get_params": [
          {
            "key": "id__in",
            "type": "bots"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "DELETE",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/33/",
      "updated_at": "2018-08-31T08:49:03.716000"
    },
    {
      "category": "Reports",
      "created_at": "2018-08-31T08:49:03.718000",
      "description": "View the historical data of all the reports sent out for an enterprise",
      "id": 34,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Report History",
      "permissions": {
        "endpoint": "/api/v1/reporthistory/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id__in",
            "type": "bots"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/34/",
      "updated_at": "2018-08-31T08:49:03.718000"
    },
    {
      "category": "Enterprise Details",
      "created_at": "2018-08-31T08:49:03.721000",
      "description": "Get detail of enterprise the user is logged in",
      "id": 35,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Get Enterprise",
      "permissions": {
        "endpoint": "/api/v1/enterprise/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/35/",
      "updated_at": "2018-08-31T08:49:03.721000"
    },
    {
      "category": "Enterprise Details",
      "created_at": "2018-08-31T08:49:03.723000",
      "description": "Update the details for the enterprise such as name,logo etc",
      "id": 36,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Update Enterprise",
      "permissions": {
        "endpoint": "/api/v1/enterprise/",
        "exclude": [],
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "type": "enterprise"
          }
        ],
        "method": "PUT",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/36/",
      "updated_at": "2018-08-31T08:49:03.723000"
    },
    {
      "category": "User Management",
      "created_at": "2018-08-31T08:49:03.727000",
      "description": "Remove a user from an enterprise",
      "id": 37,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Delete User",
      "permissions": {
        "endpoint": "/api/v1/user/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "DELETE",
        "role": [
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/37/",
      "updated_at": "2018-08-31T08:49:03.727000"
    },
    {
      "category": "Reports",
      "created_at": "2018-08-31T08:49:03.730000",
      "description": "View the report types for a bot",
      "id": 38,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Report Types",
      "permissions": {
        "endpoint": "/api/v1/reporttypes/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "admin",
          "super_admin",
          "user"
        ]
      },
      "resource_uri": "/api/v1/actions/38/",
      "updated_at": "2018-08-31T08:49:03.730000"
    },
    {
      "category": "Preview Bot",
      "created_at": true,
      "description": "Preview Bot",
      "id": 39,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Send API",
      "permissions": {
        "endpoint": "/api/v1/webhook/web/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/39/",
      "updated_at": "2018-09-07T05:16:40.246000"
    },
    {
      "category": "Bot Management",
      "created_at": "2018-08-31T08:49:03.735000",
      "description": "View messages for a session",
      "id": 40,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Messages",
      "permissions": {
        "endpoint": "/api/v1/message/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/40/",
      "updated_at": "2018-08-31T08:49:03.735000"
    },
    {
      "category": "Permissions",
      "created_at": "2018-08-31T08:49:03.738000",
      "description": "Get all the actions associated with the user profile",
      "id": 41,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Actions",
      "permissions": {
        "endpoint": "/api/v1/actions/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/41/",
      "updated_at": "2018-08-31T08:49:03.738000"
    },
    {
      "category": "Close Sessions",
      "created_at": "2018-08-31T08:49:03.740000",
      "description": "Close a room",
      "id": 42,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Close Room",
      "permissions": {
        "endpoint": "/api/v1/room/closeroom/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/42/",
      "updated_at": "2018-08-31T08:49:03.740000"
    },
    {
      "category": "IMIChat",
      "created_at": "2018-08-31T08:49:03.743000",
      "description": "Access to close the existing IMIchatsession from bot's end",
      "id": 43,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "agent_close",
      "permissions": {
        "endpoint": "/api/v1/ccsp/imichat/agentclose/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/43/",
      "updated_at": "2018-08-31T08:49:03.743000"
    },
    {
      "category": "GDPR",
      "created_at": "2018-08-31T08:49:03.746000",
      "description": "anonymize the conversations after the data retention period(GDPR)",
      "id": 44,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Anonymize Conversation",
      "permissions": {
        "endpoint": "/api/v1/anonymize/conversation/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/44/",
      "updated_at": "2018-08-31T08:49:03.746000"
    },
    {
      "category": "Debug",
      "created_at": "2018-08-31T08:49:03.749000",
      "description": "for debuging the df rules from starters code",
      "id": 45,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Post dfRules Debug",
      "permissions": {
        "endpoint": "/api/v1/webhook/web/dfRulesDebug/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/45/",
      "updated_at": "2018-08-31T08:49:03.749000"
    },
    {
      "category": "Debug",
      "created_at": "2018-08-31T08:49:03.751000",
      "description": "for debuging the df rules from starters code",
      "id": 46,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Post genRules Debug",
      "permissions": {
        "endpoint": "/api/v1/webhook/web/genRulesDebug/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/46/",
      "updated_at": "2018-08-31T08:49:03.751000"
    },
    {
      "category": "Debug",
      "created_at": "2018-08-31T08:49:03.754000",
      "description": "for debuging the df rules from starters code",
      "id": 47,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Post genTemplate Debug",
      "permissions": {
        "endpoint": "/api/v1/webhook/web/genTemplateDebug/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/47/",
      "updated_at": "2018-08-31T08:49:03.754000"
    },
    {
      "category": "Debug",
      "created_at": "2018-08-31T08:49:03.756000",
      "description": "for debuging the df rules from starters code",
      "id": 48,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Post Workflow Debug",
      "permissions": {
        "endpoint": "/api/v1/webhook/web/callbackDebug/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/48/",
      "updated_at": "2018-08-31T08:49:03.756000"
    },
    {
      "category": "Webhooks",
      "created_at": "2018-08-31T08:49:03.759000",
      "description": "called by imiconnect when the callback is triggered",
      "id": 49,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Workflow Webhook",
      "permissions": {
        "endpoint": "/api/v1/webhook/workflow/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/49/",
      "updated_at": "2018-08-31T08:49:03.759000"
    },
    {
      "category": "Webhooks",
      "created_at": "2018-08-31T08:49:03.762000",
      "description": "Preview bot for facebook channel",
      "id": 50,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Facebook Webhook",
      "permissions": {
        "endpoint": "/api/v1/webhook/facebook/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/50/",
      "updated_at": "2018-08-31T08:49:03.762000"
    },
    {
      "category": "Backward Compatibility",
      "created_at": "2018-08-31T08:49:03.764000",
      "description": "This is specific to ikea",
      "id": 51,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Backward Compatible Message API",
      "permissions": {
        "endpoint": "/analytics/rooms/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/51/",
      "updated_at": "2018-08-31T08:49:03.764000"
    },
    {
      "category": "Pipeline",
      "created_at": "2018-08-31T09:29:51.526000",
      "description": "Permission to access pipeline bot response",
      "id": 52,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Intelligence API Webhook",
      "permissions": {
        "endpoint": "/api/v1/webhook/intelligent/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/52/",
      "updated_at": "2018-08-31T09:29:51.526000"
    },
    {
      "category": "GDPR",
      "created_at": "2018-08-31T10:01:38.717000",
      "description": "This is used to anonymize all the rooms related to  a consumer",
      "id": 53,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Delete Consumer",
      "permissions": {
        "endpoint": "/api/v1/anonymize/consumer/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/53/",
      "updated_at": "2018-08-31T10:01:38.718000"
    },
    {
      "category": "Sessions",
      "created_at": "2018-09-04T08:11:44.655000",
      "description": "Decrypt encrypted sessions and consumers",
      "id": 54,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Decrypt Audit",
      "permissions": {
        "endpoint": "/api/v1/decrypt_audit/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "user_id",
            "type": "user"
          },
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/54/",
      "updated_at": "2018-09-04T08:11:44.656000"
    },
    {
      "category": "GDPR",
      "created_at": "2018-09-05T08:40:12.871000",
      "description": "anonymize the conversations after the data retention period(GDPR)",
      "id": 55,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Anonymize Conversation",
      "permissions": {
        "endpoint": "api/v1/anonymize/conversation/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/55/",
      "updated_at": "2018-09-05T08:40:12.871000"
    },
    {
      "category": "GDPR",
      "created_at": "2018-09-05T08:40:42.759000",
      "description": "Delete consumer and rooms",
      "id": 56,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "erase consumer",
      "permissions": {
        "endpoint": "/consumer/erase/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/56/",
      "updated_at": "2018-09-05T08:40:42.760000"
    },
    {
      "category": "Reports",
      "created_at": "2018-09-06T07:57:37.062000",
      "description": "Execute reports(done by scheduler)",
      "id": 57,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Exec Reports",
      "permissions": {
        "endpoint": "/api/v1/reports/exec/",
        "method": "POST",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/57/",
      "updated_at": "2018-09-06T07:57:37.062000"
    },
    {
      "category": "Reports",
      "created_at": "2018-09-06T11:51:56.535000",
      "description": "Download reports in particular format",
      "id": 58,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Download Reports",
      "permissions": {
        "endpoint": "/api/v1/reporthistory/downloadreports/",
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/58/",
      "updated_at": "2018-09-06T11:51:56.535000"
    },
    {
      "category": "Bot Preview",
      "created_at": "2018-09-07T05:09:45.336000",
      "description": "Preview bot for skype channel",
      "id": 59,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Skype API",
      "permissions": {
        "endpoint": "/api/v1/webhook/skype/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/59/",
      "updated_at": "2018-09-07T05:09:45.336000"
    },
    {
      "category": "User Management",
      "created_at": "2018-09-18T10:57:50.277000",
      "description": "Change user password",
      "id": 60,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Update Password",
      "permissions": {
        "endpoint": "/api/v1/user/updatepassword/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "type": "user"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "POST",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/60/",
      "updated_at": "2018-09-18T10:57:50.277000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-09-26T11:15:38.421000",
      "description": "View bot knowledge base concepts",
      "id": 61,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Bot Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/61/",
      "updated_at": "2018-09-26T11:15:38.421000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-09-26T11:16:43.357000",
      "description": "Create a new bot knowledge base concept",
      "id": 62,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Bot Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          },
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/62/",
      "updated_at": "2018-09-26T11:16:43.357000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-09-26T11:17:11.231000",
      "description": "Edit a bot knowledge base concept",
      "id": 63,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Bot Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "PUT",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/63/",
      "updated_at": "2018-09-26T11:17:11.231000"
    },
    {
      "category": "Bot Knowledge Base",
      "created_at": "2018-09-26T11:17:52.463000",
      "description": "Delete a bot knowledge base concept",
      "id": 64,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Delete Bot Knowledge base",
      "permissions": {
        "endpoint": "/api/v1/customner/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          },
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "DELETE",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/64/",
      "updated_at": "2018-09-26T11:17:52.463000"
    },
    {
      "category": "Webhooks",
      "created_at": "2018-09-27T09:08:46.910000",
      "description": "Preview bot for google home channel",
      "id": 65,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Google Home Webhook",
      "permissions": {
        "endpoint": "/api/v1/webhook/googlehome/",
        "fields": [],
        "method": "POST",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/65/",
      "updated_at": "2018-09-27T09:08:46.910000"
    },
    {
      "category": "Enterprise Details",
      "created_at": "2018-08-31T08:49:03.625000",
      "description": "Get all the enterprises mapped to a user",
      "id": 66,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Enterprises",
      "permissions": {
        "endpoint": "/api/v1/user/enterprises/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/66/",
      "updated_at": "2018-08-31T08:49:03.625000"
    },
    {
      "category": "Login",
      "created_at": "2018-08-31T08:49:03.625000",
      "description": "Selection of an enterprise after login",
      "id": 67,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Enterprises Login",
      "permissions": {
        "endpoint": "/api/v1/user/enterprise_login/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "unauthorized",
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/67/",
      "updated_at": "2018-08-31T08:49:03.625000"
    },
    {
      "category": "Bot Architecture",
      "created_at": "2018-08-31T08:49:03.655000",
      "description": "Description forpipeline a  module",
      "id": 68,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "GET ModuleDetail",
      "permissions": {
        "endpoint": "/api/v1/moduledetails/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/68/",
      "updated_at": "2018-08-31T08:49:03.655000"
    },
    {
      "category": "GDPR",
      "created_at": "2018-10-17T09:38:05.541000",
      "description": "GET consent permissions",
      "id": 69,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "GET consent permissions",
      "permissions": {
        "endpoint": "/getConsent/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/69/",
      "updated_at": "2018-10-17T09:38:05.541000"
    },
    {
      "category": "GDPR",
      "created_at": "2018-10-17T09:38:05.541000",
      "description": "update consent permissions",
      "id": 70,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "update consent permissions",
      "permissions": {
        "endpoint": "/updateConsent",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/70/",
      "updated_at": "2018-10-17T09:38:05.541000"
    },
    {
      "category": "Preview Bot",
      "created_at": "2018-12-04T08:49:03.679000",
      "description": "Add feedback to bot response",
      "id": 71,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Add Feedback",
      "permissions": {
        "endpoint": "/api/v1/message/feedback/",
        "exclude": [],
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "PUT",
        "role": [
          "bot"
        ]
      },
      "resource_uri": "/api/v1/actions/71/",
      "updated_at": "2018-12-04T08:49:03.679000"
    },
    {
      "category": "Bot Management",
      "created_at": "2018-12-17T08:49:03.740000",
      "description": "Analytics backup",
      "id": 72,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Create Backup",
      "permissions": {
        "endpoint": "/api/v1/aggregation/createbackup/",
        "fields": [],
        "get_params": [],
        "method": "POST",
        "role": [
          "anonymous"
        ]
      },
      "resource_uri": "/api/v1/actions/72/",
      "updated_at": "2018-12-17T08:49:03.740000"
    },
    {
      "category": "User Management",
      "created_at": "2018-12-21T08:49:03.727000",
      "description": "Remove user from a enterprise",
      "id": 73,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Remove User from Enterprise",
      "permissions": {
        "endpoint": "/api/v1/user/removeenterpriseuser/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "POST",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/73/",
      "updated_at": "2018-12-21T08:49:03.727000"
    },
    {
      "category": "Enterprise Details",
      "created_at": "2018-12-27T08:49:03.721000",
      "description": "View summary of deleted logs for an enterprise ",
      "id": 74,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Get enterprise log deletion summary",
      "permissions": {
        "endpoint": "/api/v1/deletelogs/enterpriselogdeletionsummary/",
        "fields": [],
        "get_params": [
          {
            "key": "enterprise_id",
            "type": "enterprise"
          }
        ],
        "method": "GET",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/74/",
      "updated_at": "2018-12-27T08:49:03.721000"
    },
    {
      "category": "Enterprise Details",
      "created_at": "2018-08-31T08:49:03.723000",
      "description": "Create service key for an enterprise",
      "id": 75,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Generate Service Key",
      "permissions": {
        "endpoint": "/api/v1/enterprise/generate_service_key/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "type": "enterprise"
          }
        ],
        "method": "POST",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/75/",
      "updated_at": "2018-08-31T08:49:03.723000"
    },
    {
      "category": "Enterprise Details",
      "created_at": "2018-08-31T08:49:03.723000",
      "description": "update description of service key for an enterprise",
      "id": 76,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Update Service Key Description",
      "permissions": {
        "endpoint": "/api/v1/enterprise/update_service_key_description/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "type": "enterprise"
          }
        ],
        "method": "POST",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/76/",
      "updated_at": "2018-08-31T08:49:03.723000"
    },
    {
      "category": "Enterprise Details",
      "created_at": "2018-08-31T08:49:03.723000",
      "description": "Disable a service key for an enterprise",
      "id": 77,
      "is_configurable_action": false,
      "is_default_action": false,
      "name": "Disable Service Key",
      "permissions": {
        "endpoint": "/api/v1/enterprise/disable_service_key/",
        "fields": [],
        "get_params": [
          {
            "key": "id",
            "type": "enterprise"
          }
        ],
        "method": "POST",
        "role": [
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/77/",
      "updated_at": "2018-08-31T08:49:03.723000"
    },
    {
      "category": "Bot Testing",
      "created_at": "2019-02-18T07:33:03.644000",
      "description": "Run testcases for a particular bot in the Testing section",
      "id": 78,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Bot One-click Testing",
      "permissions": {
        "endpoint": "/api/v1/bottestcases/oneclicktesting/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/78/",
      "updated_at": "2019-02-18T07:33:03.644000"
    },
    {
      "category": "Bot Testing",
      "created_at": "2019-02-18T07:33:03.644000",
      "description": "Cancel already running testcases for a particular bot in the Testing section",
      "id": 79,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Cancel Bot Testing",
      "permissions": {
        "endpoint": "/api/v1/bottestcases/canceltesting/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/79/",
      "updated_at": "2019-02-18T07:33:03.644000"
    },
    {
      "category": "Sections",
      "created_at": "2019-02-26T23:12:13.473000",
      "description": "Get all the default sections associated in a search based bot",
      "id": 80,
      "is_configurable_action": false,
      "is_default_action": true,
      "name": "Get Default Sections",
      "permissions": {
        "endpoint": "/api/v1/actions/",
        "fields": [],
        "get_params": [],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/80/",
      "updated_at": "2019-02-26T23:12:13.473000"
    },
    {
      "category": "Bots",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Modify allow agent handover of bot",
      "id": 81,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Modify agent handover",
      "permissions": {
        "endpoint": "/api/v1/bot/updateagenthandover/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/81/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Corpus",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Create faq bot corpus",
      "id": 82,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Corpus",
      "permissions": {
        "endpoint": "/api/v1/corpus/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/82/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Corpus",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Update faq bot corpus",
      "id": 83,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Corpus",
      "permissions": {
        "endpoint": "/api/v1/corpus/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "PUT",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/83/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Corpus",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Get faq bot corpus",
      "id": 84,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Corpus",
      "permissions": {
        "endpoint": "/api/v1/corpus/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/84/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Corpus",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Get faq bot corpus",
      "id": 85,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "delete Corpus",
      "permissions": {
        "endpoint": "/api/v1/corpus/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "anonymus"
        ]
      },
      "resource_uri": "/api/v1/actions/85/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Category",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Create category in corpus",
      "id": 86,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Category",
      "permissions": {
        "endpoint": "/api/v1/corpus/createcategory/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/86/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Category",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Update category in corpus",
      "id": 87,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Category",
      "permissions": {
        "endpoint": "/api/v1/corpus/updatecategory/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/87/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Category",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Remove category from corpus",
      "id": 88,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Remove Category",
      "permissions": {
        "endpoint": "/api/v1/corpus/removecategory/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/88/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Category",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Change Category of a Section",
      "id": 89,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Section Category Change",
      "permissions": {
        "endpoint": "/api/v1/corpus/changesectioncategory/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/89/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Corpus",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Make a corpus live",
      "id": 90,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Make Corpus Live",
      "permissions": {
        "endpoint": "/api/v1/corpus/makecorpuslive/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/90/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Section",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Create Section",
      "id": 91,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Create Section",
      "permissions": {
        "endpoint": "/api/v1/corpus/createsection/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/91/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Section",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Update a section in corpus",
      "id": 92,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Update Section",
      "permissions": {
        "endpoint": "/api/v1/corpus/updatesection/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/92/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Section",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Remove a section from corpus",
      "id": 93,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Remove Section",
      "permissions": {
        "endpoint": "/api/v1/corpus/removesection/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/93/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Corpus",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Get default/training in progress corpus",
      "id": 94,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Get Default Corpus",
      "permissions": {
        "endpoint": "/api/v1/corpus/getdefaultcorpus/",
        "fields": [],
        "get_params": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "method": "GET",
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/94/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Corpus",
      "created_at": "2019-03-05T08:49:03.630000",
      "description": "Api to train corpus",
      "id": 95,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Train Corpus",
      "permissions": {
        "endpoint": "/api/v1/corpus/train/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/95/",
      "updated_at": "2019-03-05T08:49:03.630000"
    },
    {
      "category": "Category",
      "created_at": "2019-04-29T08:49:03.630000",
      "description": "Change category of a section by creating a new category",
      "id": 96,
      "is_configurable_action": true,
      "is_default_action": false,
      "name": "Section Category Change with Category Creation",
      "permissions": {
        "endpoint": "/api/v1/corpus/createcategoryandmaptosection/",
        "fields": [],
        "method": "POST",
        "post_fields": [
          {
            "key": "bot_id",
            "type": "bot"
          }
        ],
        "role": [
          "user",
          "admin",
          "super_admin"
        ]
      },
      "resource_uri": "/api/v1/actions/96/",
      "updated_at": "2019-04-29T08:49:03.630000"
    }
  ]
}