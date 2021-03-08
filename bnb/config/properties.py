from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Properties"),
			"icon": "fa fa-star",
			"items": [
			  {
					"type": "doctype",
					"name": "Properties",
				},
				
			]
		},
		
	
	]
