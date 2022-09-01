package com.sample;

public class test {
	public static int sub(int a, int b) {
		int c=a-b;
		//System.out.println(c);
		return c;
	}
	public static void main(String[] args) {
		System.out.println("Hello World");
		int a=22,b=44;
		int c=a+b;
		System.out.println(c);
		int d=( sub(10,10));
		System.out.println(d);
		System.out.println("  ");
		System.out.println("------------------------------------NEW Pattern-------------------------------------------------------  ");
		System.out.println("  ");
		pattern(5);
		starp1(10);
		starp2(8);
		starp3(8);
	
			
	}
	public static void pattern(int n) {
		for(int i=0;i<=n;i++) {
			for(int j=0;j<=n;j++) {
				System.out.print("* ");
			}
			System.out.println();
		}
		System.out.println("  ");
		System.out.println("------------------------------------NEW Pattern-------------------------------------------------------  ");
		System.out.println("  ");
	}

	
		public static void starp1(int n) {
			for(int i=0;i<=n;i++) {
				for(int j=0;j<=i;j++) {
					System.out.print("* ");
				}
				System.out.println();
			}
			System.out.println("  ");
			System.out.println("------------------------------------NEW Pattern-------------------------------------------------------  ");
			System.out.println("  ");
	}
		public static void starp2(int n) {
			for(int i=0;i<=n;i++) {
				for(int j=n;j>=i;j--) {
					System.out.print("* ");
				}
				System.out.println();
			}
			System.out.println("  ");
			System.out.println("------------------------------------NEW Pattern-------------------------------------------------------  ");
			System.out.println("  ");
		}

		public static void starp3(int n) {
			for(int i=0;i<=n;i++) {
				for(int j=0;j<=i;j++) {
					System.out.print(" ");
				}
				for(int k=n;k>=i;k--) {
					System.out.print("* ");
				}
				System.out.println();
			}
			System.out.println("  ");
			System.out.println("------------------------------------NEW Pattern-------------------------------------------------------  ");
			System.out.println("  ");
		}

	
}
