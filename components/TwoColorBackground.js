export default function TwoColorBackground() {
  return (
    <>
      <div
        className={"bg-left"}
        style={{ backgroundColor: selectedColour }}
      ></div>

      <div className={"bg-right"}></div>
    </>
  );
}
