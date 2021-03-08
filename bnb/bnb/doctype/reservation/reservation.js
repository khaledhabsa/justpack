// Copyright (c) 2021, just back and contributors
// For license information, please see license.txt

frappe.ui.form.on('Reservation', {
	daily_rate:function(frm){
		frm.set_value("total_before_insurance","")
		if(frm.doc.daily_rate && frm.doc.nights){
			var sum=0;
			if(frm.doc.daily_rate && frm.doc.nights){
					sum+=frm.doc.daily_rate * frm.doc.nights
			}
			frm.set_value("total_before_insurance",sum)
			frm.set_value("to_be_paid",sum)

		}
	},
	nights:function(frm){
			frm.set_value("total_before_insurance","")
		if(frm.doc.daily_rate && frm.doc.nights){
			var sum=0;
			if(frm.doc.daily_rate && frm.doc.nights){
					sum+=frm.doc.daily_rate * frm.doc.nights
			}
			frm.set_value("total_before_insurance",sum)
			frm.set_value("to_be_paid",sum)
			frm.set_value("total_rent",sum)

		}
	},
	other_charges:function(frm){
		frm.set_value("total_before_insurance","")
		if(frm.doc.daily_rate && frm.doc.nights){
			var sum=0;
			if(frm.doc.daily_rate && frm.doc.nights){
					sum+=frm.doc.daily_rate * frm.doc.nights
			}
			if(frm.doc.other_charges){
					sum+=frm.doc.other_charges
			}
			frm.set_value("total_before_insurance",sum)
			frm.set_value("to_be_paid",sum)
			frm.set_value("total_rent",sum)

		}
	},
	insurance:function(frm){
		frm.set_value("total_before_insurance","")
			var sum=0;
			if(frm.doc.daily_rate && frm.doc.nights){
					sum+=frm.doc.daily_rate * frm.doc.nights
			}
			if(frm.doc.other_charges){
					sum+=frm.doc.other_charges
			}
			if(frm.doc.insurance){
					sum+=frm.doc.insurance
			}
			// frm.set_value("total_before_insurance",sum)
			frm.set_value("to_be_paid",sum)
			frm.set_value("total_rent",sum)

		
	},
	paid:function(frm){
		var d=frm.doc.to_be_paid-frm.doc.paid
		frm.set_value("remaining",d)
	}
});
