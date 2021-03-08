// Copyright (c) 2021, just back and contributors
// For license information, please see license.txt

frappe.ui.form.on('Properties', {
	 owner_info:function(frm){
	 	frappe.msgprint("Ownaer Name:"+frm.doc.owner_name )
	 	frappe.msgprint("Ownaer phone:"+frm.doc.phone )
	 }
	})
