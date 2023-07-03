Algoritmo FondoSolidarioPension
	//Declarar Entradas
	Definir SalarioMinimo, SalarioPersona, FSP Como Real
	Escribir "Ingrese sus ingresos";
	Leer SalarioPersona;
	Escribir "Ingrese salario minimo";
	Leer SalarioMinimo;
	
	//Proceso 
	Si SalarioPersona > SalarioMinimo * 20 Entonces
		FSP = SalarioPersona * 0.02;
		Escribir FSP;
	SiNo
		Si SalarioPersona > SalarioMinimo * 19 Entonces
			FSP = SalarioPersona * 0.018;
			Escribir FSP;
			SiNo
				Si SalarioPersona > SalarioMinimo * 18 Entonces
					FSP = SalarioPersona * 0.016;
					Escribir FSP;
			SiNo
				Si SalarioPersona > SalarioMinimo * 17 Entonces
					FSP = SalarioPersona * 0.014;
					Escribir FSP;
				SiNo
					Si SalarioPersona > SalarioMinimo * 16 Entonces
						FSP = SalarioPersona * 0.012;
						Escribir FSP;
					SiNo
						Si SalarioPersona > SalarioMinimo * 4 Entonces
							FSP = SalarioPersona * 0.01;
							Escribir FSP;
						SiNo
							Escribir "No es obligatorio aportar al fondo Solidario de Pensiones";
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
