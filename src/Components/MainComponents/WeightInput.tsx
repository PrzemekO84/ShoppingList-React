import { useState } from "react";
import type { WeightInfo, Units, WeightCategory } from "../../Types";

const activeButton = "bg-violet-800 border-black text-white";
const nonActiveButton = "bg-stone-900 border-white text-gray-400";

type Weight = {
  isClicked: boolean;
  weight: "Kilograms" | "Liters";
};

type Unit = {
  isClicked: boolean;
  unit: Units;
};


type PropFun = {
  weightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  productWeight: string | undefined;
  weightInfo: WeightInfo;
  setWeightInfo: React.Dispatch<React.SetStateAction<WeightInfo>>;
};

function WeightInput(props: PropFun) {
  const [weightSelect, setWeightSelect] = useState<Weight>({
    isClicked: true,
    weight: "Kilograms",
  });
  const [unitSelect, setUnitSelect] = useState<Unit>({
    isClicked: true,
    unit: "g",
  });

  function updateWeightState(weight: WeightCategory, unit: Units, isClickedWeight: boolean, isClickedUnit: boolean) {
    setWeightSelect({
      isClicked: isClickedWeight,
      weight: weight,
    });
    setUnitSelect({
      isClicked: isClickedUnit,
      unit: unit,
    });
    {
      props.setWeightInfo({
        unit: unit,
        weightCategory: weight,
      });
    }
  }

  function updateUnitState(unit: Unit, weight: WeightCategory) {
    setUnitSelect({
      isClicked: unit.isClicked,
      unit: unit.unit,
    });
    {
      props.setWeightInfo({
        unit: unit.unit,
        weightCategory: weight,
      });
    }
  }

  return (
    <>
      <label className="text-2xl mb-1" htmlFor="">
        Weight
      </label>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div
            className={`text-lg border p-2 rounded-lg cursor-pointer ${weightSelect.isClicked ? activeButton : nonActiveButton}`}
            onClick={() => {
              updateWeightState("Kilograms", "g", true, true);
            }}
          >
            Kilograms
          </div>
          <div
            className={`text-lg border p-2 rounded-lg cursor-pointer ${weightSelect.isClicked ? nonActiveButton : activeButton}`}
            onClick={() =>{
              updateWeightState("Liters", "ml", false, true);
            }
            }
          >
            Liters
          </div>
        </div>
        <div>
          <div
            className="flex gap-2"
            style={{ display: weightSelect.isClicked ? "flex" : "none" }}
          >
            <div
              className={`border p-1 rounded-lg w-22 cursor-pointer ${unitSelect.isClicked ? activeButton : nonActiveButton}`}
              onClick={() => {
                updateUnitState({
                    isClicked: true,
                    unit: "g"
                },
                "Kilograms")
              }}
            >
              Grams (G)
            </div>
            <div
              className={`border p-1 rounded-lg w-22 cursor-pointer ${unitSelect.isClicked ? nonActiveButton : activeButton}`}
              onClick={() => {
                updateUnitState({
                    isClicked: false,
                    unit: "kg"
                },
                "Kilograms")
              }}
            >
              Kilo (Kg)
            </div>
          </div>
          <div
            className="flex gap-2"
            style={{ display: weightSelect.isClicked ? "none" : "flex" }}
          >
            <div
              className={`border p-1 rounded-lg w-22 cursor-pointer ${unitSelect.isClicked ? activeButton : nonActiveButton}`}
              onClick={() => {
                updateUnitState({
                    isClicked: true,
                    unit: "ml"
                },
                "Liters")
              }}
            >
              Mil (Ml)
            </div>
            <div
              className={`border p-1 rounded-lg w-22 cursor-pointer ${unitSelect.isClicked ? nonActiveButton : activeButton}`}
              onClick={() => {
                updateUnitState({
                    isClicked: false,
                    unit: "l"
                },
                "Liters")
              }}
            >
              Liters (L)
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <input
        onChange={props.weightChange}
        name="productWeight"
        className="bg-stone-200 rounded-md p-2 text-black"
        type="number"
        placeholder="Ex. 2000g/5kg/2L/200ml"
        value={props.productWeight}
        min={0}
      />
    </>
  );
}

export default WeightInput;
