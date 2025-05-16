export type Category = 'food' | 'clothing' | 'housing' | 'transportation' | 'education' | 'entertainment' | 'savings';

export interface Budget {
  category: Category;
  percentage: number;
  amount: number;
  remaining: number;
}

export interface Expense {
  id: string;
  category: Category;
  amount: number;
  date: string;
  description: string;
}

export interface UserSettings {
  monthlyIncome: number;
  budgets: Budget[];
}

export interface MonthlySummary {
  totalIncome: number;
  totalExpenses: number;
  categoryExpenses: Record<Category, number>;
  remainingAmount: number;
} 