 // Function to calculate ROI
 function calculateROI() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const annualReturns = parseFloat(document.getElementById('annualReturns').value);
    const investmentDuration = parseFloat(document.getElementById('investmentDuration').value);
    
    // Calculate net profit
    const totalReturns = initialInvestment + (annualReturns * investmentDuration);
    const netProfit = totalReturns - initialInvestment;
  
    // Calculate ROI
    const roi = ((netProfit / initialInvestment) * 100).toFixed(2);
  
    // Display result
    document.getElementById('roiResult').innerHTML = `<p>Net Profit: ${netProfit.toFixed(2)}</p><p>ROI: ${roi}%</p>`;
  }
  
  
      // Function to assess investment risk
  function assessInvestmentRisk() {
    const riskTolerance = document.getElementById('riskTolerance').value;
  
    // Define risk values based on risk tolerance level
    let marketRisk, operationalRisk, regulatoryRisk, economicRisk;
  
    switch (riskTolerance) {
      case "low":
        marketRisk = 0.08; // Example: 8%
        operationalRisk = 0.06; // Example: 6%
        regulatoryRisk = 0.04; // Example: 4%
        economicRisk = 0.1; // Example: 10%
        break;
      case "medium":
        marketRisk = 0.15; // Example: 15%
        operationalRisk = 0.1; // Example: 10%
        regulatoryRisk = 0.08; // Example: 8%
        economicRisk = 0.12; // Example: 12%
        break;
      case "high":
        marketRisk = 0.2; // Example: 20%
        operationalRisk = 0.15; // Example: 15%
        regulatoryRisk = 0.12; // Example: 12%
        economicRisk = 0.18; // Example: 18%
        break;
      default:
        // Default risk values for unknown risk tolerance
        marketRisk = 0.1; // Example: 10%
        operationalRisk = 0.08; // Example: 8%
        regulatoryRisk = 0.06; // Example: 6%
        economicRisk = 0.15; // Example: 15%
    }
  
    // Perform quantitative analysis (e.g., sensitivity analysis, Monte Carlo simulations)
    // Calculate overall risk score
    const overallRiskScore = (marketRisk + operationalRisk + regulatoryRisk + economicRisk) / 4;
  
    let riskCategory;
    if (overallRiskScore < 0.1) {
      riskCategory = "Low Risk";
    } else if (overallRiskScore < 0.2) {
      riskCategory = "Moderate Risk";
    } else {
      riskCategory = "High Risk";
    }
  
    // Display risk assessment result
    document.getElementById('riskAssessmentResult').innerHTML = `
      <p>Risk Category: ${riskCategory}</p>
      <p>Market Risk: ${marketRisk}</p>
      <p>Operational Risk: ${operationalRisk}</p>
      <p>Regulatory Risk: ${regulatoryRisk}</p>
      <p>Economic Risk: ${economicRisk}</p>
    `;
  }
  