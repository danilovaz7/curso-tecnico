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
    public partial class MiniGames : Form
    {
        public MiniGames()
        {
            InitializeComponent();
        }

        private void calcBtn_Click(object sender, EventArgs e)
        {
            Form2 form2 = new Form2();
            form2.Show();

        }

        private void voltarBtn_Click(object sender, EventArgs e)
        {
			this.Close();
		}
    }
}
