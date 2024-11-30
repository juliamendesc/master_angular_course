import { Component, input, InputSignal, signal, WritableSignal  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  public enteredInitialInvestment: WritableSignal<number> = signal<number>(0)
  public enteredAnnualInvestment: WritableSignal<number> = signal<number>(0)
  public enteredExpectedReturn: WritableSignal<number> = signal<number>(5)
  public enteredDuration:WritableSignal<number> = signal<number>(10)

  constructor(private investmentService: InvestmentService) {}

  onSubmit():void {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    })

    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
}
