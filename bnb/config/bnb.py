from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Sales Pipeline"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Department",
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Work Group",
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Ticket",
					"onboard": 1,
				},
				
					{
					"type": "doctype",
					"name": "Owner Info",
					"onboard": 1,
				},
					{
					"type": "doctype",
					"name": "Reservation",
					"onboard": 1,
				
				},
				{
					"type": "doctype",
					"name": "Properties",
				},
				{
					"type": "doctype",
					"name": "Unit",
					
				},
				{
					"type": "doctype",
					"name": "Resort",
				
				},
				{
					"type": "doctype",
					"name": "Check in",
					
				},
					{
					"type": "doctype",
					"name": "Check Out",
					
				},
					
					{
					"type": "doctype",
					"name": "Ticket Type",
					"description": _("Helps you keep tracks of Contracts based on Supplier, Customer and Employee"),
				},
		        {
		          "type": "doctype",
							"name": "Ticket Sub Type",
							"label": _("Newsletter"),
						}
			]
		},
		
	
	]
