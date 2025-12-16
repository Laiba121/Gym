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
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2a120c] to-black opacity-95" />
      <div className="absolute top-0 right-0 w-[260px] h-6 bg-[#ff4d2d]" />

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        {/* HEADING */}
        <div className="text-center mb-20">
          <img
            src="/images/featuredec.png"
            alt="decorative"
            className="w-17 mx-auto mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase">
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

          <button
            onClick={calculateBMI}
            className="h-[58px] bg-[#ff4d2d] text-black font-extrabold tracking-widest uppercase hover:bg-white transition"
          >
            Calculate BMI
          </button>
        </div>

        {/* RESULT */}
        {bmi !== null && (
          <div className="mt-16 text-center">
            <p className="text-xl tracking-widest uppercase text-[#ff4d2d]">
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
    <label className="block text-sm tracking-widest uppercase text-[#ff4d2d] mb-3">
      {label}
    </label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
      className="w-full h-[58px] bg-transparent border border-white/10 px-5 text-white placeholder-white/50 focus:outline-none focus:border-[#ff4d2d]"
    />
  </div>
);

/* ---------- SELECT COMPONENT ---------- */
const Select = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm tracking-widest uppercase text-[#ff4d2d] mb-3">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-[58px] bg-transparent border border-white/10 px-5 text-white focus:outline-none focus:border-[#ff4d2d]"
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
