package com.marticus.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class ReservationAspect {
	@Before(" execution(* com.marticus.auth.Authenticate.checkin(..))")
	public void checkIP()
	{
		System.out.println("id is ok");
	}
	
	@Before("execution(* com.marticus.auth.Authenticate.checkin(..))")
	public void checkVaccCert()
	{
		System.out.println("addPatient() is running..!!");
		System.out.println("Vaccine Certificate Verified");
	}
	
	@Before("execution(* com.marticus.auth.Authenticate.checkout(..))")
	public void checkRoomStatus()
	{
		System.out.println("Checking Rooms Status");
	}
	
	@After("execution(* com.marticus.auth.Authenticate.checkout(..))")
	public void ipCheckPostCheckin() 
	{
		System.out.println("IP Check Post Check-In is Ok");
	}
	
	@Around("execution(* com.marticus.auth.Authenticate.checkout(..))")
	public void logAround(ProceedingJoinPoint joinPoint)throws Throwable
	{
		
		System.out.println("addpatient() is running..!!");
		System.out.println("Around berfore is running..!!");
		joinPoint.proceed();
		System.out.println("add patient() is running..!!");
		System.out.println("--------------------------------");
	}
}
