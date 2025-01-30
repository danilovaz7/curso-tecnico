namespace ProjetoOlaMundo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtbSenha.Text = "";
            txtbUsuario.Text = "";
        }

        private void btnEntrar_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtbUsuario.Text) || string.IsNullOrEmpty(txtbSenha.Text))
            {
                MessageBox.Show("O campo não pode estar vazio.");
            }
            else
            {
                if (txtbUsuario.Text != "dandangatinho" || txtbSenha.Text != "1234")
                {
                   
					const string mensagem = "usuario e/ou senha incorretos";
                    const string caption = "erro";
					var result = MessageBox.Show(mensagem, caption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
				}
                else
                {
                    const string mensagem = "Acesso concedido";
                    const string caption = "bem venido";

                    var result = MessageBox.Show(mensagem, caption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    MiniGames jogos = new MiniGames();
                    jogos.Show();
                }
            }


        }

        private void sairBtn_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
