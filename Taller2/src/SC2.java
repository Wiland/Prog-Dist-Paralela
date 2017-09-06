
public class SC2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SC2 s = new SC2();
		s.start2();
	}
	
	void start(){
		int a = 3;
		int b = 4;
		System.out.println(" " + 7 + 2 + " ");
		System.out.println(a + b);
		System.out.println(" " + a + b + " ");
		System.out.println(foo() + a + b + " ");
		System.out.println(a + b + foo());
	}
	
	String foo() {
		return "foo";
	}
	
	public void test(int x) {
		int odd = 1;
		/*if(odd){
			System.out
		}*/
	}
	
	public static void start2(){//B
		long[] a1 = {3,4,5};
		long[] a2 = fix(a1);
		System.out.println(a1[0] + a1[1] + a1[2] + " ");
		System.out.println(a2[0] + a2[1] + a2[2] + " ");
	}
	
	public static long[] fix(long[] a3) {
		a3[1] = 7;
		return a3;
	}
	
	public int aMet() {
		//static int i = 0;
		int i = 0;
		i++;
		return i;
	}

}
