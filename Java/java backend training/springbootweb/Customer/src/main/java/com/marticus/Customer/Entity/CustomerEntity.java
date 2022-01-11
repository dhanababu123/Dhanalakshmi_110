package com.marticus.Customer.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

	@Entity
	@Table(name="customer")
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	public class CustomerEntity {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)	
		long id;
		
		@Column(name="cust_code")	
		String customerCode;
		
		@Column(name="cust_name")
		String customerName;

	}
