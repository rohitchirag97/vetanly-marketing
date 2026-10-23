// Run with: node lib/payroll-rules.test.ts
import assert from "node:assert/strict";

import { annualTax, esi, gratuity, inHandSalary, pf, professionalTax } from "./payroll-rules.ts";

// Gratuity: ₹30,000 basic, 6 years 7 months counts as 7 years.
assert.deepEqual(gratuity(30_000, 6, 7), { eligible: true, countedYears: 7, amount: 121_154, capped: false });
assert.equal(gratuity(30_000, 4, 7).eligible, false);
assert.equal(gratuity(30_000, 4, 8).eligible, true);
assert.equal(gratuity(1_000_000, 40, 0).amount, 2_000_000);

// PF on ₹25,000 basic, capped at ₹15,000.
assert.deepEqual(pf(25_000), { wages: 15_000, employee: 1_800, eps: 1_250, epf: 550, admin: 75, edli: 75, employerCost: 1_950 });
assert.equal(pf(25_000, false).employee, 3_000);

// ESI: within and above the ceiling.
assert.deepEqual(esi(20_000), { employee: 150, employer: 650 });
assert.deepEqual(esi(21_001), { employee: 0, employer: 0 });

// PT: Maharashtra ₹200 a month, ₹300 in February.
assert.deepEqual(professionalTax(30_000, "MH"), { monthly: 200, february: 300, yearly: 2_500 });
assert.equal(professionalTax(20_000, "KA").monthly, 0);

// Tax: new regime is nil up to ₹12 lakh taxable, with marginal relief just above it.
assert.equal(annualTax(1_275_000, "new").tax, 0);
assert.equal(annualTax(1_285_000, "new").tax, 10_400);
assert.equal(annualTax(1_675_000, "new").tax, 124_800);

// In-hand pay adds up.
const pay = inHandSalary({ annualCtc: 600_000, basicPercent: 50, regime: "new", state: "MH", pfOn: true });
assert.equal(pay.inHand, pay.gross - pay.employeePf - pay.esiEmployee - pay.professionalTax - pay.tds);
assert.equal(pay.tds, 0);

console.log("payroll-rules: all checks passed");
