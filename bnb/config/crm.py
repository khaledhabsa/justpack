from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Crm"),
			"icon": "fa fa-star",
			"items": [
				{
					"label":("Reservation"),
					"type": "doctype",
					"name": "Reservation",
					"onboard": 1,
				
				},
				{
					"type": "doctype",
					"name": "Employee",
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Department",
					"onboard": 1,
				},
				
			]
		},
		
	
	]
