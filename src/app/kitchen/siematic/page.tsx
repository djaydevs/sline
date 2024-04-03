import SieMaticAtoms from "./siematicAtoms";

function renderSwitch(param : String) {
  switch (param) {
    case "atoms":
      return (
        <SieMaticAtoms />
      );
    default:
      return null;
  }
}

export default function SieMaticStyles() {
  const category = "atoms";

  return (
    <>
      {renderSwitch(category)}
    </>
  );
}
