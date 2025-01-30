namespace ProjetoOlaMundo
{
    partial class Form2
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
            voltarBtn = new Button();
            num1Txt = new TextBox();
            num2Txt = new TextBox();
            calculoBtn = new Button();
            operacaoLbl = new TextBox();
            resultadoLbl = new Label();
            num1Lbl = new Label();
            num2Lbl = new Label();
            operadorLbl = new Label();
            resultadooLbl = new Label();
            SuspendLayout();
            // 
            // voltarBtn
            // 
            voltarBtn.Location = new Point(519, 233);
            voltarBtn.Name = "voltarBtn";
            voltarBtn.Size = new Size(75, 23);
            voltarBtn.TabIndex = 1;
            voltarBtn.Text = "Voltar";
            voltarBtn.UseVisualStyleBackColor = true;
            voltarBtn.Click += button1_Click;
            // 
            // num1Txt
            // 
            num1Txt.Location = new Point(95, 126);
            num1Txt.Name = "num1Txt";
            num1Txt.Size = new Size(100, 23);
            num1Txt.TabIndex = 2;
            // 
            // num2Txt
            // 
            num2Txt.Location = new Point(268, 127);
            num2Txt.Name = "num2Txt";
            num2Txt.Size = new Size(100, 23);
            num2Txt.TabIndex = 3;
            // 
            // calculoBtn
            // 
            calculoBtn.Location = new Point(403, 127);
            calculoBtn.Name = "calculoBtn";
            calculoBtn.Size = new Size(75, 23);
            calculoBtn.TabIndex = 5;
            calculoBtn.Text = "Calculo";
            calculoBtn.UseVisualStyleBackColor = true;
            calculoBtn.Click += calculoBtn_Click;
            // 
            // operacaoLbl
            // 
            operacaoLbl.Location = new Point(216, 127);
            operacaoLbl.Name = "operacaoLbl";
            operacaoLbl.Size = new Size(31, 23);
            operacaoLbl.TabIndex = 6;
            // 
            // resultadoLbl
            // 
            resultadoLbl.AutoSize = true;
            resultadoLbl.Location = new Point(277, 191);
            resultadoLbl.Name = "resultadoLbl";
            resultadoLbl.Size = new Size(0, 15);
            resultadoLbl.TabIndex = 7;
            // 
            // num1Lbl
            // 
            num1Lbl.AutoSize = true;
            num1Lbl.Location = new Point(114, 107);
            num1Lbl.Name = "num1Lbl";
            num1Lbl.Size = new Size(60, 15);
            num1Lbl.TabIndex = 8;
            num1Lbl.Text = "Numero 1";
            // 
            // num2Lbl
            // 
            num2Lbl.AutoSize = true;
            num2Lbl.Location = new Point(286, 107);
            num2Lbl.Name = "num2Lbl";
            num2Lbl.Size = new Size(60, 15);
            num2Lbl.TabIndex = 9;
            num2Lbl.Text = "Numero 2";
            // 
            // operadorLbl
            // 
            operadorLbl.AutoSize = true;
            operadorLbl.Location = new Point(203, 109);
            operadorLbl.Name = "operadorLbl";
            operadorLbl.Size = new Size(57, 15);
            operadorLbl.TabIndex = 10;
            operadorLbl.Text = "Operador";
            // 
            // resultadooLbl
            // 
            resultadooLbl.AutoSize = true;
            resultadooLbl.Location = new Point(216, 170);
            resultadooLbl.Name = "resultadooLbl";
            resultadooLbl.Size = new Size(59, 15);
            resultadooLbl.TabIndex = 11;
            resultadooLbl.Text = "Resultado";
            // 
            // Form2
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(resultadooLbl);
            Controls.Add(operadorLbl);
            Controls.Add(num2Lbl);
            Controls.Add(num1Lbl);
            Controls.Add(resultadoLbl);
            Controls.Add(operacaoLbl);
            Controls.Add(calculoBtn);
            Controls.Add(num2Txt);
            Controls.Add(num1Txt);
            Controls.Add(voltarBtn);
            Name = "Form2";
            Text = "Inicial";
            Load += Form2_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private Button voltarBtn;
        private TextBox num1Txt;
        private TextBox num2Txt;
        private Button calculoBtn;
        private TextBox operacaoLbl;
        private Label resultadoLbl;
        private Label num1Lbl;
        private Label num2Lbl;
        private Label operadorLbl;
        private Label resultadooLbl;
    }
}