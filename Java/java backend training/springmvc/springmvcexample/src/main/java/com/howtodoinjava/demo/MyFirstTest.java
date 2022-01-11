package com.howtodoinjava.demo;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class MyFirstTest {
int age=19;
@Before
public void setUp1()
{
	age=19;
}
@After
public void setUp()
{
	System.out.print("tearbown method is called");
	age=0;
}
@Test
public void checkIfAdult() {
	assertTrue(age>=18);
}


	@Test
	public void test() {
		//String str="mounita";
		//String str1="jayanta";
		//int i=5;
		//assertEquals(str,str1);
		//assertTrue(i>2);
		System.out.print("age="+age);
	}

}
