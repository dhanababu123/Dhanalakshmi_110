package com.javatpoint.mypackage;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class StoreTest {

	public static void main(String args[])
	{
		StandardServiceRegistry ssr = new StandardServiceRegistryBuilder().configure("hibernate.cfg.xml").build();
	    Metadata meta = new MetadataSources(ssr).getMetadataBuilder().build();
		
		SessionFactory factory=meta.getSessionFactoryBuilder().build();
		Session session=factory.openSession();
		
		 Transaction t=session.beginTransaction();  
	      
	    Account a=new Account();  
	    a.setName("dhana");  
		      
		    CurrentAccount ca=new CurrentAccount();  
		    ca.setoverDraftamount(876.9877);  
		     
		     
		      
		    SavingsAccount sa=new SavingsAccount();  
		     
		    sa.setInterest(211345.987);  
		     
		      
		    session.persist(a);  
		    session.persist(ca);  
		    session.persist(sa);  
		      
		    t.commit();  
		    session.close();  
		    System.out.println("success");  
		
	}
	
}
