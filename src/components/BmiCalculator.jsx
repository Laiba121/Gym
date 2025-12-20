import React, { useState } from "react";

const BMICalculator = () => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const feetNum = Number(feet);
    const inchesNum = Number(inches || 0);
    const weightNum = Number(weight);
    const ageNum = Number(age);

    if (!feetNum || !weightNum || !ageNum) {
      alert("Please enter height, weight, and age");
      return;
    }

    if (ageNum <= 0) {
      alert("Please enter a valid age");
      return;
    }

    const totalInches = feetNum * 12 + inchesNum;
    const heightInMeters = totalInches * 0.0254;

    const bmiValue =
      weightNum / (heightInMeters * heightInMeters);

    const roundedBMI = Number(bmiValue.toFixed(1));

    setBmi(roundedBMI);
    setCategory(getBMICategory(roundedBMI));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal Weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <section className="relative w-full py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-95" />
      <div className="absolute top-0 right-0 w-[260px] h-6 bg-[#A58120]" />

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        {/* HEADING */}
        <div className="text-center mb-20">
          <img
            src="/images/featuredec1.png"
            alt="decorative"
            className="w-17 mx-auto mb-6"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-[Platia] font-extrabold tracking-[0.1em] uppercase">
            Calculate Your <br /> BMI Now!!
          </h2>
        </div>

        {/* FORM ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <Input label="Height / Feet" value={feet} onChange={setFeet} />
          <Input label="Height / Inches" value={inches} onChange={setInches} />
          <Input label="Weight / kg" value={weight} onChange={setWeight} />
          <Input label="Age" value={age} onChange={setAge} />
        </div>

        {/* FORM ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
          <Select
            label="Gender"
            value={gender}
            onChange={setGender}
            options={["Male", "Female"]}
          />

          <Select
            label="Activity Factor"
            value={activity}
            onChange={setActivity}
            options={["Low", "Moderate", "High"]}
          />

   

{/* Calculate BMI button with animated bg like Subscribe */}
<button
  onClick={calculateBMI}
  className="relative h-[58px] w-[200px] overflow-hidden font-extrabold uppercase tracking-widest bg-[#A58120] text-black group"
>
  {/* animated background */}
  <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 group-hover:translate-y-0" />

  {/* button text */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#A58120]">
    Calculate BMI
  </span>
</button>

        </div>

        {/* RESULT */}
        {bmi !== null && (
          <div className="mt-16 text-center">
            <p className="text-xl tracking-widest uppercase text-[#A58120]">
              Your BMI
            </p>
            <p className="text-6xl font-extrabold my-4">{bmi}</p>
            <p className="text-lg text-white/70">{category}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;

/* ---------- INPUT COMPONENT ---------- */
const Input = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm tracking-widest uppercase text-[#A58120] mb-3">
      {label}
    </label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
      className="w-full h-[58px] bg-transparent border border-white/10 px-5 text-white placeholder-white/50 focus:outline-none focus:border-[#A58120]"
    />
  </div>
);

/* ---------- SELECT COMPONENT ---------- */
const Select = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm tracking-widest uppercase text-[#A58120] mb-3">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-[58px] bg-transparent border border-white/10 px-5 text-white focus:outline-none focus:border-[#A58120]"
    >
      <option value="" className="bg-black">
        Select
      </option>
      {options.map((opt, i) => (
        <option key={i} value={opt} className="bg-black">
          {opt}
        </option>
      ))}
    </select>
  </div>
);
