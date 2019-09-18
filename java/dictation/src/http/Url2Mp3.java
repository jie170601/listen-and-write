package http;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * ��tts api��url����Ϊmp3�ļ�
 * @author jie
 *
 */
public class Url2Mp3 {
	
	//���������ʱ��Ƶ�ļ����ļ���
	private static String tempPath = "./tmp/";
	
	/**
	 * ����������Ƶ�ļ�����ʱ�ļ���
	 * @param urls
	 * @throws Exception
	 */
	public static void download(String[] urls) throws Exception {
		for(int i=0;i<urls.length;i++) {
			download(urls[i],i+".mp3");
		}
	}
	
	/**
	 * ����url·��������Ƶ�ļ�
	 * @param urlStr
	 * @param fileName
	 * @throws Exception
	 */
	private static void download(String urlStr,String fileName) throws Exception{
		URL url = new URL(urlStr);
        HttpURLConnection conn = (HttpURLConnection)url.openConnection();
        //���ó�ʱ��Ϊ3��
        conn.setConnectTimeout(3*1000);
        //��ֹ���γ���ץȡ������403����
        conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

        //�õ�������
        InputStream inputStream = conn.getInputStream();
        //��ȡ�Լ�����
        byte[] getData = readInputStream(inputStream);

        //�ļ�����λ��
        File saveDir = new File(tempPath);
        if(!saveDir.exists()){
            saveDir.mkdir();
        }
        File file = new File(saveDir+File.separator+fileName);
        FileOutputStream fos = new FileOutputStream(file);
        fos.write(getData);
        if(fos!=null){
            fos.close();
        }
        if(inputStream!=null){
            inputStream.close();
        }
	}
	
	/**
	 * ����������ȡ���ݵ�byte����
	 * @param inputStream
	 * @return
	 * @throws IOException
	 */
	private static byte[] readInputStream(InputStream inputStream) throws IOException {
		byte[] buffer = new byte[1024];
		int len = 0;
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		while ((len = inputStream.read(buffer)) != -1) {
			bos.write(buffer, 0, len);
		}
		bos.close();
		return bos.toByteArray();
	}
}
