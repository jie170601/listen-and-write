package util;

import bean.Param;

/**
 * ϵͳ���ò�����д������
 * @author jie
 *
 */
public class Config {
	
	//�����ļ���������Ŀ��Ŀ¼��
	//�õĶ������ļ�����
	//�����ļ�û�мӺ�׺
	private final static String configFile = "./.config";
	
	/**
	 * �������ļ��ж�ȡ����
	 * @throws Exception
	 */
	public static void saveParam(Param param) throws Exception{
		//�������ļ�д����
		byte[] data = param2bytes(param);
		FileUtil.write(data, configFile);
	}
	
	/**
	 * �������ĸĶ����浽�����ļ���
	 * @return
	 * @throws Exception
	 */
	public static Param findParam() throws Exception{
		Param param = new Param();
		//��������ļ��Ƿ����
		if(!FileUtil.exist(configFile)) {
			//��������ļ������ڣ��򴴽������ļ�����Ĭ��ֵ
			saveParam(param);
			//����Ĭ������ֵ
			return param;
		}
		//��������ļ����ڣ����������ļ�������Ϣ
		byte[] data = FileUtil.read(configFile);
		return bytes2param(data);
	}
	
	/**
	 * ����ת�ֽ�����
	 * @param param
	 * @return
	 * @throws Exception
	 */
	private static byte[] param2bytes(Param param) throws Exception{
		byte[] data = new byte[5];
		//ѭ��������ȡֵ��1~10����һ���ֽڿ��Ա���
		data[0] = param.getLoop();
		//ѭ�����ȡֵ0~10����һ���ֽڱ���
		data[1] = param.getPause();
		//���ʼ��ȡֵ0~10����һ���ֽڱ���
		data[2] = param.getInterval();
		//������ź���ʽ����������һ��bit����
		//����Ϊ�˶�ȡ���㣬������һ���ֽڱ���
		data[3] = (byte) (param.isRandom()?1:0);
		data[4] = (byte) (param.isAmerican()?1:0);
		return data;
	}
	
	/**
	 * ���ֽ�����ת����Param����
	 * @param data
	 * @return
	 * @throws Exception
	 */
	private static Param bytes2param(byte[] data) throws Exception{
		Param param = new Param();
		param.setLoop(data[0]);
		param.setPause(data[1]);
		param.setInterval(data[2]);
		param.setRandom(data[3]==1?true:false);
		param.setAmerican(data[4]==1?true:false);
		return param;
	}
}
