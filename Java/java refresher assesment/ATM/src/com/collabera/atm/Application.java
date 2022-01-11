package com.collabera.atm;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Application {

private static Scanner scanner;

public static void main(String[] args) throws InputMismatchException {
	
	ATM obj1 = new ATM("DHANA",10001,10000);
	ATM obj2 = new ATM("PRABA",20001,10000);
	Boolean x=true;
	try {
	do {
	System.out.println("Enter Account Number: ");
	scanner = new Scanner(System.in);
	int option = scanner.nextInt();
	if(option==obj1.AccountNo) {
		obj1.showMenu();
		x=false;
	}else{
		if(option==obj2.AccountNo) {
			obj2.showMenu();
			x=false;
		}
		else {
			System.out.println("Invalid User ID try Again");
		}
	}
	
}while(x);}catch(InputMismatchException e) {
	System.out.println("invalid input");
}
}

}