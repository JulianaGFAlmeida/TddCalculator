class Calculator{
	num1 = 0;
	num2 = 0;

	setNum1(value){
		this.num1 = value;
	}

	setNum2(value){
		this.num2 = value;
	}

	add(){
		return this.num1+this.num2;
	}

	subtract(){
		return this.num1-this.num2;
	}

	multiply(){
		return this.num1*this.num2;
	}
	divide(){
		return this.num1/this.num2;
	}


}

describe('Basic calculator', () =>{
	let calculator;
	beforeEach(()=>{
		calculator  = new Calculator();
	})
	it('has two variables with the value 0 as initial state', () =>{
		expect(calculator.num1).toBe(0);
		expect(calculator.num2).toBe(0);
	});

	
	it('num1 value can be changed',()=>{
		calculator.setNum1(10);
		expect(calculator.num1).toBe(10);
	});

	it('num2 value can be changed',()=>{
		calculator.setNum2(20);
		expect(calculator.num2).toBe(20);
	});

	it('num1 and num2 can be added', () =>{
		calculator.setNum1(10);
		calculator.setNum2(20);
		let result = calculator.add();
		expect(result).toBe(30);
	});

	it('num1 and num2 can be subtracted', () =>{
		calculator.setNum1(10);
		calculator.setNum2(20);
		let result = calculator.subtract();
		expect(result).toBe(-10);
	});

	it('num1 and num2 can be multiplied together', () =>{
		calculator.setNum1(2);
		calculator.setNum2(8);
		let result = calculator.multiply();
		expect(result).toBe(16);
	})

	it('num1 and num2 can be divided together', ()=>{
		calculator.setNum1(1024);
		calculator.setNum2(16);
		let result = calculator.divide();
		expect(result).toBe(64);
	})

})