package bean;

/**
 * ϵͳ����ʵ����
 * @author jie
 *
 */
public class Param {
	
	//ѭ������
	private byte loop = 1;
	//ѭ����ͣ��ʱ�䣬��λ��s
	private byte pause = 3;
	//���ʼ�ͣ��ʱ�䣬��λ��s
	private byte interval = 5;
	//�Ƿ����򲥷�
	private boolean random;
	//�Ƿ���ʽ����
	private boolean american;
	
	public byte getLoop() {
		return loop;
	}
	public void setLoop(byte loop) {
		this.loop = loop;
	}
	public byte getPause() {
		return pause;
	}
	public void setPause(byte pause) {
		this.pause = pause;
	}
	public byte getInterval() {
		return interval;
	}
	public void setInterval(byte interval) {
		this.interval = interval;
	}
	public boolean isRandom() {
		return random;
	}
	public void setRandom(boolean random) {
		this.random = random;
	}
	public boolean isAmerican() {
		return american;
	}
	public void setAmerican(boolean american) {
		this.american = american;
	}
}
