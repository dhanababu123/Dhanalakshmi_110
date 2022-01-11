package com.journaldev.spring.exceptions;

@SuppressWarnings("serial")
public class ArrayIndexOutOfBoundsException extends Exception{
	
	public ArrayIndexOutOfBoundsException(int id){
		super("ArrayOutOfBoundsException with id="+id);
	}

}

