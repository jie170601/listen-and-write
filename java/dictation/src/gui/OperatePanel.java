package gui;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFileChooser;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSlider;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import javax.swing.filechooser.FileNameExtensionFilter;

/**
 * ������ť���
 * �������������ұ�
 * �߶ȿɱ䣬��ȹ̶�
 * @author jie
 *
 */
public class OperatePanel extends JPanel{
	
	private LabelComponent loop;
	private LabelComponent interval;
	private LabelComponent pause;
	
	public OperatePanel() {
		super(new BorderLayout());
		this.setPreferredSize(new Dimension(300,0));
		loop = new LabelComponent();
		interval = new LabelComponent();
		pause = new LabelComponent();
		loop.setValue(1);
		interval.setValue(1);
		pause.setValue(1);
		update();
		add(createParam(),BorderLayout.NORTH);
		add(createConfirm(),BorderLayout.SOUTH);
	}
	
	/**
	 * ���ɲ����������
	 * @return
	 */
	private JPanel createParam() {
		JPanel panel = new JPanel(new GridLayout(8,1));
		
		JSlider loopSlider = new JSlider(1,10,1);
		JSlider intervalSlider = new JSlider(1,10,1);
		JSlider pauseSlider = new JSlider(1,10,1);
		
		loopSlider.addChangeListener(new SliderChangeListener(loop,loopSlider,this));
		intervalSlider.addChangeListener(new SliderChangeListener(interval,intervalSlider,this));
		pauseSlider.addChangeListener(new SliderChangeListener(pause,pauseSlider,this));
		
		panel.setPreferredSize(new Dimension(0,250));
		panel.add(loop.getLabel());
		panel.add(loopSlider);
		panel.add(interval.getLabel());
		panel.add(intervalSlider);
		panel.add(pause.getLabel());
		panel.add(pauseSlider);
		panel.add(createCheckBox("�������"));
		panel.add(createCheckBox("��ʽ����"));
		return panel;
	}
	
	/**
	 * ����ȷ�ϰ�ť
	 * @return
	 */
	private JPanel createConfirm() {
		JPanel panel = new JPanel(new BorderLayout());
		JButton button = new JButton("������Ƶ");
		panel.setPreferredSize(new Dimension(0,55));
		button.setFont(button.getFont().deriveFont(18f));
		button.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent arg0) {
				JFileChooser chooser = new JFileChooser(new File("./"));
				FileNameExtensionFilter filter = new FileNameExtensionFilter("MPEG-2 Layout 3 file","mp3");
				chooser.setFileFilter(filter);
				chooser.showSaveDialog(new JLabel());
			}
		});
		panel.add(button);
		return panel;
	}
	
	/**
	 * ���ɾ����ض���ʽ�ı�ǩ
	 * @param text
	 * @return
	 */
	private JLabel createJLabel() {
		JLabel label = new JLabel();
		label.setFont(label.getFont().deriveFont(18f));
		return label;
	}
	
	/**
	 * ���ɾ����ض���ʽ�ı�ǩ
	 * @param text
	 * @return
	 */
	private JLabel createJLabel(String text) {
		JLabel label = new JLabel(text);
		label.setFont(label.getFont().deriveFont(20f));
		return label;
	}
	
	private JCheckBox createCheckBox(String text) {
		JCheckBox checkBox = new JCheckBox(text);
		checkBox.setFont(checkBox.getFont().deriveFont(20f).deriveFont(Font.PLAIN));
		return checkBox;
	}
	
	public void update() {
		loop.setText("�ظ� "+loop.getValue()+"���Σ���");
		pause.setText("��� "+pause.getValue()+"���룩��");
		interval.setText("ͣ�� "+interval.getValue()+"���룩��");
	}
}

/**
 * ���õ�label
 * ��ֵ��JLabel�������
 * ����ֱ����JLabel�������ַ�������ֵ֮������ת������
 * @author jie
 *
 */
class LabelComponent{
	private int value = 0;
	private JLabel label = new JLabel();
	
	public LabelComponent() {
		label.setFont(label.getFont().deriveFont(20f).deriveFont(Font.PLAIN));
	}
	public void setText(String text) {
		label.setText(text);
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public JLabel getLabel() {
		return label;
	}
}

/**
 * �������ı��¼�����
 * @author jie
 *
 */
class SliderChangeListener implements ChangeListener{
	
	private LabelComponent label;
	private JSlider slider;
	private OperatePanel panel;
	
	public SliderChangeListener(LabelComponent label,JSlider slider,OperatePanel panel) {
		this.label = label;
		this.slider = slider;
		this.panel = panel;
	}

	@Override
	public void stateChanged(ChangeEvent e) {
		label.setValue(slider.getValue());
		panel.update();
	}
}
