import React, { useState } from "react";

export const SellingPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const handlePlanChange = (value) => {
    setSelectedPlan(value);
  };

  return (
    <div id="subscription_widget">
      <p className="font-semibold uppercase">Purchase option:</p>
      <div className="flex flex-col w-full gap-4 mt-2 text-sm">
        <div className="border border-primary rounded-lg px-4 py-2 flex justify-between w-full">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="selling_plan"
              value=""
              checked={selectedPlan === ""}
              onChange={() => handlePlanChange("")}
            />
            <span>One-time purchase</span>
          </div>
          <div className="price-per-item">
            <span className="text-white/40 line-through"></span>
            <span className="price-per-item--current">$14.00</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 border border-primary rounded-lg px-4 py-2">
          <div className="flex justify-between w-full">
            <div className="flex items-center space-x-2">
              <input
                id="plan_subscription"
                type="radio"
                name="selling_plan"
                value="1292763275"
                checked={selectedPlan === "1292763275"}
                onChange={() => handlePlanChange("1292763275")}
              />
              <span>Subscription (10% OFF)</span>
            </div>
            <div className="flex gap-x-2 items-end">
              <span className="text-secondary line-through text-xs">
                $14.00
              </span>
              <span className="font-semibold">$12.60</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-col md:flex-row gap-4 text-xs">
            {["Save Money", "Modify and Skip Anytime", "Cancel Anytime"].map(
              (benefit, index) => (
                <div key={index} className="flex gap-x-1 items-center">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3.8907C0.0471017 3.68692 0.122195 3.49809 0.281534 3.35443C0.655925 3.01705 1.15843 3.04127 1.53282 3.41864C2.31121 4.2036 3.08826 4.98991 3.86503 5.7765C3.89491 5.80697 3.91698 5.84533 3.95708 5.89948C4.00338 5.84071 4.02679 5.80371 4.05694 5.77323C5.85945 3.95002 7.66305 2.12789 9.46529 0.304404C9.73444 0.0323228 10.0453 -0.0688914 10.4149 0.0478314C10.9647 0.221419 11.1849 0.956582 10.8229 1.40987C10.7804 1.4632 10.7354 1.51544 10.6875 1.56387C8.66968 3.60475 6.65103 5.64454 4.63373 7.68569C4.36243 7.96022 4.04779 8.07803 3.67797 7.94526C3.54474 7.89737 3.41447 7.80867 3.31327 7.70746C2.30072 6.69341 1.29516 5.67229 0.286109 4.65444C0.133769 4.50098 0.0454868 4.31678 0 4.10782C0 4.03545 0 3.96308 0 3.8907Z"
                      fill="#126F86"
                    />
                  </svg>
                  <span>{benefit}</span>
                </div>
              )
            )}
          </div>

          {/* Frequency Selector */}
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-xs">
            <span>Select Frequency</span>
            <div className="border border-primary rounded-lg px-2 w-fit py-1">
              <select
                className="outline-none"
                name="plan_frequency"
                value={selectedPlan}
                onChange={(e) => handlePlanChange(e.target.value)}
              >
                <option value="1292763275">Every 2 weeks</option>
                <option value="1292763276">Every month</option>
                <option value="1292763277">Every 2 months</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
