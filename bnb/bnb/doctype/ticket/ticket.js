// Copyright (c) 2021, just back and contributors
// For license information, please see license.txt

frappe.ui.form.on('Ticket', {
	general:function(frm){
		var d=new frappe.ui.Dialog({
			'fields':[
				{
					'label':'Open Date',
					'fieldname':'open_date',
					'fieldtype':'Date',
					'default':frm.doc.open_date

				},
				{
					"label":"Owner",
					"fieldname":"owner",
					"fieldtype":"Link",
					"options":"Owner Info",
					'default':frm.doc.owner

				},

				{
					"label":"Owner owner_department",
					"fieldname":"owner_department",
					"fieldtype":"Link",
					"options":"Department",
					'default':frm.doc.owner_department

				},
				{
					"fieldtype":"Column Break",
					"fieldname":"col"

				},
				{
					"label":"Assigned work Group",
					"fieldname":"assigned_work_group",
					"fieldtype":"Link",
					"options":"Owner Info",
					'default':frm.doc.assigned_work_group

				},
				{
					"label":"Assigne",
					"fieldname":"assignee",
					"fieldtype":"Link",
					"options":"Employee",
					'default':frm.doc.assignee

				},
				{
					"label":"CC",
					"fieldname":"cc",
					"fieldtype":"Link",
					"options":"Employee",
					'default':frm.doc.cc


				},
				{
					"label":"Criticality",
					"fieldname":"criticality",
					"fieldtype":"Select",
					"options":["Crisis","Escalation","Normal"],
					'default':frm.doc.criticality

				}
			],
			primary_action:function(){
				d.hide()
				var args=d.get_values()
				frm.set_value("open_date",args.open_date)
				frm.set_value("owner",args.owner)
				frm.set_value("owner_department",args.owner_department)
				frm.set_value("assigned_work_group",args.assigned_work_group)
				frm.set_value("assignee",args.assignee)
				frm.set_value("cc",args.cc)
				frm.set_value("criticality",args.criticality)
			}
		});
		d.show();
	},
	specific_info:function(frm){
		var d=new frappe.ui.Dialog({
			'fields':[
				
				{
					"label":"Who Is There",
					"fieldname":"who_is_there",
					"fieldtype":"Select",
					"options":["Owner","Guest","Free"],
					'default':frm.doc.who_is_there


				},
				{
					"label":"Prefered Time",
					"fieldname":"preferred_time",
					"fieldtype":"Select",
					"options":["mmediate", "Scheduled time"],
					'default':frm.doc.preferred_time

				}
			],
			primary_action:function(){
				d.hide()
				var args=d.get_values()
					frm.set_value("who_is_there",args.who_is_there)
				frm.set_value("preferred_time",args.preferred_time)

			}
		});
		d.show();
	},
	money_collections:function(frm){
		var d=new frappe.ui.Dialog({
			'fields':[
				
				{

					"label":"Amount Collected",
					"fieldname":"amount_collected",
					"fieldtype":"Data",
					'default':frm.doc.amount_collected


				},
				{
					"label":"Collection Details",
					"fieldname":"collection_details",
					"fieldtype":"Currency",
					'default':frm.doc.amount_collected
				}
			],
			primary_action:function(){
				d.hide()
				var args=d.get_values()
					frm.set_value("amount_collected",args.amount_collected)
				frm.set_value("collection_details",args.collection_details)
			}
		});
		d.show();
	},
		resolution:function(frm){
		var d=new frappe.ui.Dialog({
			'fields':[
				
				{

					"label":"Resolution Comment",
					"fieldname":"resolution_comment",
					"fieldtype":"Data",
					'default':frm.doc.resolution_comment
				},
				{
					"label":"Amount Paid",
					"fieldname":"amount_paid",
					"fieldtype":"Currency",
					'default':frm.doc.amount_paid
				},
				{
					"label":"Amount Paid",
					"fieldname":"payment_details",
					"fieldtype":"Data",
					'default':frm.doc.payment_details
				},
			],
			primary_action:function(){
				d.hide()
				var args=d.get_values()
				frm.set_value("resolution_comment",args.resolution_comment)
				frm.set_value("amount_paid",args.amount_paid)
				frm.set_value("payment_details",args.payment_details)
			}
		});
		d.show();
	},
	rating:function(frm){
		var d=new frappe.ui.Dialog({
			'fields':[
				
				{

					"label":"Quality Rating",
					"fieldname":"quality_rating",
					"fieldtype":"Rating",
					'default':frm.doc.quality_rating
				},
				{
					"label":"Quality Comment",
					"fieldname":"quality_comment",
					"fieldtype":"Data",
					'default':frm.doc.quality_comment
				},
				
			],
			primary_action:function(){
				d.hide()
				var args=d.get_values()
				frm.set_value("quality_rating",args.quality_rating)
				frm.set_value("quality_comment",args.quality_comment)
				
			}
		});
		d.show();
	},
});
