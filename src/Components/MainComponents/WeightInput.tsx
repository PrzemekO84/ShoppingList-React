import { useState } from "react";
import type { WeightInfo, Units, WeightCategory } from "../../Types";

const activeButton = "bg-violet-800 border-black text-white";
const nonActiveButton = "bg-stone-900 border-white text-gray-400";

type PropsElements = {
  weightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  productWeight: string | undefined;
  weightInfo: WeightInfo;
  setWeightInfo: React.Dispatch<React.SetStateAction<WeightInfo>>;
};

function WeightInput({
  setWeightInfo,
  productWeight,
  weightInfo,
  weightChange,
}: PropsElements) {
  const getBtnClass = (isActive: boolean) => {
    return `text-lg border p-2 rounded-lg cursor-pointer ${isActive ? activeButton : nonActiveButton}`;
  };

  return (
    <>
      <label className="text-2xl mb-1" htmlFor="">
        Weight
      </label>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div
            className={getBtnClass(weightInfo.weightCategory === "Kilograms")}
            onClick={() => {
              setWeightInfo({ weightCategory: "Kilograms", unit: "g" });
            }}
          >
            Kilograms
          </div>
          <div
            className={getBtnClass(weightInfo.weightCategory === "Liters")}
            onClick={() => {
              setWeightInfo({ weightCategory: "Liters", unit: "ml" });
            }}
          >
            Liters
          </div>
        </div>
        <div>
          <div
            className="flex gap-2"
            style={{
              display:
                weightInfo.weightCategory === "Kilograms" ? "flex" : "none",
            }}
          >
            <div
              className={getBtnClass(weightInfo.unit === "g")}
              onClick={() => {
                setWeightInfo({ weightCategory: "Kilograms", unit: "g" });
              }}
            >
              Grams (G)
            </div>
            <div
              className={getBtnClass(weightInfo.unit === "kg")}
              onClick={() => {
                setWeightInfo({ weightCategory: "Kilograms", unit: "kg" });
              }}
            >
              Kilo (Kg)
            </div>
          </div>
          <div
            className="flex gap-2"
            style={{
              display: weightInfo.weightCategory === "Liters" ? "flex" : "none",
            }}
          >
            <div
              className={getBtnClass(weightInfo.unit === "ml")}
              onClick={() => {
                setWeightInfo({ weightCategory: "Liters", unit: "ml" });
              }}
            >
              Mil (Ml)
            </div>
            <div
              className={getBtnClass(weightInfo.unit === "l")}
              onClick={() => {
                setWeightInfo({ weightCategory: "Liters", unit: "l" });
              }}
            >
              Liters (L)
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <input
        onChange={weightChange}
        name="productWeight"
        className="bg-stone-200 rounded-md p-2 text-black"
        type="number"
        placeholder="Ex. 2000g/5kg/2L/200ml"
        value={productWeight}
        min={0}
      />
    </>
  );
}

export default WeightInput;

//Used code:

// const [weightSelect, setWeightSelect] = useState<Weight>({
//     isClicked: true,
//     weight: "Kilograms",
//   });
//   const [unitSelect, setUnitSelect] = useState<Unit>({
//     isClicked: true,
//     unit: "g",
//   });

//   function updateWeightState(weight: WeightCategory, unit: Units, isClickedWeight: boolean, isClickedUnit: boolean) {
//     setWeightSelect({
//       isClicked: isClickedWeight,
//       weight: weight,
//     });
//     setUnitSelect({
//       isClicked: isClickedUnit,
//       unit: unit,
//     });
//     {
//       props.setWeightInfo({
//         unit: unit,
//         weightCategory: weight,
//       });
//     }
//   }

//   function updateUnitState(unit: Unit, weight: WeightCategory) {
//     setUnitSelect({
//       isClicked: unit.isClicked,
//       unit: unit.unit,
//     });
//     {
//       props.setWeightInfo({
//         unit: unit.unit,
//         weightCategory: weight,
//       });
//     }
//   }
