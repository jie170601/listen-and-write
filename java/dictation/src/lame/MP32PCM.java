package lame;

import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * ʹ��lame��mp3�ļ������pcm�ļ�
 * �����������
 * @author jie
 *
 */
public class MP32PCM {
	
	/**
	 * ��mp3�ļ�����Ϊpcm�ļ�
	 * @param files
	 * @throws Exception
	 */
	public static void toPCM(String[] files)throws Exception{
		String cmd = "./lib/lame.exe --decode -t ";
		for(int i=0;i<files.length;i++) {
			String file = files[i];
			StringBuilder builder = new StringBuilder(cmd);
			builder.append("./tmp/");
			builder.append(file);
			builder.append(" ./tmp/");
			builder.append(file);
			builder.append(".pcm");
			String cmdCode = builder.toString();
			exeCmd(cmdCode);
		}
	}
	
	/**
	 * ִ��cmd����
	 * @param cmdCode
	 */
	private static void exeCmd(String cmdCode) {
		BufferedReader br = null;
		try {
			Process p = Runtime.getRuntime().exec(cmdCode);
			br = new BufferedReader(new InputStreamReader(p.getInputStream(), "GBK"));
			String line;
			StringBuilder sb = new StringBuilder();
			while ((line = br.readLine()) != null) {
				sb.append(line);
				sb.append("\n");
			}
			System.out.println(sb.toString());
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}
}
