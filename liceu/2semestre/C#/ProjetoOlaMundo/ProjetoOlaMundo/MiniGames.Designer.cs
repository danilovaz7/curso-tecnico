namespace ProjetoOlaMundo
{
    partial class MiniGames
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
            tituloTxt = new Label();
            calcBtn = new Button();
            imcBtn = new Button();
            maiorMenorBtn = new Button();
            voltarBtn = new Button();
            SuspendLayout();
            // 
            // tituloTxt
            // 
            tituloTxt.AutoSize = true;
            tituloTxt.Location = new Point(292, 64);
            tituloTxt.Name = "tituloTxt";
            tituloTxt.Size = new Size(195, 15);
            tituloTxt.TabIndex = 0;
            tituloTxt.Text = "ESCOLHA SUA ATIVIDADE MALUCA";
            // 
            // calcBtn
            // 
            calcBtn.Location = new Point(249, 164);
            calcBtn.Name = "calcBtn";
            calcBtn.Size = new Size(62, 31);
            calcBtn.TabIndex = 1;
            calcBtn.Text = "Calculos";
            calcBtn.UseVisualStyleBackColor = true;
            calcBtn.Click += calcBtn_Click;
            // 
            // imcBtn
            // 
            imcBtn.Location = new Point(352, 164);
            imcBtn.Name = "imcBtn";
            imcBtn.Size = new Size(61, 31);
            imcBtn.TabIndex = 2;
            imcBtn.Text = "IMC";
            imcBtn.UseVisualStyleBackColor = true;
            // 
            // maiorMenorBtn
            // 
            maiorMenorBtn.Location = new Point(456, 165);
            maiorMenorBtn.Name = "maiorMenorBtn";
            maiorMenorBtn.Size = new Size(106, 30);
            maiorMenorBtn.TabIndex = 3;
            maiorMenorBtn.Text = "Maior ou Menor";
            maiorMenorBtn.UseVisualStyleBackColor = true;
            // 
            // voltarBtn
            // 
            voltarBtn.Location = new Point(612, 242);
            voltarBtn.Name = "voltarBtn";
            voltarBtn.Size = new Size(75, 23);
            voltarBtn.TabIndex = 4;
            voltarBtn.Text = "Voltar";
            voltarBtn.UseVisualStyleBackColor = true;
            voltarBtn.Click += voltarBtn_Click;
            // 
            // MiniGames
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(voltarBtn);
            Controls.Add(maiorMenorBtn);
            Controls.Add(imcBtn);
            Controls.Add(calcBtn);
            Controls.Add(tituloTxt);
            Name = "MiniGames";
            Text = "MiniGames";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label tituloTxt;
        private Button calcBtn;
        private Button imcBtn;
        private Button maiorMenorBtn;
        private Button voltarBtn;
    }
}