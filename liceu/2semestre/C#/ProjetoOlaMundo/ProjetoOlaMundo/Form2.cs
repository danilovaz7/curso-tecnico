using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ProjetoOlaMundo
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void Form2_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void calculoBtn_Click(object sender, EventArgs e)
        {
            int num1 = int.Parse(num1Txt.Text);
            int num2 = int.Parse(num2Txt.Text);

            switch (operacaoLbl.Text)
            {
                case "x":
                    resultadooLbl.Text = (num1 * num2).ToString();
                    break;
                case "+":
                    resultadooLbl.Text = (num1 + num2).ToString();
                    break;
                case "-":
                    resultadooLbl.Text = (num1 - num2).ToString();
                    break;
                case "/":
                    if (num2 == 0)
                    {
                        MessageBox.Show("O segundo número não pode ser 0");
                    }
                    else
                    {
                        resultadooLbl.Text = (num1 / num2).ToString();
                    }
                    break;
            }
        }

       
    }
}
