namespace ProjetoOlaMundo
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            lblTitulo = new Label();
            lblUsuário = new Label();
            lblSenha = new Label();
            txtbUsuario = new TextBox();
            txtbSenha = new TextBox();
            btnEntrar = new Button();
            btnLimpar = new Button();
            sairBtn = new Button();
            SuspendLayout();
            // 
            // lblTitulo
            // 
            lblTitulo.AutoSize = true;
            lblTitulo.Location = new Point(177, 36);
            lblTitulo.Name = "lblTitulo";
            lblTitulo.Size = new Size(80, 15);
            lblTitulo.TabIndex = 0;
            lblTitulo.Text = "Titulo maluco";
            // 
            // lblUsuário
            // 
            lblUsuário.AutoSize = true;
            lblUsuário.Location = new Point(81, 88);
            lblUsuário.Name = "lblUsuário";
            lblUsuário.Size = new Size(47, 15);
            lblUsuário.TabIndex = 1;
            lblUsuário.Text = "Usuário";
            // 
            // lblSenha
            // 
            lblSenha.AutoSize = true;
            lblSenha.Location = new Point(81, 134);
            lblSenha.Name = "lblSenha";
            lblSenha.Size = new Size(39, 15);
            lblSenha.TabIndex = 2;
            lblSenha.Text = "Senha";
            // 
            // txtbUsuario
            // 
            txtbUsuario.Location = new Point(164, 85);
            txtbUsuario.Name = "txtbUsuario";
            txtbUsuario.PlaceholderText = "Insira seu usuário";
            txtbUsuario.Size = new Size(140, 23);
            txtbUsuario.TabIndex = 3;
            // 
            // txtbSenha
            // 
            txtbSenha.Location = new Point(164, 131);
            txtbSenha.Name = "txtbSenha";
            txtbSenha.PasswordChar = '*';
            txtbSenha.PlaceholderText = "Insira sua senha";
            txtbSenha.Size = new Size(140, 23);
            txtbSenha.TabIndex = 4;
            // 
            // btnEntrar
            // 
            btnEntrar.Location = new Point(164, 181);
            btnEntrar.Name = "btnEntrar";
            btnEntrar.Size = new Size(75, 23);
            btnEntrar.TabIndex = 5;
            btnEntrar.Text = "Entrar";
            btnEntrar.UseVisualStyleBackColor = true;
            btnEntrar.Click += btnEntrar_Click;
            // 
            // btnLimpar
            // 
            btnLimpar.Location = new Point(245, 181);
            btnLimpar.Name = "btnLimpar";
            btnLimpar.Size = new Size(59, 23);
            btnLimpar.TabIndex = 6;
            btnLimpar.Text = "Limpar";
            btnLimpar.UseVisualStyleBackColor = true;
            btnLimpar.Click += btnLimpar_Click;
            // 
            // sairBtn
            // 
            sairBtn.Location = new Point(544, 260);
            sairBtn.Name = "sairBtn";
            sairBtn.Size = new Size(75, 23);
            sairBtn.TabIndex = 7;
            sairBtn.Text = "Sair";
            sairBtn.UseVisualStyleBackColor = true;
            sairBtn.Click += sairBtn_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(sairBtn);
            Controls.Add(btnLimpar);
            Controls.Add(btnEntrar);
            Controls.Add(txtbSenha);
            Controls.Add(txtbUsuario);
            Controls.Add(lblSenha);
            Controls.Add(lblUsuário);
            Controls.Add(lblTitulo);
            Name = "Form1";
            Text = "Menu Principal";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lblTitulo;
        private Label lblUsuário;
        private Label lblSenha;
        private TextBox txtbUsuario;
        private TextBox txtbSenha;
        private Button btnEntrar;
        private Button btnLimpar;
        private Button sairBtn;
    }
}
