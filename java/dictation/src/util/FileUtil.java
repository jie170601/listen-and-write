package util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

/**
 * �ļ���д������
 * @author jie
 *
 */
public class FileUtil {
	
	/**
	 * ͨ���ļ�����ȡ�ļ����ݵ�byte����
	 * @param fileName
	 * @return
	 * @throws Exception
	 */
	public static byte[] read(String fileName) throws Exception{
		int len = 0;
		byte[] buffer = new byte[1024];
		File file = new File(fileName);
		FileInputStream inputStream = new FileInputStream(file);
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		while ((len = inputStream.read(buffer)) != -1) {
			bos.write(buffer, 0, len);
		}
		inputStream.close();
		bos.close();
		return bos.toByteArray();
	}
	
	/**
	 * ��byte����д��ָ���ļ���
	 * @param data
	 * @param fileName
	 * @throws Exception
	 */
	public static void write(byte[] data,String fileName) throws Exception{
		File file = new File(fileName);
		FileOutputStream outputStream = new FileOutputStream(file);
		outputStream.write(data);
		outputStream.close();
	}
	
	/**
	 * ����ļ��Ƿ����
	 * @param fileName
	 * @return
	 * @throws Exception
	 */
	public static boolean exist(String fileName) throws Exception{
		File file = new File(fileName);
		return file.exists();
	}
}
