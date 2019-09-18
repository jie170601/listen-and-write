package lame;

/**
 * ����ָ��ʱ��Ŀհ���������
 * Ϊ16kHz��16λ������pcm�ļ���Ӧ����
 * @author jie
 *
 */
public class Silence {
	
	//16kHz�Ĳ�����
	private static int rate = 16000;
	
	/**
	 * ���ɶ�Ӧʱ�䣨�룩�Ŀհ���Ƶ����
	 * @param s Ҫ������Ƶ���ݵ�ʱ������λ�ǡ��롰
	 */
	public static byte[] pcm(int s) {
		//ÿ��rate�����ݣ�s�빲s*rate������
		int length = s*rate;
		return new byte[length];
	}
}
