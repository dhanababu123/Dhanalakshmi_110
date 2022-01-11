package springmvcexample.utility;

import org.junit.Test;

public class CalculatorTest {
@Test
	public static void testadd() {
	
		CalculatorTest c=new CalculatorTest();
		assertTrue(c.add(8,7)==15);

	}
@Test
public static void testsub() {

	CalculatorTest c=new CalculatorTest();
	assertTrue(c.sub(8,7)==1);

}
}

}
