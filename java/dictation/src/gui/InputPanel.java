package gui;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Insets;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

/**
 * ������������
 * �����������ڵ��ұ�
 * ������ʾ�����ʹ�÷���
 * �����뵥���ַ���
 * @author jie
 *
 */
public class InputPanel extends JPanel{
	
	/**
	 * ʹ�ñ߽粼�֣������ǹ̶��߶ȵĲ�����ʾ��
	 * �����ǿɱ�߶ȵĵ��������
	 * ��ȶ��ǿɱ��
	 */
	public InputPanel() {
		super(new BorderLayout());
		add(createMsgPanel(),BorderLayout.NORTH);
		add(createWordsPanel());
	}
	
	/**
	 * ����ʹ��˵�����
	 * ʹ��˵�����ʹ�����񲼾�
	 * ÿ������ռ��һ��
	 * @return
	 */
	private JPanel createMsgPanel() {
		JPanel panel = new JPanel(new GridLayout(3, 1));
		panel.setPreferredSize(new Dimension(0,130));
		panel.add(createLine("1.����֮����Ӣ�����뷨����ǣ����š�,������"));
		panel.add(createLine("2.�����ĵ����ɿ�����Excel����Ϊcsv��ʽ"));
		panel.add(createLine("3.ֽ�ʵ��ʱ���������ͨ��OCR��������ĵ�"));
		return panel;
	}
	
	/**
	 * ���ɵ����������
	 * ����������߶��ɱ�����Ӧ��Ļ
	 * �������У����������հ�
	 * ����Ҳ�ñ߽粼��
	 * @return
	 */
	private JPanel createWordsPanel() {
		JPanel panel = new JPanel(new BorderLayout());
		panel.add(createArea());
		return panel;
	}
	
	/**
	 * ����һ��˵������
	 * @param text
	 * @return
	 */
	private JLabel createLine(String text) {
		JLabel label = new JLabel(text);
		Font font = label.getFont();
		label.setFont(label.getFont().deriveFont(18f).deriveFont(Font.PLAIN));
		return label;
	}
	
	/**
	 * ���ɿɹ������ı���
	 * @return
	 */
	private JScrollPane createArea() {
		JTextArea area = new JTextArea();
		area.setLineWrap(true);
		area.setWrapStyleWord(true);
		area.setFont(area.getFont().deriveFont(18f));
		area.setMargin(new Insets(10, 10, 10, 10));
		return new JScrollPane(area);
	}
}
