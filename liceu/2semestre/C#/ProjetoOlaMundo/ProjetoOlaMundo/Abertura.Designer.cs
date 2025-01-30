namespace ProjetoOlaMundo
{
    partial class Abertura
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            linkEntrar = new LinkLabel();
            liceuTxt = new Label();
            SuspendLayout();
            // 
            // linkEntrar
            // 
            linkEntrar.AutoSize = true;
            linkEntrar.LinkColor = Color.White;
            linkEntrar.Location = new Point(427, 153);
            linkEntrar.Name = "linkEntrar";
            linkEntrar.Size = new Size(38, 15);
            linkEntrar.TabIndex = 0;
            linkEntrar.TabStop = true;
            linkEntrar.Text = "Entrar";
            linkEntrar.LinkClicked += linkEntrar_LinkClicked;
            // 
            // liceuTxt
            // 
            liceuTxt.AutoSize = true;
            liceuTxt.ForeColor = Color.White;
            liceuTxt.Location = new Point(401, 75);
            liceuTxt.Name = "liceuTxt";
            liceuTxt.Size = new Size(92, 15);
            liceuTxt.TabIndex = 1;
            liceuTxt.Text = "LICEU SANTISTA";
            // 
            // Abertura
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.Red;
            ClientSize = new Size(1059, 450);
            Controls.Add(liceuTxt);
            Controls.Add(linkEntrar);
            Name = "Abertura";
            Text = "Abertura";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private LinkLabel linkEntrar;
        private Label liceuTxt;
    }
}