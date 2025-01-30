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
    public partial class Abertura : Form
    {
        public Abertura()
        {
            InitializeComponent();
        }

        private void linkEntrar_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Form1 login = new Form1();
            login.ShowDialog();
        }

        
    }
}
